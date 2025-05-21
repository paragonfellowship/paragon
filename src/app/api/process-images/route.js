// app/api/process-images/route.js
import { NextResponse } from 'next/server';
import Airtable from 'airtable';
import axios from 'axios';
import { put } from '@vercel/blob';
import { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, CRON_SECRET, NODE_ENV } from '@/app/constants'

Airtable.configure({ apiKey: AIRTABLE_API_KEY });
const base = Airtable.base(AIRTABLE_BASE_ID);

// --- CONFIGURATION FOR MULTIPLE TABLES ---
const TABLES_CONFIG = [
  {
    tableName: "Team Members",
    viewName: "🖼️ Images to Process", // View in "Team Members" table
    attachmentFieldName: "image", // Field containing the image(s)
    permanentUrlFieldName: "headshot_blob", // Field to store the Vercel Blob URL(s)
    statusFieldName: "processing_headshot", // Field to track status
    storesMultipleAttachments: false, // Does the attachment field hold multiple images?
                                     // And should permanentUrlFieldName store an array?
  },
  {
    tableName: "Team Members",
    viewName: "🖼️ Images to Process", // View in "Team Members" table
    attachmentFieldName: "school_logo", // Field containing the image(s)
    permanentUrlFieldName: "logo_blob", // Field to store the Vercel Blob URL(s)
    statusFieldName: "processing_logo", // Field to track status
    storesMultipleAttachments: false, // Does the attachment field hold multiple images?
                                     // And should permanentUrlFieldName store an array?
  },
  {
    tableName: "Former Team Members",
    viewName: "🖼️ Images to Process", // View in "Team Members" table
    attachmentFieldName: "image", // Field containing the image(s)
    permanentUrlFieldName: "headshot_blob", // Field to store the Vercel Blob URL(s)
    statusFieldName: "processing_headshot", // Field to track status
    storesMultipleAttachments: false, // Does the attachment field hold multiple images?
                                     // And should permanentUrlFieldName store an array?
  },
  {
    tableName: "Former Team Members",
    viewName: "🖼️ Images to Process", // View in "Team Members" table
    attachmentFieldName: "school_logo", // Field containing the image(s)
    permanentUrlFieldName: "logo_blob", // Field to store the Vercel Blob URL(s)
    statusFieldName: "processing_logo", // Field to track status
    storesMultipleAttachments: false, // Does the attachment field hold multiple images?
                                     // And should permanentUrlFieldName store an array?
  },
  {
    tableName: "Strategic Advisors",
    viewName: "🖼️ Images to Process", // View in "Team Members" table
    attachmentFieldName: "image", // Field containing the image(s)
    permanentUrlFieldName: "headshot_blob", // Field to store the Vercel Blob URL(s)
    statusFieldName: "processing_headshot", // Field to track status
    storesMultipleAttachments: false, // Does the attachment field hold multiple images?
                                     // And should permanentUrlFieldName store an array?
  },
  {
    tableName: "Strategic Advisors",
    viewName: "🖼️ Images to Process", // View in "Team Members" table
    attachmentFieldName: "school_logo", // Field containing the image(s)
    permanentUrlFieldName: "logo_blob", // Field to store the Vercel Blob URL(s)
    statusFieldName: "processing_logo", // Field to track status
    storesMultipleAttachments: false, // Does the attachment field hold multiple images?
                                     // And should permanentUrlFieldName store an array?
  },
{
    tableName: "Guest Speakers",
    viewName: "🖼️ Images to Process", // View in "Team Members" table
    attachmentFieldName: "image", // Field containing the image(s)
    permanentUrlFieldName: "headshot_blob", // Field to store the Vercel Blob URL(s)
    statusFieldName: "processing_headshot", // Field to track status
    storesMultipleAttachments: false, // Does the attachment field hold multiple images?
                                     // And should permanentUrlFieldName store an array?
  },
  {
    tableName: "Testimonials",
    viewName: "🖼️ Images to Process", // View in "Team Members" table
    attachmentFieldName: "headshot", // Field containing the image(s)
    permanentUrlFieldName: "headshot_blob", // Field to store the Vercel Blob URL(s)
    statusFieldName: "processing_headshot", // Field to track status
    storesMultipleAttachments: false, // Does the attachment field hold multiple images?
                                     // And should permanentUrlFieldName store an array?
  },
  {
    tableName: "Government Partner Logos",
    viewName: "🖼️ Images to Process", // View in "Team Members" table
    attachmentFieldName: "logo", // Field containing the image(s)
    permanentUrlFieldName: "image_blob", // Field to store the Vercel Blob URL(s)
    statusFieldName: "processing_image", // Field to track status
    storesMultipleAttachments: false, // Does the attachment field hold multiple images?
                                     // And should permanentUrlFieldName store an array?
  },
];

// Helper function to process a single record based on its configuration
async function processAirtableRecord(record, config) {
  const recordId = record.id;
  const attachmentsArray = record.get(config.attachmentFieldName); // This is always an array from Airtable

  if (!attachmentsArray || attachmentsArray.length === 0) {
    console.log(`No attachments in ${config.attachmentFieldName} for record ${recordId} in table ${config.tableName}.`);
    await base(config.tableName).update(recordId, {
      [config.statusFieldName]: 'Error - No Attachments',
    });
    return { success: false, error: 'No attachments found' };
  }

  try {
    await base(config.tableName).update(recordId, {
      [config.statusFieldName]: 'Processing',
    });

    const permanentUrls = [];
    // If storesMultipleAttachments is true, process all. Otherwise, process only the first.
    const attachmentsToProcess = config.storesMultipleAttachments ? attachmentsArray : [attachmentsArray[0]];

    for (const attachment of attachmentsToProcess) {
      if (!attachment.url || !attachment.filename) {
        console.warn(`Skipping invalid attachment object for record ${recordId}:`, attachment);
        continue;
      }
      const tempAirtableUrl = attachment.url;
      // Sanitize filename and ensure uniqueness for Vercel Blob pathname
      // Using attachment.id is the most reliable for uniqueness if available
      const safePart = (attachment.id || attachment.filename).replace(/[^a-zA-Z0-9_.-]/g, '_');
      const pathname = `airtable-uploads/${config.tableName}/${recordId}/${safePart}`;

      console.log(`Processing attachment '${attachment.filename}' (ID: ${attachment.id || 'N/A'}) for record ${recordId} from table ${config.tableName}...`);

      const imageResponse = await axios.get(tempAirtableUrl, {
        responseType: 'arraybuffer',
      });
      const imageBuffer = imageResponse.data;

      const blob = await put(pathname, imageBuffer, {
        access: 'public',
        contentType: attachment.type,
        addRandomSuffix: false, // Set to false for predictable URLs if overwriting is desired based on pathname
                                // If true (default), each upload for the same path gets a new unique suffix.
                                // For idempotency (re-running doesn't create duplicates if source is same),
                                // a consistent pathname (like the one above using attachment.id) and addRandomSuffix: false is good.
		allowOverwrite: true
      });
      permanentUrls.push(blob.url);
      console.log(`Uploaded to Vercel Blob: ${blob.url}`);
    }

    if (permanentUrls.length === 0 && attachmentsToProcess.length > 0) {
      // This might happen if all attachments were invalid or skipped
      throw new Error("No valid attachments were processed to generate permanent URLs.");
    }

    // How to store the URL(s) back in Airtable:
    let updatePayload = {};
    if (config.storesMultipleAttachments) {
      // For multiple images, store as a JSON string array in a Long Text field
      updatePayload[config.permanentUrlFieldName] = JSON.stringify(permanentUrls);
    } else if (permanentUrls.length > 0) {
      // For a single image, store the URL directly (if field type is URL)
      updatePayload[config.permanentUrlFieldName] = permanentUrls[0];
    }

    updatePayload[config.statusFieldName] = 'Processed';

    await base(config.tableName).update(recordId, updatePayload);
    console.log(`Record ${recordId} in table ${config.tableName} successfully processed.`);
    return { success: true };

  } catch (error) {
    console.error(`Error processing record ${recordId} in table ${config.tableName}:`, error.message, error.stack);
    await base(config.tableName).update(recordId, {
      [config.statusFieldName]: 'Error',
    });
    return { success: false, error: error.message };
  }
}


export async function GET(request) {
  const authHeader = request.headers.get('authorization');
  if (NODE_ENV === 'production' && (!CRON_SECRET || authHeader !== `Bearer ${CRON_SECRET}`)) {
	  console.log(NODE_ENV);
	  console.log(CRON_SECRET);
	  console.log(authHeader);
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  console.log('Starting multi-table image processing via Vercel Cron Job...');
  let overallStats = {
    tablesProcessed: 0,
    recordsAttempted: 0,
    recordsSucceeded: 0,
    recordsFailed: 0,
  };

  try {
    for (const tableConfig of TABLES_CONFIG) {
      console.log(`\n--- Processing Table: ${tableConfig.tableName} ---`);
      console.log(`Using view: "${tableConfig.viewName}", Attachment field: "${tableConfig.attachmentFieldName}"`);

      const recordsToProcess = await base(tableConfig.tableName)
        .select({
          view: tableConfig.viewName,
          maxRecords: 30, // Batch size per table per cron run
        })
        .firstPage();

      if (recordsToProcess.length === 0) {
        console.log(`No records to process in ${tableConfig.tableName}'s view "${tableConfig.viewName}".`);
        continue;
      }

      overallStats.tablesProcessed++;
      console.log(`Found ${recordsToProcess.length} records to process in ${tableConfig.tableName}.`);

      for (const record of recordsToProcess) {
        overallStats.recordsAttempted++;
        const result = await processAirtableRecord(record, tableConfig);
        if (result.success) {
          overallStats.recordsSucceeded++;
        } else {
          overallStats.recordsFailed++;
        }
      }
    }

    console.log('\n--- Overall Batch Finished ---');
    console.log(`Tables Checked: ${TABLES_CONFIG.length}`);
    console.log(`Tables with items to process this run: ${overallStats.tablesProcessed}`);
    console.log(`Records Attempted: ${overallStats.recordsAttempted}`);
    console.log(`Records Succeeded: ${overallStats.recordsSucceeded}`);
    console.log(`Records Failed: ${overallStats.recordsFailed}`);

    return NextResponse.json({
      message: 'Multi-table image processing batch finished.',
      stats: overallStats,
    });

  } catch (error) {
    console.error('Critical error during outer loop of multi-table processing:', error.message, error.stack);
    return NextResponse.json({ error: 'Failed to process images', details: error.message, stats: overallStats }, { status: 500 });
  }
}