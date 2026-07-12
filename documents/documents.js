// ─────────────────────────────────────────────────────────────────────────────
//  DOCUMENTS LIST — Personal Document Vault
//
//  DOCUMENT ADD KARNE KE 2 TARIKE:
//
//  ── TARIKA 1: Google Drive link se (Recommended) ──────────────────────────
//  1. Google Drive folder kholo aur file upload karo
//  2. File pe Right click → Share → "Anyone with link" → Copy link
//  3. Neeche entry add karo — "driveLink" mein paste karo
//
//  {
//    id: <unique number>,
//    name: "Display Name",
//    category: "Education",         // Education | Identity | Career | Finance | Personal
//    type: "PDF",                   // PDF | Image | Word | Other
//    date: "2024-01-15",
//    size: "1.2 MB",
//    driveLink: "https://drive.google.com/file/d/FILE_ID/view?usp=sharing"
//  }
//
//  ── TARIKA 2: File directly GitHub pe upload karke ────────────────────────
//  1. GitHub pe docs/documents/ folder mein file upload karo
//  2. Neeche entry add karo — "file" mein filename likho
//
//  {
//    id: <unique number>,
//    name: "Display Name",
//    file: "filename.pdf",          // ← docs/documents/ folder mein upload ki gayi file
//    category: "Education",
//    type: "PDF",
//    date: "2024-01-15",
//    size: "500 KB"
//  }
//
// ─────────────────────────────────────────────────────────────────────────────

const DOCUMENTS = [

  // ── Apni files yahan add karo ────────────────────────────────────────────

  // Example — Google Drive wala:
  // {
  //   id: 1,
  //   name: "10th Marksheet",
  //   category: "Education",
  //   type: "PDF",
  //   date: "2020-05-10",
  //   size: "500 KB",
  //   driveLink: "https://drive.google.com/file/d/XXXXXXXX/view?usp=sharing"
  // },

  // Example — GitHub pe file upload wala:
  // {
  //   id: 2,
  //   name: "Aadhar Card",
  //   file: "aadhar.jpg",
  //   category: "Identity",
  //   type: "Image",
  //   date: "2022-03-01",
  //   size: "250 KB"
  // },

];
