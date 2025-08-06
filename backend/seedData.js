const mongoose = require('mongoose');
const Document = require('./models/Document');

// Sample data to insert
const sampleDocuments = [
  {
    executionId: "EXE-001",
    fileName: "contract_2024.pdf",
    startTime: new Date("2024-01-15T09:30:00.000Z"),
    endTime: new Date("2024-01-15T09:35:00.000Z"),
    reviewStatus: "Completed",
    environment: "Production",
    filePath: "/uploads/contract_2024.pdf",
    fileSize: 2048576,
    processingTime: 300
  },
  {
    executionId: "EXE-002",
    fileName: "invoice_march.pdf",
    startTime: new Date("2024-01-15T10:15:00.000Z"),
    endTime: new Date("2024-01-15T10:18:00.000Z"),
    reviewStatus: "In Review",
    environment: "Production",
    filePath: "/uploads/invoice_march.pdf",
    fileSize: 1536000,
    processingTime: 180
  },
  {
    executionId: "EXE-003",
    fileName: "report_q4.pdf",
    startTime: new Date("2024-01-15T11:00:00.000Z"),
    endTime: new Date("2024-01-15T11:05:00.000Z"),
    reviewStatus: "Completed",
    environment: "Development",
    filePath: "/uploads/report_q4.pdf",
    fileSize: 3072000,
    processingTime: 300
  },
  {
    executionId: "EXE-004",
    fileName: "policy_document.pdf",
    startTime: new Date("2024-01-15T14:20:00.000Z"),
    endTime: new Date("2024-01-15T14:25:00.000Z"),
    reviewStatus: "Pending",
    environment: "Production",
    filePath: "/uploads/policy_document.pdf",
    fileSize: 1024000,
    processingTime: 300
  },
  {
    executionId: "EXE-005",
    fileName: "financial_statement.pdf",
    startTime: new Date("2024-01-16T08:30:00.000Z"),
    endTime: new Date("2024-01-16T08:32:00.000Z"),
    reviewStatus: "Completed",
    environment: "Production",
    filePath: "/uploads/financial_statement.pdf",
    fileSize: 4096000,
    processingTime: 120
  },
  {
    executionId: "EXE-006",
    fileName: "employee_handbook.pdf",
    startTime: new Date("2024-01-16T09:45:00.000Z"),
    endTime: new Date("2024-01-16T09:50:00.000Z"),
    reviewStatus: "In Review",
    environment: "Development",
    filePath: "/uploads/employee_handbook.pdf",
    fileSize: 5120000,
    processingTime: 300
  },
  {
    executionId: "EXE-007",
    fileName: "technical_spec.pdf",
    startTime: new Date("2024-01-16T11:20:00.000Z"),
    endTime: new Date("2024-01-16T11:22:00.000Z"),
    reviewStatus: "Completed",
    environment: "Testing",
    filePath: "/uploads/technical_spec.pdf",
    fileSize: 819200,
    processingTime: 120
  },
  {
    executionId: "EXE-008",
    fileName: "legal_agreement.pdf",
    startTime: new Date("2024-01-16T13:15:00.000Z"),
    endTime: new Date("2024-01-16T13:18:00.000Z"),
    reviewStatus: "Pending",
    environment: "Production",
    filePath: "/uploads/legal_agreement.pdf",
    fileSize: 2560000,
    processingTime: 180
  }
];

// Connect to MongoDB and seed data
const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/documentai');
    console.log('Connected to MongoDB for seeding data...');

    // Clear existing data
    await Document.deleteMany({});
    console.log('Cleared existing documents...');

    // Insert sample data
    const result = await Document.insertMany(sampleDocuments);
    console.log(`✅ Successfully inserted ${result.length} documents into the database!`);

    // Display the inserted documents
    console.log('\n📋 Inserted Documents:');
    result.forEach(doc => {
      console.log(`- ${doc.executionId}: ${doc.fileName} (${doc.reviewStatus})`);
    });

    console.log('\n🎉 Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seeding function
seedDatabase(); 