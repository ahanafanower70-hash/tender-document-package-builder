/**
 * Tender Document Package Builder
 * Modern Executive SaaS Dashboard with Dynamic Interactive SVG Diagrams
 * Pure Client-Side Implementation (Offline-Capable, Zero Backend)
 * Powered by PDF-Lib & PDF.js
 */

// ==========================================
// 1. Translations & Internationalization (i18n)
// ==========================================
const translations = {
  en: {
    app_title: "Tender Document Package Builder",
    app_tagline: "Validate requirements, verify expiry dates, detect duplicates & compile compliant PDF packages",
    badge_client_only: "AI Automation • 100% Client-Side",
    compliance_overview_title: "Compliance Status",
    compliance_overview_desc: "Real-time validation against tender requirements",
    stat_compliant: "Compliant",
    stat_blocking: "Blocking Issues",
    stat_optional_skipped: "Optional Skipped",
    btn_demo_files: "Demo Files",
    btn_generate_package: "Generate Package",
    blocking_banner_title: "Package Generation Blocked",
    tender_metadata_title: "Tender Metadata",
    btn_upload_json: "Upload JSON",
    btn_edit_json: "Edit JSON",
    btn_reset_sample: "Reset Sample",
    meta_tender_id: "Tender ID",
    meta_deadline: "Submission Deadline",
    meta_title: "Tender Title",
    meta_procuring_entity: "Procuring Entity",
    meta_bidder_name: "Bidder Name",
    requirements_checklist_title: "Document Requirements & Matching",
    upload_panel_title: "Upload & File Repository",
    btn_auto_match: "Auto Match",
    btn_clear_all: "Clear",
    dropzone_title: "Click or drag & drop PDF files here",
    dropzone_subtitle: "Select up to 30 PDF documents (Max total 50 MB)",
    dropzone_policy: "Only valid PDF files are accepted • Instant duplicate detection",
    uploaded_files_heading: "Uploaded Documents",
    empty_files_title: "No PDF files uploaded yet",
    empty_files_desc: "Upload your tender documents to match against required checklist",
    footer_text: "Tender Document Package Builder • AI Document Automation Platform • Strictly Client-Side Local Processing",
    modal_req_title: "Load Tender Requirements",
    modal_req_desc: "Upload a requirements.json file or paste JSON code containing tender metadata and required documents.",
    btn_choose_json_file: "Upload & Apply JSON",
    btn_export_json: "Export Template",
    label_paste_json: "Or edit/paste requirements.json payload:",
    btn_cancel: "Cancel",
    btn_apply_json: "Apply Requirements",
    modal_compile_title: "Package Generation",
    step_1_text: "Initialize compliant package structure",
    step_2_text: "Generate official Cover Page in English with Shield Logo",
    step_3_text: "Merge required document pages in specified sequence",
    step_4_text: "Stamp uniform page footers (Page X of Y) across all sheets",
    step_5_text: "Finalize & trigger package download",
    btn_preview_compiled: "Preview Generated PDF",
    btn_download_package: "Download Package",
    btn_close: "Close",
    preview_loading: "Rendering preview...",
    
    // Sidebar & Navigation
    nav_menu_title: "Navigation",
    nav_dashboard: "Dashboard",
    nav_requirements: "Requirements",
    nav_repository: "File Repository",
    nav_compiler: "Compiler",
    nav_preferences: "Preferences",
    search_placeholder: "Search requirements, files, or tender ID...",

    // KPI & Diagrams
    kpi_compliance_rate: "Compliance Score",
    kpi_total_requirements: "Total Requirements",
    kpi_files_uploaded: "Uploaded PDF Files",
    kpi_blocking_issues: "Blocking Issues",
    diagram_compliance_gauge: "Compliance Meter",
    diagram_status_levels: "Requirement Levels",
    diagram_page_distribution: "Dossier Page Volume & Activity Curve",
    bar_ok: "OK",
    bar_missing: "Missing",
    bar_expiry: "Exp Needed",
    bar_expired: "Expired",
    bar_optional: "Optional",

    // Status Badges
    status_ok: "Compliant / OK",
    status_missing: "Missing (Required)",
    status_expiry_needed: "Expiry Date Needed",
    status_expired: "Expired Document",
    status_not_provided: "Not Provided (Optional)",
    status_duplicate: "Duplicate Content Flagged",

    // Requirement UI labels
    label_select_file: "Select Attached PDF:",
    option_select_file: "-- Choose uploaded PDF --",
    option_unmatched: "No file matched",
    label_expiry_date: "Expiry Date (Must be ≥ Deadline):",
    btn_clear_match: "Detach",
    tag_required: "Required",
    tag_optional: "Optional",
    pages_count: "pages",
    page_count_single: "page",

    // Validation messages
    err_non_pdf: "Rejected: Only PDF files (.pdf) are supported.",
    err_corrupted_pdf: "Error: File is corrupted or unreadable.",
    err_encrypted_pdf: "Error: File is password-protected or encrypted.",
    err_file_limit_reached: "Limit Reached: Maximum 30 files allowed.",
    err_size_limit_reached: "Size Limit: Total file size cannot exceed 50 MB.",
    err_duplicate_file: "Duplicate file detected with identical binary content.",
    msg_demo_files_generated: "Sample test files created and loaded successfully!",
    msg_auto_matched: "Matched {count} document(s) by filename keywords.",
    msg_package_ready: "Package compiled successfully! Download starting...",
    msg_requirements_loaded: "Tender requirements loaded successfully ({count} requirements)."
  },

  bn: {
    app_title: "দরপত্র নথি প্যাকেজ প্রস্তুতকারক",
    app_tagline: "স্বয়ংক্রিয় নথি যাচাইকরণ, মেয়াদ পরীক্ষা, ডুপ্লিকেট সনাক্তকরণ ও প্যাকেজ প্রস্তুতকারক",
    badge_client_only: "এআই অটোমেশন • ১০০% ক্লায়েন্ট-সাইড",
    compliance_overview_title: "নথি যাচাইকরণ স্ট্যাটাস",
    compliance_overview_desc: "দরপত্রের শর্তাবলী ও নিয়মাবলীর রিয়েল-টাইম মূল্যায়ন",
    stat_compliant: "যাচাইকৃত সঠিক",
    stat_blocking: "বাধা সৃষ্টিকারী সমস্যা",
    stat_optional_skipped: "ঐচ্ছিক বাদ দেওয়া",
    btn_demo_files: "নমুনা ফাইল",
    btn_generate_package: "প্যাকেজ তৈরি করুন",
    blocking_banner_title: "প্যাকেজ তৈরি স্থগিত রয়েছে",
    tender_metadata_title: "দরপত্রের সাধারণ তথ্য",
    btn_upload_json: "JSON আপলোড",
    btn_edit_json: "JSON সম্পাদনা",
    btn_reset_sample: "নমুনা রিসেট",
    meta_tender_id: "দরপত্র আইডি (Tender ID)",
    meta_deadline: "জমা দেওয়ার শেষ সময় (Deadline)",
    meta_title: "দরপত্রের বিষয়বস্তু",
    meta_procuring_entity: "ক্রয়কারী সংস্থা (Entity)",
    meta_bidder_name: "দরপত্রদাতার নাম (Bidder)",
    requirements_checklist_title: "প্রয়োজনীয় নথিপত্র ও ম্যাপিং",
    upload_panel_title: "আপলোড ও ফাইল ভান্ডার",
    btn_auto_match: "অটো ম্যাচ",
    btn_clear_all: "মুছে ফেলুন",
    dropzone_title: "এখানে ক্লিক করুন অথবা PDF ফাইল টেনে আনুন",
    dropzone_subtitle: "সর্বোচ্চ ৩০টি PDF নথি নির্বাচন করুন (মোট সীমা ৫০ মেগাবাইট)",
    dropzone_policy: "শুধুমাত্র বৈধ PDF নথি গ্রহণযোগ্য • তাৎক্ষণিক ডুপ্লিকেট সনাক্তকরণ",
    uploaded_files_heading: "আপলোডকৃত নথিসমূহ",
    empty_files_title: "কোনো PDF ফাইল এখনও আপলোড করা হয়নি",
    empty_files_desc: "চেকলিস্টের সাথে মেলাতে আপনার দরপত্রের PDF ফাইলগুলো আপলোড করুন",
    footer_text: "দরপত্র নথি প্যাকেজ প্রস্তুতকারক • এআই ডকুমেন্ট অটোমেশন প্ল্যাটফর্ম • সম্পূর্ণ ক্লায়েন্ট-সাইড প্রসেসিং",
    modal_req_title: "দরপত্রের শর্তাবলী লোড করুন",
    modal_req_desc: "একটি requirements.json ফাইল আপলোড করুন অথবা সরাসরি দরপত্রের মেটাডাটা ও শর্তাবলী পেস্ট করুন।",
    btn_choose_json_file: "JSON আপলোড ও প্রয়োগ করুন",
    btn_export_json: "টেমপ্লেট এক্সপোর্ট",
    label_paste_json: "অথবা requirements.json কোড সম্পাদনা/পেস্ট করুন:",
    btn_cancel: "বাতিল",
    btn_apply_json: "শর্তাবলী প্রয়োগ করুন",
    modal_compile_title: "প্যাকেজ প্রস্তুতকরণ প্রক্রিয়া",
    step_1_text: "কমপ্লায়েন্ট প্যাকেজ স্ট্রাকচার প্রস্তুতকরণ",
    step_2_text: "শিল্ড লোগোসহ ইংরেজি ভাষায় অফিসিয়াল কভার পেজ তৈরি",
    step_3_text: "নির্দিষ্ট ক্রম অনুযায়ী নথির পাতাগুলো যুক্ত করা",
    step_4_text: "সকল পাতায় অভিন্ন পেজ নম্বর ও ফুটার স্ট্যাম্প বসানো",
    step_5_text: "প্যাকেজ চূড়ান্তকরণ ও ডাউনলোড শুরু",
    btn_preview_compiled: "প্রস্তুতকৃত PDF প্রিভিউ দেখুন",
    btn_download_package: "প্যাকেজ ডাউনলোড করুন",
    btn_close: "বন্ধ করুন",
    preview_loading: "প্রিভিউ তৈরি হচ্ছে...",

    // Sidebar & Navigation
    nav_menu_title: "মেনু",
    nav_dashboard: "ড্যাশবোর্ড",
    nav_requirements: "শর্তাবলী",
    nav_repository: "ফাইল ভান্ডার",
    nav_compiler: "কম্পাইলার",
    nav_preferences: "পছন্দসমূহ",
    search_placeholder: "নথিপত্র, ফাইল বা দরপত্র খুঁজুন...",

    // KPI & Diagrams
    kpi_compliance_rate: "কমপ্লায়েন্স স্কোর",
    kpi_total_requirements: "মোট শর্তাবলী",
    kpi_files_uploaded: "আপলোডকৃত PDF ফাইল",
    kpi_blocking_issues: "বাধা সৃষ্টিকারী সমস্যা",
    diagram_compliance_gauge: "কমপ্লায়েন্স মিটার",
    diagram_status_levels: "শর্তাবলীর স্ট্যাটাস লেভেল",
    diagram_page_distribution: "পাতার সংখ্যা ও ডকুমেন্ট ভলিউম কার্ভ",
    bar_ok: "সঠিক",
    bar_missing: "অনুপস্থিত",
    bar_expiry: "মেয়াদ প্রয়োজন",
    bar_expired: "মেয়াদোত্তীর্ণ",
    bar_optional: "ঐচ্ছিক",

    // Status Badges
    status_ok: "যাচাইকৃত / সঠিক",
    status_missing: "অনুপস্থিত (প্রয়োজনীয়)",
    status_expiry_needed: "মেয়াদ উত্তীর্ণের তারিখ প্রয়োজন",
    status_expired: "মেয়াদোত্তীর্ণ নথি",
    status_not_provided: "সংযুক্ত নয় (ঐচ্ছিক)",
    status_duplicate: "ডুপ্লিকেট ফাইল সনাক্ত হয়েছে",

    // Requirement UI labels
    label_select_file: "সংযুক্ত PDF নির্বাচন করুন:",
    option_select_file: "-- আপলোডকৃত PDF বেছে নিন --",
    option_unmatched: "কোনো ফাইল সংযুক্ত নেই",
    label_expiry_date: "মেয়াদোত্তীর্ণের তারিখ (≥ শেষ সময় হতে হবে):",
    btn_clear_match: "বিচ্ছিন্ন করুন",
    tag_required: "আবশ্যক",
    tag_optional: "ঐচ্ছিক",
    pages_count: "পাতা",
    page_count_single: "পাতা",

    // Validation messages
    err_non_pdf: "প্রত্যাখ্যাত: শুধুমাত্র PDF ফাইল (.pdf) অনুমোদিত।",
    err_corrupted_pdf: "ত্রুটি: ফাইলটি ত্রুটিপূর্ণ বা ক্ষতিগ্রস্ত।",
    err_encrypted_pdf: "ত্রুটি: ফাইলটিতে পাসওয়ার্ড বা এনক্রিপশন রয়েছে।",
    err_file_limit_reached: "সীমা সমাপ্ত: সর্বোচ্চ ৩০টি ফাইল আপলোড করা যাবে।",
    err_size_limit_reached: "সাইজ সীমা: ফাইলের মোট আকার ৫০ মেগাবাইটের বেশি হতে পারবে না।",
    err_duplicate_file: "একই বাইনারি কনটেন্টের ডুপ্লিকেট ফাইল সনাক্ত করা হয়েছে।",
    msg_demo_files_generated: "নমুনা টেস্ট ফাইল সফলভাবে তৈরি ও লোড করা হয়েছে!",
    msg_auto_matched: "{count}টি নথি শিরোনামের সাথে সফলভাবে ম্যাচ হয়েছে।",
    msg_package_ready: "প্যাকেজ সফলভাবে তৈরি হয়েছে! ডাউনলোড শুরু হচ্ছে...",
    msg_requirements_loaded: "দরপত্রের শর্তাবলী সফলভাবে লোড করা হয়েছে ({count}টি শর্ত)।"
  }
};

// ==========================================
// 2. Global Application State
// ==========================================
const MAX_FILES_LIMIT = 30;
const MAX_TOTAL_BYTES = 50 * 1024 * 1024; // 50 MB

const state = {
  lang: 'en',
  theme: 'dark',
  searchQuery: '',
  tender: null,       // Normalized tender metadata & requirements
  files: [],          // Uploaded files { id, name, size, pageCount, hash, isDuplicate, fileObj, buffer }
  mappings: {},       // { [reqId]: fileId } - Strict 1-to-1 matching
  expiryDates: {},    // { [reqId]: "YYYY-MM-DD" }
  compiledBlob: null,
  compiledFileName: ""
};

// Default sample tender requirements
const defaultTenderData = {
  tender_id: "TEN-2026-BD-8941",
  title: "Supply and Installation of Smart Office Equipment",
  procuring_entity: "Department of Public Works, Dhaka",
  bidder_name: "Apex Global Solutions Ltd.",
  submission_deadline: "2026-10-15",
  requirements: [
    {
      id: "req-1",
      order: 1,
      title_en: "Trade License / Business Registration",
      title_bn: "ট্রেড লাইসেন্স / ব্যবসা নিবন্ধন সনদ",
      description_en: "Valid and up-to-date Trade License issued by relevant City Corporation / Municipality",
      description_bn: "সংশ্লিষ্ট সিটি কর্পোরেশন / পৌরসভা কর্তৃক প্রদত্ত হালনাগাদ ট্রেড লাইসেন্স",
      required: true,
      has_expiry: true
    },
    {
      id: "req-2",
      order: 2,
      title_en: "TIN Certificate & Tax Return Acknowledgment",
      title_bn: "টিআইএন সনদ ও আয়কর রিটার্ন দাখিলের প্রমাণক",
      description_en: "Taxpayer's Identification Number certificate and latest assessment year submission slip",
      description_bn: "করদাতা শনাক্তকরণ নম্বর (টিআইএন) এবং সর্বশেষ কর বর্ষের রিটার্ন দাখিলের প্রমাণক",
      required: true,
      has_expiry: false
    },
    {
      id: "req-3",
      order: 3,
      title_en: "VAT Registration Certificate (13-digit BIN)",
      title_bn: "মূসক নিবন্ধন সনদ (১৩ ডিজিটের বিআইএন)",
      description_en: "Central VAT Registration Certificate issued by National Board of Revenue",
      description_bn: "জাতীয় রাজস্ব বোর্ড (এনবিআর) কর্তৃক প্রদত্ত ১৩ ডিজিটের মূসক নিবন্ধন সনদ",
      required: true,
      has_expiry: false
    },
    {
      id: "req-4",
      order: 4,
      title_en: "Bank Solvency Certificate & Credit Commitment",
      title_bn: "ব্যাংক সচ্ছলতা সনদ ও ক্রেডিট কমিটমেন্ট",
      description_en: "Official bank solvency certificate issued within last 30 days",
      description_bn: "তফসিলি ব্যাংক কর্তৃক বিগত ৩০ দিনের মধ্যে ইস্যুকৃত ব্যাংক সচ্ছলতার সনদপত্র",
      required: true,
      has_expiry: true
    },
    {
      id: "req-5",
      order: 5,
      title_en: "Past Experience & Satisfactory Completion Certificate",
      title_bn: "পূর্ব কাজের অভিজ্ঞতা ও সন্তোষজনক সমাপ্তি সনদপত্র",
      description_en: "End-user completion certificates demonstrating similar project executions",
      description_bn: "অনুরূপ কাজ সম্পন্নের সন্তোষজনক সমাপ্তি ও ব্যবহারকারী প্রত্যয়নপত্র",
      required: false,
      has_expiry: false
    },
    {
      id: "req-6",
      order: 6,
      title_en: "Manufacturer's Authorization Form (MAF)",
      title_bn: "প্রস্তুতকারকের অনুমোদন পত্র (এমএএফ)",
      description_en: "Official manufacturer authorization letter confirming warranty and spare support",
      description_bn: "প্রস্তাবিত যন্ত্রপাতির জন্য ওয়ারেন্টি সমর্থনের প্রত্যয়নসহ প্রস্তুতকারকের অনুমোদনপত্র",
      required: false,
      has_expiry: true
    }
  ]
};

// ==========================================
// 3. Application Initialization
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Configure PDF.js worker
  if (window.pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';
  }

  // Set default theme to dark (matching reference UI)
  document.documentElement.setAttribute('data-theme', 'dark');
  state.theme = 'dark';

  // Load default tender data
  loadDefaultSampleRequirements();

  // Setup drag & drop for file dropzone
  setupFileDropzone();

  // Setup drag & drop for tender JSON panel
  setupJSONPanelDropzone();

  // Apply language (or from URL ?lang=bn)
  const params = new URLSearchParams(window.location.search);
  if (params.get('lang')) {
    setLanguage(params.get('lang'));
  } else {
    applyLanguage(state.lang);
  }

  // Auto-run demo if requested (?demo=true)
  if (params.get('demo') === 'true') {
    setTimeout(() => generateSampleTestFiles(), 350);
  }

  // Open mobile drawer if requested (?drawer=open)
  if (params.get('drawer') === 'open') {
    setTimeout(() => openMobileSidebar(), 200);
  }
});

// Setup Main PDF Dropzone
function setupFileDropzone() {
  const dropzone = document.getElementById('pdf-dropzone');
  if (!dropzone) return;

  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add('drag-over');
    }, false);
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove('drag-over');
    }, false);
  });

  dropzone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    if (dt && dt.files && dt.files.length > 0) {
      const first = dt.files[0];
      if (first.name.toLowerCase().endsWith('.json')) {
        handleDirectJSONFile(dt.files);
        return;
      }
      handleFileInputChange(dt.files);
    }
  }, false);
}

// Setup JSON Drag & Drop on Metadata Card
function setupJSONPanelDropzone() {
  const panel = document.getElementById('tender-meta-panel');
  if (!panel) return;

  panel.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    panel.style.borderColor = 'var(--accent-teal)';
  }, false);

  panel.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
    panel.style.borderColor = 'var(--border-card)';
  }, false);

  panel.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    panel.style.borderColor = 'var(--border-card)';
    const dt = e.dataTransfer;
    if (dt && dt.files && dt.files.length > 0) {
      handleDirectJSONFile(dt.files);
    }
  }, false);
}

// Mobile Drawer & Off-Canvas System
function toggleMobileSidebar() {
  const sidebar = document.getElementById('dashboard-sidebar');
  if (!sidebar) return;
  if (sidebar.classList.contains('mobile-open')) {
    closeMobileSidebar();
  } else {
    openMobileSidebar();
  }
}

function openMobileSidebar() {
  const sidebar = document.getElementById('dashboard-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (sidebar) sidebar.classList.add('mobile-open');
  if (backdrop) backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('dashboard-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (sidebar) sidebar.classList.remove('mobile-open');
  if (backdrop) backdrop.classList.remove('active');
  document.body.style.overflow = '';
}

// Navigation & Smooth Scroll
function switchNavTab(tab) {
  document.querySelectorAll('.sidebar-nav-item').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`nav-btn-${tab}`);
  if (activeBtn) activeBtn.classList.add('active');
  const main = document.querySelector('.dashboard-main');
  if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMobileSidebar();
}

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.querySelectorAll('.sidebar-nav-item').forEach(btn => btn.classList.remove('active'));
    if (sectionId === 'requirements-section') {
      const reqBtn = document.getElementById('nav-btn-requirements');
      if (reqBtn) reqBtn.classList.add('active');
    } else if (sectionId === 'repository-section') {
      const repoBtn = document.getElementById('nav-btn-repository');
      if (repoBtn) repoBtn.classList.add('active');
    }
  }
  closeMobileSidebar();
}

// Search Filter Input
function filterDashboardContent(query) {
  state.searchQuery = (query || '').toLowerCase().trim();
  renderRequirementsList();
}

// ==========================================
// 4. Internationalization & Theme Handling
// ==========================================
function setLanguage(lang) {
  if (lang !== 'en' && lang !== 'bn') return;
  state.lang = lang;

  document.getElementById('lang-en-btn').classList.toggle('active', lang === 'en');
  document.getElementById('lang-bn-btn').classList.toggle('active', lang === 'bn');
  document.documentElement.lang = lang;

  applyLanguage(lang);
  renderRequirementsList();
  renderUploadedFilesList();
  updateComplianceStatus();
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  // Translate all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Translate inputs with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Update dynamic badges
  if (state.tender && state.tender.requirements) {
    const count = state.tender.requirements.length;
    document.getElementById('req-count-badge').textContent = `${count} ${lang === 'bn' ? 'টি শর্ত' : 'Requirements'}`;
  }
}

function t(key, vars = {}) {
  const dict = translations[state.lang] || translations.en;
  let str = dict[key] || translations.en[key] || key;
  for (const [k, v] of Object.entries(vars)) {
    str = str.replace(`{${k}}`, v);
  }
  return str;
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  state.theme = next;

  document.getElementById('theme-moon-icon').style.display = next === 'dark' ? 'none' : 'block';
  document.getElementById('theme-sun-icon').style.display = next === 'dark' ? 'block' : 'none';
}

// ==========================================
// 5. Toast Notifications
// ==========================================
function showToast(message, type = 'info', title = null) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const defaultTitles = {
    error: state.lang === 'bn' ? 'সতর্কতা / ত্রুটি' : 'Error',
    success: state.lang === 'bn' ? 'সফল হয়েছে' : 'Success',
    warning: state.lang === 'bn' ? 'সতর্কতা' : 'Warning',
    info: state.lang === 'bn' ? 'তথ্য' : 'Notice'
  };

  toast.innerHTML = `
    <div class="toast-body">
      <div class="toast-title">${title || defaultTitles[type] || 'Notice'}</div>
      <div class="toast-msg">${message}</div>
    </div>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// ==========================================
// 6. Universal Tender Data Normalizer & Parser
// ==========================================
function normalizeTenderData(input) {
  if (!input) throw new Error("Empty JSON data provided.");

  let raw = input;
  if (typeof raw === 'string') {
    let clean = raw.trim();
    if (clean.startsWith('```')) {
      clean = clean.replace(/^```[a-zA-Z]*\n?/, '').replace(/```$/, '').trim();
    }
    raw = JSON.parse(clean);
  }

  if (raw.tender && typeof raw.tender === 'object' && !Array.isArray(raw.tender)) {
    raw = raw.tender;
  } else if (raw.data && typeof raw.data === 'object' && !Array.isArray(raw.data) && !raw.requirements) {
    raw = raw.data;
  }

  let rawReqs = [];
  if (Array.isArray(raw)) {
    rawReqs = raw;
    raw = {
      tender_id: "TENDER-" + Math.floor(1000 + Math.random() * 9000),
      title: "Tender Document Package",
      procuring_entity: "Procuring Entity",
      bidder_name: "Submitting Bidder",
      submission_deadline: "2026-10-15",
      requirements: rawReqs
    };
  } else {
    rawReqs = raw.requirements || raw.documents || raw.required_documents || raw.requiredDocuments || raw.items || raw.checklist || raw.docs || [];
  }

  if (!Array.isArray(rawReqs)) {
    rawReqs = [];
  }

  const tender_id = String(raw.tender_id || raw.tenderId || raw.tender_no || raw.tenderNo || raw.id || raw.code || raw.ref_no || ("TEN-" + Math.floor(1000 + Math.random() * 9000))).trim();
  const title = String(raw.title || raw.tender_title || raw.tenderTitle || raw.name || raw.project_name || raw.projectName || "Tender Document Package").trim();
  const procuring_entity = String(raw.procuring_entity || raw.procuringEntity || raw.entity || raw.organization || raw.agency || raw.client || raw.buyer || "Procuring Entity").trim();
  const bidder_name = String(raw.bidder_name || raw.bidderName || raw.bidder || raw.vendor || raw.vendor_name || raw.supplier || raw.contractor || "Apex Global Solutions Ltd.").trim();
  
  const rawDeadline = String(raw.submission_deadline || raw.submissionDeadline || raw.deadline || raw.closing_date || raw.due_date || "").trim();
  const submission_deadline = normalizeDateString(rawDeadline) || "2026-10-15";

  const requirements = rawReqs.map((item, idx) => {
    const id = String(item.id || item.doc_id || item.key || `req-${idx + 1}`);
    const order = typeof item.order === 'number' ? item.order : (idx + 1);

    const title_en = String(item.title_en || item.title || item.name || item.doc_name || item.document_name || `Requirement ${order}`).trim();
    const title_bn = String(item.title_bn || item.title || title_en).trim();

    const description_en = String(item.description_en || item.description || item.desc || item.details || "").trim();
    const description_bn = String(item.description_bn || item.description || description_en).trim();

    let required = true;
    if (item.required !== undefined) {
      required = item.required === true || item.required === 'true' || item.required === 1;
    } else if (item.mandatory !== undefined) {
      required = item.mandatory === true || item.mandatory === 'true' || item.mandatory === 1;
    } else if (item.optional !== undefined) {
      required = !(item.optional === true || item.optional === 'true' || item.optional === 1);
    }

    let has_expiry = false;
    if (item.has_expiry !== undefined) {
      has_expiry = item.has_expiry === true || item.has_expiry === 'true' || item.has_expiry === 1;
    } else if (item.hasExpiry !== undefined) {
      has_expiry = item.hasExpiry === true || item.hasExpiry === 'true' || item.hasExpiry === 1;
    } else if (item.expiry_required !== undefined) {
      has_expiry = item.expiry_required === true || item.expiry_required === 'true';
    }

    return {
      id,
      order,
      title_en,
      title_bn,
      description_en,
      description_bn,
      required,
      has_expiry
    };
  });

  requirements.sort((a, b) => (a.order || 0) - (b.order || 0));

  return {
    tender_id,
    title,
    procuring_entity,
    bidder_name,
    submission_deadline,
    requirements
  };
}

function normalizeDateString(dateStr) {
  if (!dateStr) return "";
  const s = dateStr.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return s;
  const dmy = s.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);
  if (dmy) {
    return `${dmy[3]}-${dmy[2].padStart(2, '0')}-${dmy[1].padStart(2, '0')}`;
  }
  try {
    const d = new Date(s);
    if (!isNaN(d.getTime())) {
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  } catch (e) {}
  return s;
}

function parseDateSafe(dateStr) {
  if (!dateStr) return null;
  const iso = normalizeDateString(dateStr);
  if (/^\d{4}-\d{2}-\d{2}$/.test(iso)) {
    return new Date(`${iso}T00:00:00`);
  }
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? null : d;
}

// ==========================================
// 7. Tender Data Applicator & JSON Handlers
// ==========================================
function loadDefaultSampleRequirements() {
  setTenderData(JSON.parse(JSON.stringify(defaultTenderData)));
}

function setTenderData(rawData) {
  try {
    const normalized = normalizeTenderData(rawData);
    state.tender = normalized;
    
    // Clean mappings & expiry dates
    const validReqIds = new Set(normalized.requirements.map(r => r.id));
    for (const reqId of Object.keys(state.mappings)) {
      if (!validReqIds.has(reqId)) delete state.mappings[reqId];
    }
    for (const reqId of Object.keys(state.expiryDates)) {
      if (!validReqIds.has(reqId)) delete state.expiryDates[reqId];
    }

    // Render metadata card
    document.getElementById('meta-tender-id').textContent = normalized.tender_id;
    document.getElementById('meta-title').textContent = normalized.title;
    document.getElementById('meta-procuring-entity').textContent = normalized.procuring_entity;
    document.getElementById('meta-bidder-name').textContent = normalized.bidder_name;
    document.getElementById('meta-deadline').textContent = normalized.submission_deadline;

    // Update avatar pills
    const pillBidder = document.getElementById('pill-bidder-name');
    if (pillBidder) pillBidder.textContent = normalized.bidder_name.split(' ')[0] || 'Bidder';
    const pillCode = document.getElementById('pill-tender-code');
    if (pillCode) pillCode.textContent = normalized.tender_id.substring(0, 10);

    const count = normalized.requirements.length;
    document.getElementById('req-count-badge').textContent = `${count} ${state.lang === 'bn' ? 'টি শর্ত' : 'Requirements'}`;

    if (state.files.length > 0) {
      smartAutoMatch(false);
    }

    renderRequirementsList();
    updateComplianceStatus();

    return normalized;
  } catch (err) {
    showToast(`Failed to parse tender JSON: ${err.message}`, 'error');
    console.error("Tender JSON normalization error:", err);
    throw err;
  }
}

async function handleDirectJSONFile(files) {
  if (!files || files.length === 0) return;
  const file = files[0];

  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    const normalized = setTenderData(parsed);

    const textarea = document.getElementById('requirements-json-textarea');
    if (textarea) textarea.value = JSON.stringify(normalized, null, 2);

    showToast(t('msg_requirements_loaded', { count: normalized.requirements.length }), 'success');
  } catch (err) {
    showToast(`Invalid JSON file (${file.name}): ${err.message}`, 'error');
  }

  const inp = document.getElementById('direct-json-input');
  if (inp) inp.value = '';
}

async function handleModalJSONFile(files) {
  if (!files || files.length === 0) return;
  const file = files[0];

  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    const normalized = setTenderData(parsed);

    const textarea = document.getElementById('requirements-json-textarea');
    if (textarea) textarea.value = JSON.stringify(normalized, null, 2);

    closeRequirementsModal();
    showToast(t('msg_requirements_loaded', { count: normalized.requirements.length }), 'success');
  } catch (err) {
    showToast(`Invalid JSON file: ${err.message}`, 'error');
  }

  const inp = document.getElementById('requirements-file-input');
  if (inp) inp.value = '';
}

function openRequirementsModal() {
  const modal = document.getElementById('modal-requirements');
  const textarea = document.getElementById('requirements-json-textarea');
  if (state.tender) {
    textarea.value = JSON.stringify(state.tender, null, 2);
  }
  modal.classList.add('active');
}

function closeRequirementsModal() {
  document.getElementById('modal-requirements').classList.remove('active');
}

function applyRequirementsJSON() {
  const textarea = document.getElementById('requirements-json-textarea');
  try {
    const parsed = JSON.parse(textarea.value);
    const normalized = setTenderData(parsed);
    closeRequirementsModal();
    showToast(t('msg_requirements_loaded', { count: normalized.requirements.length }), 'success');
  } catch (err) {
    showToast(`JSON Parse Error: ${err.message}`, 'error');
  }
}

function downloadRequirementsJSON() {
  if (!state.tender) return;
  const jsonStr = JSON.stringify(state.tender, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${state.tender.tender_id || 'tender'}_requirements.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// ==========================================
// 8. PDF Upload, Parsing & Verification Engine
// ==========================================
async function handleFileInputChange(fileList) {
  if (!fileList || fileList.length === 0) return;

  const filesArray = Array.from(fileList);

  for (const file of filesArray) {
    if (state.files.length >= MAX_FILES_LIMIT) {
      showToast(t('err_file_limit_reached'), 'warning');
      break;
    }

    const isPdfExt = file.name.toLowerCase().endsWith('.pdf');
    const isPdfType = file.type === 'application/pdf' || file.type === '';
    if (!isPdfExt && !isPdfType) {
      showToast(`${file.name}: ${t('err_non_pdf')}`, 'error');
      continue;
    }

    const currentTotalSize = state.files.reduce((acc, f) => acc + f.size, 0);
    if (currentTotalSize + file.size > MAX_TOTAL_BYTES) {
      showToast(`${file.name}: ${t('err_size_limit_reached')}`, 'error');
      break;
    }

    try {
      const buffer = await file.arrayBuffer();
      const hash = await calculateSHA256(buffer);

      let pageCount = 0;
      try {
        const pdfDoc = await PDFLib.PDFDocument.load(buffer, { ignoreEncryption: false });
        pageCount = pdfDoc.getPageCount();
      } catch (pdfErr) {
        if (pdfErr.message && pdfErr.message.toLowerCase().includes('encrypt')) {
          showToast(`${file.name}: ${t('err_encrypted_pdf')}`, 'error');
        } else {
          showToast(`${file.name}: ${t('err_corrupted_pdf')}`, 'error');
        }
        continue;
      }

      const existingDuplicate = state.files.find(f => f.hash === hash);
      const isDuplicate = !!existingDuplicate;

      const fileItem = {
        id: 'file_' + Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        pageCount: pageCount,
        hash: hash,
        isDuplicate: isDuplicate,
        buffer: buffer,
        fileObj: file
      };

      if (isDuplicate) {
        existingDuplicate.isDuplicate = true;
        showToast(`${file.name}: ${t('err_duplicate_file')}`, 'warning');
      }

      state.files.push(fileItem);
    } catch (err) {
      showToast(`${file.name}: ${err.message}`, 'error');
    }
  }

  const finp = document.getElementById('pdf-file-input');
  if (finp) finp.value = '';

  updateStorageMeter();
  recalculateDuplicateFlags();
  renderUploadedFilesList();
  renderRequirementsList();
  updateComplianceStatus();
}

async function calculateSHA256(buffer) {
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function recalculateDuplicateFlags() {
  const hashMap = {};
  state.files.forEach(f => {
    hashMap[f.hash] = (hashMap[f.hash] || 0) + 1;
  });

  state.files.forEach(f => {
    f.isDuplicate = hashMap[f.hash] > 1;
  });
}

function removeFile(fileId) {
  for (const [reqId, mappedId] of Object.entries(state.mappings)) {
    if (mappedId === fileId) delete state.mappings[reqId];
  }

  state.files = state.files.filter(f => f.id !== fileId);
  recalculateDuplicateFlags();
  updateStorageMeter();
  renderUploadedFilesList();
  renderRequirementsList();
  updateComplianceStatus();
}

function clearAllFiles() {
  if (state.files.length === 0) return;
  state.files = [];
  state.mappings = {};
  updateStorageMeter();
  renderUploadedFilesList();
  renderRequirementsList();
  updateComplianceStatus();
  showToast("All uploaded files removed.", "info");
}

function updateStorageMeter() {
  const totalCount = state.files.length;
  const totalBytes = state.files.reduce((acc, f) => acc + f.size, 0);
  const totalMB = (totalBytes / (1024 * 1024)).toFixed(1);

  document.getElementById('storage-count-label').textContent = `${totalCount} / ${MAX_FILES_LIMIT} Files`;
  document.getElementById('storage-size-label').textContent = `${totalMB} MB / 50.0 MB`;

  const percent = Math.min(100, Math.round((totalBytes / MAX_TOTAL_BYTES) * 100));
  const fill = document.getElementById('storage-progress-fill');
  fill.style.width = `${percent}%`;

  fill.className = 'capacity-fill';
  if (percent > 85) {
    fill.classList.add('danger');
  }

  document.getElementById('uploaded-files-count-badge').textContent = `${totalCount} ${state.lang === 'bn' ? 'টি ফাইল' : 'Files'}`;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// ==========================================
// 9. Render Uploaded Files List
// ==========================================
function renderUploadedFilesList() {
  const container = document.getElementById('uploaded-files-list');
  const placeholder = document.getElementById('no-files-placeholder');

  if (state.files.length === 0) {
    container.innerHTML = '';
    if (placeholder) {
      container.appendChild(placeholder);
      placeholder.style.display = 'flex';
    }
    return;
  }

  container.innerHTML = '';

  state.files.forEach(file => {
    const item = document.createElement('div');
    item.className = `file-row-item ${file.isDuplicate ? 'is-duplicate' : ''}`;

    const isMapped = Object.values(state.mappings).includes(file.id);
    const pagesLabel = file.pageCount === 1 ? t('page_count_single') : t('pages_count');

    item.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.65rem; min-width: 0; flex: 1;">
        <div style="width: 32px; height: 32px; border-radius: 6px; background: rgba(56, 189, 248, 0.15); color: var(--accent-cyan); display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
          </svg>
        </div>
        <div style="min-width: 0; display: flex; flex-direction: column; gap: 0.1rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--text-main); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${file.name}">
            ${escapeHtml(file.name)}
          </div>
          <div style="display: flex; align-items: center; gap: 0.45rem; font-size: 0.72rem; color: var(--text-sub); flex-wrap: wrap;">
            <span>${formatBytes(file.size)}</span>
            <span>•</span>
            <span>${file.pageCount} ${pagesLabel}</span>
            ${file.isDuplicate ? `<span class="status-pill pill-duplicate" style="font-size: 0.65rem; padding: 1px 5px;">${t('status_duplicate')}</span>` : ''}
            ${isMapped ? `<span class="status-pill pill-ok" style="font-size: 0.65rem; padding: 1px 6px;">Matched</span>` : ''}
          </div>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 0.35rem; flex-shrink: 0;">
        <button type="button" class="btn btn-card" style="padding: 4px 8px; font-size: 0.75rem;" onclick="previewFile('${file.id}')" title="Preview document">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </button>
        <button type="button" class="btn btn-danger" style="padding: 4px 8px; font-size: 0.75rem;" onclick="removeFile('${file.id}')" title="Remove file">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    `;

    container.appendChild(item);
  });
}

// ==========================================
// 10. Requirement Status Evaluation & Mapping
// ==========================================
function evaluateRequirementStatus(req) {
  const mappedFileId = state.mappings[req.id];
  const mappedFile = state.files.find(f => f.id === mappedFileId);

  if (!mappedFile) {
    if (req.required) {
      return { code: 'MISSING', isBlocking: true, message: `${getReqTitle(req)}: Missing file (Required)` };
    } else {
      return { code: 'NOT_PROVIDED', isBlocking: false, message: `${getReqTitle(req)}: Optional document not provided` };
    }
  }

  if (mappedFile.isDuplicate) {
    return { code: 'DUPLICATE', isBlocking: true, message: `${getReqTitle(req)}: Attached file has duplicate binary content` };
  }

  if (req.has_expiry) {
    const expiry = state.expiryDates[req.id];
    if (!expiry) {
      return { code: 'EXPIRY_NEEDED', isBlocking: true, message: `${getReqTitle(req)}: Expiry date is required` };
    }

    const deadline = state.tender && state.tender.submission_deadline;
    if (deadline) {
      const expDate = parseDateSafe(expiry);
      const deadDate = parseDateSafe(deadline);

      if (expDate && deadDate) {
        if (expDate.getTime() < deadDate.getTime()) {
          return { code: 'EXPIRED', isBlocking: true, message: `${getReqTitle(req)}: Expiry date (${expiry}) is before submission deadline (${deadline})` };
        }
      }
    }
  }

  return { code: 'OK', isBlocking: false, message: `${getReqTitle(req)}: Verified OK` };
}

function getReqTitle(req) {
  if (!req) return "Document";
  return state.lang === 'bn' ? (req.title_bn || req.title_en || req.title || "নথি") : (req.title_en || req.title_bn || req.title || "Document");
}

function getReqDesc(req) {
  if (!req) return "";
  return state.lang === 'bn' ? (req.description_bn || req.description_en || req.description || "") : (req.description_en || req.description_bn || req.description || "");
}

function setRequirementMapping(reqId, fileId) {
  if (!fileId) {
    delete state.mappings[reqId];
    renderRequirementsList();
    renderUploadedFilesList();
    updateComplianceStatus();
    return;
  }

  for (const [otherReqId, otherFileId] of Object.entries(state.mappings)) {
    if (otherFileId === fileId && otherReqId !== reqId) {
      delete state.mappings[otherReqId];
    }
  }

  state.mappings[reqId] = fileId;
  renderRequirementsList();
  renderUploadedFilesList();
  updateComplianceStatus();
}

function setRequirementExpiry(reqId, dateStr) {
  state.expiryDates[reqId] = dateStr;
  updateComplianceStatus();

  const req = state.tender && state.tender.requirements && state.tender.requirements.find(r => r.id === reqId);
  if (req) {
    const status = evaluateRequirementStatus(req);
    const pill = document.getElementById(`badge-req-${req.id}`);
    if (pill) {
      pill.className = `status-pill pill-${status.code.toLowerCase()}`;
      pill.textContent = t(`status_${status.code.toLowerCase()}`);
    }
    const card = document.getElementById(`card-req-${req.id}`);
    if (card) {
      card.className = `req-row-card status-${status.code.toLowerCase()}`;
    }
    const prog = document.getElementById(`prog-req-${req.id}`);
    if (prog) {
      prog.style.width = status.code === 'OK' ? '100%' : (status.code === 'EXPIRY_NEEDED' ? '50%' : '20%');
      prog.style.backgroundColor = status.code === 'OK' ? 'var(--accent-teal)' : (status.code === 'EXPIRY_NEEDED' ? 'var(--accent-amber)' : 'var(--accent-rose)');
    }
  }
}

function smartAutoMatch(showToastNotice = true) {
  if (!state.tender || !state.tender.requirements || state.files.length === 0) {
    if (showToastNotice) showToast("No files or requirements available to match.", "warning");
    return;
  }

  let matchedCount = 0;
  const usedFileIds = new Set(Object.values(state.mappings));

  state.tender.requirements.forEach(req => {
    if (state.mappings[req.id] && state.files.some(f => f.id === state.mappings[req.id])) {
      return;
    }

    const titleTokens = (req.title_en + ' ' + (req.title_bn || ''))
      .toLowerCase()
      .split(/[\s,/_.-]+/)
      .filter(w => w.length > 2);

    for (const file of state.files) {
      if (usedFileIds.has(file.id)) continue;

      const lowerName = file.name.toLowerCase();
      const match = titleTokens.some(token => lowerName.includes(token));
      if (match) {
        state.mappings[req.id] = file.id;
        usedFileIds.add(file.id);
        matchedCount++;
        break;
      }
    }
  });

  renderRequirementsList();
  renderUploadedFilesList();
  updateComplianceStatus();

  if (showToastNotice) {
    showToast(t('msg_auto_matched', { count: matchedCount }), 'success');
  }
}

// ==========================================
// 11. Render Requirements Checklist & Table
// ==========================================
function renderRequirementsList() {
  const container = document.getElementById('requirements-container');
  if (!container || !state.tender || !state.tender.requirements) return;

  container.innerHTML = '';

  const q = state.searchQuery;

  state.tender.requirements.forEach(req => {
    const title = getReqTitle(req);
    const desc = getReqDesc(req);
    const mappedFile = state.files.find(f => f.id === state.mappings[req.id]);

    // Apply search filter if query exists
    if (q) {
      const matchTitle = title.toLowerCase().includes(q);
      const matchDesc = desc.toLowerCase().includes(q);
      const matchFile = mappedFile && mappedFile.name.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc && !matchFile) {
        return; // Filter out
      }
    }

    const status = evaluateRequirementStatus(req);
    const mappedFileId = state.mappings[req.id] || '';
    const expiryVal = state.expiryDates[req.id] || '';

    // Calculate popularity bar completion percentage
    let completionPercent = 10;
    let barColor = 'var(--accent-rose)';
    if (status.code === 'OK') {
      completionPercent = 100;
      barColor = 'var(--accent-teal)';
    } else if (status.code === 'EXPIRY_NEEDED') {
      completionPercent = 65;
      barColor = 'var(--accent-amber)';
    } else if (status.code === 'NOT_PROVIDED') {
      completionPercent = 0;
      barColor = 'var(--text-muted)';
    }

    const card = document.createElement('div');
    card.id = `card-req-${req.id}`;
    card.className = `req-row-card status-${status.code.toLowerCase()}`;

    let optionsHtml = `<option value="">${t('option_select_file')}</option>`;
    state.files.forEach(f => {
      const isSelected = f.id === mappedFileId;
      let mappedTag = '';
      if (!isSelected) {
        const otherReq = Object.entries(state.mappings).find(([rId, fId]) => fId === f.id);
        if (otherReq) mappedTag = ' (Mapped elsewhere)';
      }
      optionsHtml += `<option value="${f.id}" ${isSelected ? 'selected' : ''}>${escapeHtml(f.name)} (${f.pageCount} p)${mappedTag}</option>`;
    });

    card.innerHTML = `
      <div class="req-header-line">
        <div class="req-title-wrap">
          <span class="req-index-badge">#${req.order}</span>
          <span class="req-title-text">${escapeHtml(title)}</span>
          ${req.required ? `<span class="status-pill pill-missing" style="font-size:0.65rem; padding: 1px 6px;">${t('tag_required')}</span>` : `<span class="status-pill pill-not_provided" style="font-size:0.65rem; padding: 1px 6px;">${t('tag_optional')}</span>`}
        </div>
        <div id="badge-req-${req.id}" class="status-pill pill-${status.code.toLowerCase()}">
          ${t(`status_${status.code.toLowerCase()}`)}
        </div>
      </div>

      <!-- Popularity / Progress Bar (matching reference) -->
      <div class="req-popularity-bar">
        <div id="prog-req-${req.id}" class="req-popularity-fill" style="width: ${completionPercent}%; background: ${barColor};"></div>
      </div>

      <div class="req-desc-text">${escapeHtml(desc)}</div>

      <div class="req-mapping-controls">
        <div class="control-item">
          <label>${t('label_select_file')}</label>
          <div style="display: flex; gap: 0.5rem; align-items: center;">
            <select class="form-select" onchange="setRequirementMapping('${req.id}', this.value)">
              ${optionsHtml}
            </select>
            ${mappedFileId ? `
              <button type="button" class="btn btn-card" style="padding: 4px 8px; font-size: 0.75rem;" onclick="setRequirementMapping('${req.id}', '')" title="${t('btn_clear_match')}">
                ✕
              </button>
            ` : ''}
          </div>
        </div>

        ${req.has_expiry ? `
          <div class="control-item">
            <label>${t('label_expiry_date')}</label>
            <input type="date" class="form-input ${status.code === 'EXPIRED' ? 'error' : ''}" value="${expiryVal}" onchange="setRequirementExpiry('${req.id}', this.value)">
          </div>
        ` : `
          <div class="control-item" style="visibility: hidden;">
            <label>&nbsp;</label>
            <input type="text" class="form-input" disabled>
          </div>
        `}
      </div>
    `;

    container.appendChild(card);
  });
}

// ==========================================
// 12. Dynamic Interactive Diagrams & KPI Engine
// ==========================================
function updateComplianceStatus() {
  if (!state.tender || !state.tender.requirements) return;

  const totalReqs = state.tender.requirements.length;
  let mandatoryReqs = 0;
  let okCount = 0;
  let missingCount = 0;
  let expiryNeededCount = 0;
  let expiredCount = 0;
  let optionalSkippedCount = 0;
  let blockedCount = 0;
  const blockingIssues = [];

  state.tender.requirements.forEach(req => {
    if (req.required) mandatoryReqs++;
    const status = evaluateRequirementStatus(req);

    switch (status.code) {
      case 'OK':
        okCount++;
        break;
      case 'MISSING':
        missingCount++;
        blockedCount++;
        blockingIssues.push(status.message);
        break;
      case 'EXPIRY_NEEDED':
        expiryNeededCount++;
        blockedCount++;
        blockingIssues.push(status.message);
        break;
      case 'EXPIRED':
        expiredCount++;
        blockedCount++;
        blockingIssues.push(status.message);
        break;
      case 'NOT_PROVIDED':
        optionalSkippedCount++;
        break;
      case 'DUPLICATE':
        blockedCount++;
        blockingIssues.push(status.message);
        break;
    }
  });

  // Check mapped duplicates
  state.files.forEach(f => {
    if (f.isDuplicate && Object.values(state.mappings).includes(f.id)) {
      if (!blockingIssues.some(msg => msg.includes(f.name))) {
        blockingIssues.push(`Duplicate file '${f.name}' cannot be used in compilation.`);
        blockedCount++;
      }
    }
  });

  // Compute Compliance Percentage (0% - 100%)
  const divisor = mandatoryReqs > 0 ? mandatoryReqs : totalReqs;
  const compliancePercent = Math.min(100, Math.round((okCount / (divisor || 1)) * 100));

  // Compute Total Pages across attached files
  const totalPages = state.files.reduce((acc, f) => acc + (f.pageCount || 0), 0);

  // 1. UPDATE KPI CARDS (Matching Reference UI)
  document.getElementById('kpi-compliance-val').textContent = `${compliancePercent}%`;
  document.getElementById('kpi-compliance-pill').textContent = `${compliancePercent}% Pass`;
  document.getElementById('kpi-total-reqs-val').textContent = totalReqs;
  document.getElementById('kpi-mandatory-count').textContent = `${mandatoryReqs} Req`;
  document.getElementById('kpi-files-uploaded-val').textContent = state.files.length;
  document.getElementById('kpi-total-pages-pill').textContent = `${totalPages} Pages`;
  document.getElementById('kpi-blocking-issues-val').textContent = blockedCount;
  document.getElementById('kpi-blocking-pill').textContent = `${blockedCount} Block`;

  // 2. DYNAMIC DIAGRAM 1: RADIAL SEMI-CIRCLE ARC GAUGE (80% Gauge in Reference)
  const arcLength = 314.16; // Pi * r where r=100
  const dashOffset = arcLength - (arcLength * (compliancePercent / 100));
  const fillArc = document.getElementById('gauge-fill-arc');
  if (fillArc) {
    fillArc.style.strokeDashoffset = dashOffset;
  }
  document.getElementById('gauge-text-val').textContent = `${compliancePercent}%`;
  document.getElementById('gauge-sublabel').textContent = `${okCount}/${mandatoryReqs} Passed`;
  const gaugeTag = document.getElementById('gauge-status-tag');
  if (gaugeTag) {
    gaugeTag.textContent = compliancePercent === 100 ? 'Compliant' : (compliancePercent > 50 ? 'In Progress' : 'Action Required');
    gaugeTag.className = `status-pill ${compliancePercent === 100 ? 'pill-ok' : (compliancePercent > 50 ? 'pill-expiry_needed' : 'pill-missing')}`;
  }

  // 3. DYNAMIC DIAGRAM 2: VERTICAL BAR LEVEL CHART (Level Chart in Reference)
  const maxBarVal = Math.max(totalReqs, 1);
  const setBar = (idVal, idFill, count, color) => {
    const elVal = document.getElementById(idVal);
    const elFill = document.getElementById(idFill);
    if (elVal) elVal.textContent = count;
    if (elFill) {
      const heightPercent = count === 0 ? 0 : Math.max(12, Math.round((count / maxBarVal) * 100));
      elFill.style.height = `${heightPercent}%`;
      elFill.style.backgroundColor = color;
    }
  };
  setBar('bar-val-ok', 'bar-fill-ok', okCount, 'var(--accent-teal)');
  setBar('bar-val-missing', 'bar-fill-missing', missingCount, 'var(--accent-rose)');
  setBar('bar-val-expiry', 'bar-fill-expiry', expiryNeededCount, 'var(--accent-amber)');
  setBar('bar-val-expired', 'bar-fill-expired', expiredCount, '#e11d48');
  setBar('bar-val-optional', 'bar-fill-optional', optionalSkippedCount, 'var(--accent-purple)');
  document.getElementById('level-chart-total-tag').textContent = `${totalReqs} Total`;

  // 4. DYNAMIC DIAGRAM 3: DOCUMENT VOLUME & DUAL-WAVE CHART (Customer Fulfilment in Reference)
  renderDynamicWaveChart(totalPages, state.files.length, okCount);

  // 5. UPDATE BLOCKING BANNER & PACKAGE BUTTON
  const alertBox = document.getElementById('blocking-alert-container');
  const alertList = document.getElementById('blocking-issues-list');
  const generateBtn = document.getElementById('btn-generate-package');
  const subtext = document.getElementById('compliance-status-subtext');

  if (blockedCount > 0) {
    alertBox.style.display = 'flex';
    alertList.innerHTML = blockingIssues.map(issue => `<li>${escapeHtml(issue)}</li>`).join('');
    generateBtn.disabled = true;
    generateBtn.classList.remove('btn-pulse');
    subtext.textContent = state.lang === 'bn' 
      ? `প্যাকেজ তৈরির জন্য ${blockedCount}টি সমস্যা সমাধান করতে হবে` 
      : `${blockedCount} blocking issues prevent package generation`;
  } else {
    alertBox.style.display = 'none';
    alertList.innerHTML = '';
    generateBtn.disabled = false;
    generateBtn.classList.add('btn-pulse');
    subtext.textContent = state.lang === 'bn' 
      ? `সকল শর্তাবলী যাচাইকৃত! প্যাকেজ ডাউনলোড করতে প্রস্তুত` 
      : `All requirements verified! Ready to compile and download`;
  }
}

// Render SVG Wave Chart Curves Dynamically based on Pages & Files
function renderDynamicWaveChart(totalPages, filesCount, okCount) {
  const waveTag = document.getElementById('wave-chart-pages-tag');
  if (waveTag) waveTag.textContent = `${totalPages} Pages / ${filesCount} Files`;

  const areaTeal = document.getElementById('wave-area-teal');
  const lineTeal = document.getElementById('wave-line-teal');
  const areaPurple = document.getElementById('wave-area-purple');
  const linePurple = document.getElementById('wave-line-purple');
  const peakDot = document.getElementById('wave-peak-dot');

  // Compute dynamic heights based on page counts and status
  const h1 = Math.max(30, 110 - Math.min(80, totalPages * 9));
  const h2 = Math.max(25, 115 - Math.min(85, okCount * 18));
  const h3 = Math.max(40, 110 - Math.min(65, filesCount * 12));

  if (lineTeal && areaTeal) {
    const dTeal = `M 0 115 Q 125 ${h1}, 250 ${h2} T 500 ${h3}`;
    lineTeal.setAttribute('d', dTeal);
    areaTeal.setAttribute('d', `${dTeal} L 500 130 L 0 130 Z`);
  }

  if (linePurple && areaPurple) {
    const dPurple = `M 0 120 Q 125 ${h1 + 10}, 250 ${h2 + 15} T 500 ${h3 + 8}`;
    linePurple.setAttribute('d', dPurple);
    areaPurple.setAttribute('d', `${dPurple} L 500 130 L 0 130 Z`);
  }

  if (peakDot) {
    peakDot.setAttribute('cx', '250');
    peakDot.setAttribute('cy', String(h2));
  }
}

// ==========================================
// 13. Package Generation & Stamping Engine
// ==========================================
async function startPackageGeneration() {
  closeMobileSidebar();
  const modal = document.getElementById('modal-compile-progress');
  modal.classList.add('active');

  const statusMsg = document.getElementById('compile-status-message');
  const progressBar = document.getElementById('compile-progress-bar');
  const footer = document.getElementById('compile-footer');
  footer.style.display = 'none';

  resetCompileSteps();

  try {
    setCompileStep(1, true);
    statusMsg.textContent = t('step_1_text');
    progressBar.style.width = '20%';
    await sleep(250);

    const mergedPdf = await PDFLib.PDFDocument.create();

    setCompileStep(1, false, true);
    setCompileStep(2, true);
    statusMsg.textContent = t('step_2_text');
    progressBar.style.width = '40%';
    await sleep(250);

    await generateOfficialCoverPage(mergedPdf);

    setCompileStep(2, false, true);
    setCompileStep(3, true);
    statusMsg.textContent = t('step_3_text');
    progressBar.style.width = '65%';
    await sleep(250);

    const sortedReqs = [...state.tender.requirements].sort((a, b) => (a.order || 0) - (b.order || 0));

    for (const req of sortedReqs) {
      const fileId = state.mappings[req.id];
      if (!fileId) continue;

      const fileItem = state.files.find(f => f.id === fileId);
      if (!fileItem) continue;

      const srcPdf = await PDFLib.PDFDocument.load(fileItem.buffer);
      const copiedPages = await mergedPdf.copyPages(srcPdf, srcPdf.getPageIndices());
      copiedPages.forEach(p => mergedPdf.addPage(p));
    }

    setCompileStep(3, false, true);
    setCompileStep(4, true);
    statusMsg.textContent = t('step_4_text');
    progressBar.style.width = '85%';
    await sleep(250);

    const totalPages = mergedPdf.getPageCount();
    const tenderId = state.tender.tender_id || 'TENDER';
    const helveticaFont = await mergedPdf.embedFont(PDFLib.StandardFonts.Helvetica);

    const pages = mergedPdf.getPages();
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      const { width, height } = page.getSize();
      const pageNum = i + 1;
      const footerText = `${tenderId} | Page ${pageNum} of ${totalPages}`;
      const fontSize = 8.5;
      const textWidth = helveticaFont.widthOfTextAtSize(footerText, fontSize);

      page.drawLine({
        start: { x: 40, y: 32 },
        end: { x: width - 40, y: 32 },
        thickness: 0.5,
        color: PDFLib.rgb(0.7, 0.75, 0.8)
      });

      page.drawText(footerText, {
        x: (width - textWidth) / 2,
        y: 18,
        size: fontSize,
        font: helveticaFont,
        color: PDFLib.rgb(0.35, 0.4, 0.48)
      });
    }

    setCompileStep(4, false, true);
    setCompileStep(5, true);
    statusMsg.textContent = t('step_5_text');
    progressBar.style.width = '100%';
    await sleep(250);

    const pdfBytes = await mergedPdf.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    state.compiledBlob = blob;
    state.compiledFileName = `${tenderId}_Package.pdf`;

    setCompileStep(5, false, true);
    statusMsg.textContent = `${t('msg_package_ready')} (${totalPages} Pages, ${(blob.size / 1024 / 1024).toFixed(2)} MB)`;

    footer.style.display = 'flex';
    downloadCompiledPackage();

  } catch (err) {
    statusMsg.textContent = `Error during generation: ${err.message}`;
    showToast(err.message, 'error');
  }
}

async function generateOfficialCoverPage(pdfDoc) {
  const page = pdfDoc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  const fontTitle = await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaOblique);

  page.drawRectangle({
    x: 25,
    y: 25,
    width: width - 50,
    height: height - 50,
    borderColor: PDFLib.rgb(0.15, 0.25, 0.4),
    borderWidth: 1.5,
    color: PDFLib.rgb(0.99, 0.99, 1.0)
  });

  page.drawRectangle({
    x: 27,
    y: height - 105,
    width: width - 54,
    height: 78,
    color: PDFLib.rgb(0.07, 0.1, 0.16)
  });

  try {
    const logoRes = await fetch('logo-shield.jpg');
    if (logoRes.ok) {
      const logoBytes = await logoRes.arrayBuffer();
      const logoImg = await pdfDoc.embedJpg(logoBytes);
      page.drawImage(logoImg, {
        x: 45,
        y: height - 95,
        width: 48,
        height: 60
      });
    }
  } catch (e) {
    console.warn("Could not embed logo image in cover page:", e);
  }

  const headerTitle = "TENDER SUBMISSION PACKAGE";
  const headerSub = "AI DOCUMENT AUTOMATION • PROCUREMENT COMPLIANCE DOSSIER";

  page.drawText(headerTitle, {
    x: 105,
    y: height - 62,
    size: 17,
    font: fontTitle,
    color: PDFLib.rgb(0.95, 0.98, 1)
  });

  page.drawText(headerSub, {
    x: 105,
    y: height - 82,
    size: 8.5,
    font: fontRegular,
    color: PDFLib.rgb(0.55, 0.75, 0.95)
  });

  let curY = height - 130;

  page.drawRectangle({
    x: 45,
    y: curY - 120,
    width: width - 90,
    height: 120,
    borderColor: PDFLib.rgb(0.8, 0.85, 0.92),
    borderWidth: 1,
    color: PDFLib.rgb(0.96, 0.97, 0.99)
  });

  const tenderId = state.tender.tender_id || 'N/A';
  const tenderTitle = state.tender.title || 'N/A';
  const entity = state.tender.procuring_entity || 'N/A';
  const bidder = state.tender.bidder_name || 'N/A';
  const deadline = state.tender.submission_deadline || 'N/A';
  const generatedDate = new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' });

  const drawMetaField = (label, value, x, y) => {
    page.drawText(label.toUpperCase(), {
      x,
      y,
      size: 7.5,
      font: fontTitle,
      color: PDFLib.rgb(0.35, 0.42, 0.52)
    });
    page.drawText(String(value).substring(0, 52), {
      x,
      y: y - 13,
      size: 9.5,
      font: fontRegular,
      color: PDFLib.rgb(0.08, 0.12, 0.2)
    });
  };

  drawMetaField("Tender Identifier", tenderId, 60, curY - 20);
  drawMetaField("Submission Deadline", deadline, 330, curY - 20);
  drawMetaField("Procuring Entity", entity, 60, curY - 55);
  drawMetaField("Bidder / Submitting Entity", bidder, 330, curY - 55);
  drawMetaField("Project Title", tenderTitle, 60, curY - 90);
  drawMetaField("Package Generated At", generatedDate, 330, curY - 90);

  curY -= 145;

  page.drawText("TABLE OF INCLUDED DOCUMENTS & ATTACHMENTS", {
    x: 45,
    y: curY,
    size: 10.5,
    font: fontTitle,
    color: PDFLib.rgb(0.08, 0.15, 0.3)
  });

  curY -= 15;

  const colOrderX = 45;
  const colTitleX = 75;
  const colFileX = 265;
  const colPagesX = 425;
  const colExpiryX = 475;

  page.drawRectangle({
    x: 45,
    y: curY - 16,
    width: width - 90,
    height: 20,
    color: PDFLib.rgb(0.15, 0.22, 0.35)
  });

  const drawHeader = (text, x) => {
    page.drawText(text, {
      x,
      y: curY - 11,
      size: 8,
      font: fontTitle,
      color: PDFLib.rgb(1, 1, 1)
    });
  };

  drawHeader("#", colOrderX + 5);
  drawHeader("Document Requirement", colTitleX);
  drawHeader("Attached File", colFileX);
  drawHeader("Pages", colPagesX);
  drawHeader("Validity / Expiry", colExpiryX);

  curY -= 22;

  const sortedReqs = [...state.tender.requirements].sort((a, b) => (a.order || 0) - (b.order || 0));

  let rowIndex = 0;
  for (const req of sortedReqs) {
    const fileId = state.mappings[req.id];
    if (!fileId) continue;

    const fileItem = state.files.find(f => f.id === fileId);
    if (!fileItem) continue;

    const rowBg = rowIndex % 2 === 0 ? PDFLib.rgb(0.98, 0.99, 1.0) : PDFLib.rgb(0.93, 0.95, 0.98);
    const rowHeight = 22;

    page.drawRectangle({
      x: 45,
      y: curY - rowHeight + 4,
      width: width - 90,
      height: rowHeight,
      color: rowBg,
      borderColor: PDFLib.rgb(0.88, 0.9, 0.94),
      borderWidth: 0.5
    });

    const docTitle = (req.title_en || req.title_bn || 'Document').substring(0, 36);
    const fileName = fileItem.name.substring(0, 26);
    const pagesStr = `${fileItem.pageCount} p`;
    const expiryStr = req.has_expiry ? (state.expiryDates[req.id] || 'N/A') : 'N/A (No Expiry)';

    page.drawText(String(req.order || rowIndex + 1), {
      x: colOrderX + 8,
      y: curY - 8,
      size: 8.5,
      font: fontTitle,
      color: PDFLib.rgb(0.2, 0.25, 0.35)
    });

    page.drawText(docTitle, {
      x: colTitleX,
      y: curY - 8,
      size: 8,
      font: fontTitle,
      color: PDFLib.rgb(0.1, 0.15, 0.25)
    });

    page.drawText(fileName, {
      x: colFileX,
      y: curY - 8,
      size: 7.5,
      font: fontRegular,
      color: PDFLib.rgb(0.2, 0.25, 0.35)
    });

    page.drawText(pagesStr, {
      x: colPagesX,
      y: curY - 8,
      size: 8,
      font: fontRegular,
      color: PDFLib.rgb(0.2, 0.25, 0.35)
    });

    page.drawText(expiryStr, {
      x: colExpiryX,
      y: curY - 8,
      size: 7.5,
      font: fontRegular,
      color: PDFLib.rgb(0.05, 0.45, 0.2)
    });

    curY -= rowHeight;
    rowIndex++;
  }

  curY -= 25;
  page.drawText("CERTIFICATE OF COMPLIANCE & VERIFICATION", {
    x: 45,
    y: curY,
    size: 9.5,
    font: fontTitle,
    color: PDFLib.rgb(0.15, 0.2, 0.3)
  });

  curY -= 14;
  const sealText = "All documents compiled within this dossier have been verified against the required tender checklist, checked for expiry validity against the submission deadline, and verified free of duplicate submissions.";
  page.drawText(sealText, {
    x: 45,
    y: curY,
    size: 7.5,
    font: fontOblique,
    color: PDFLib.rgb(0.35, 0.4, 0.45),
    maxWidth: width - 90,
    lineHeight: 11
  });
}

function resetCompileSteps() {
  for (let i = 1; i <= 5; i++) {
    const el = document.getElementById(`cstep-${i}`);
    if (el) {
      const ind = el.querySelector('.step-num-badge');
      if (ind) {
        ind.className = 'step-num-badge';
        ind.textContent = i;
      }
    }
  }
}

function setCompileStep(num, isActive, isDone) {
  const el = document.getElementById(`cstep-${num}`);
  if (!el) return;
  const ind = el.querySelector('.step-num-badge');
  if (ind) {
    if (isDone) {
      ind.className = 'step-num-badge done';
      ind.textContent = '✓';
    } else if (isActive) {
      ind.className = 'step-num-badge active';
      ind.textContent = num;
    }
  }
}

function downloadCompiledPackage() {
  if (!state.compiledBlob) return;
  const url = URL.createObjectURL(state.compiledBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = state.compiledFileName || 'Tender_Package.pdf';
  a.click();
  URL.revokeObjectURL(url);
}

function previewCompiledPackage() {
  if (!state.compiledBlob) return;
  previewBuffer(state.compiledBlob, state.compiledFileName);
}

// ==========================================
// 14. PDF Preview Modal (Using PDF.js Canvas)
// ==========================================
async function previewFile(fileId) {
  const file = state.files.find(f => f.id === fileId);
  if (!file) return;
  previewBuffer(file.buffer, file.name);
}

async function previewBuffer(dataOrBlob, title) {
  const modal = document.getElementById('modal-pdf-preview');
  const previewTitle = document.getElementById('pdf-preview-title');
  const loading = document.getElementById('pdf-preview-loading');
  const canvas = document.getElementById('pdf-preview-canvas');
  const meta = document.getElementById('pdf-preview-meta');

  previewTitle.textContent = title;
  meta.textContent = '';
  modal.classList.add('active');
  loading.style.display = 'block';
  canvas.style.display = 'none';

  try {
    let arrayBuffer;
    if (dataOrBlob instanceof Blob) {
      arrayBuffer = await dataOrBlob.arrayBuffer();
    } else {
      arrayBuffer = dataOrBlob;
    }

    if (!window.pdfjsLib) {
      throw new Error("PDF.js library is not available.");
    }

    const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) });
    const pdfDoc = await loadingTask.promise;
    const page = await pdfDoc.getPage(1);

    const viewport = page.getViewport({ scale: 1.35 });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const ctx = canvas.getContext('2d');
    await page.render({ canvasContext: ctx, viewport }).promise;

    loading.style.display = 'none';
    canvas.style.display = 'block';
    meta.textContent = `Showing Page 1 of ${pdfDoc.numPages} • Document rendered locally`;
  } catch (err) {
    loading.textContent = `Preview error: ${err.message}`;
    loading.style.display = 'block';
  }
}

function closePdfPreviewModal() {
  document.getElementById('modal-pdf-preview').classList.remove('active');
}

// ==========================================
// 15. Demo Test File Generator
// ==========================================
async function generateSampleTestFiles() {
  showToast("Generating sample tender PDFs in memory...", "info");

  try {
    const demoFilesData = [
      {
        name: "Trade_License_2026.pdf",
        title: "City Corporation Trade License",
        id: "TL-88219-BD",
        pages: 2,
        expiry: "2026-12-31"
      },
      {
        name: "Tax_Return_Acknowledgment.pdf",
        title: "NBR Tax Return Acknowledgment Slip",
        id: "TIN-9932-881",
        pages: 1,
        expiry: null
      },
      {
        name: "Central_VAT_BIN_Certificate.pdf",
        title: "13-digit BIN Certificate (VAT)",
        id: "BIN-001928374-0101",
        pages: 1,
        expiry: null
      },
      {
        name: "Bank_Solvency_Certificate.pdf",
        title: "Official Bank Solvency Certificate",
        id: "BSC-PUB-2026",
        pages: 1,
        expiry: "2026-11-20"
      },
      {
        name: "Satisfactory_Completion_Certificate.pdf",
        title: "End-User Project Completion Certificate",
        id: "EXP-DPW-902",
        pages: 3,
        expiry: null
      }
    ];

    for (const item of demoFilesData) {
      const pdfDoc = await PDFLib.PDFDocument.create();
      const fontBold = await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
      const font = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);

      for (let p = 1; p <= item.pages; p++) {
        const page = pdfDoc.addPage([595.28, 841.89]);
        const { width, height } = page.getSize();

        page.drawRectangle({
          x: 35,
          y: 35,
          width: width - 70,
          height: height - 70,
          borderColor: PDFLib.rgb(0.2, 0.4, 0.7),
          borderWidth: 1.5,
          color: PDFLib.rgb(0.99, 0.99, 1.0)
        });

        page.drawText(item.title.toUpperCase(), {
          x: 55,
          y: height - 80,
          size: 16,
          font: fontBold,
          color: PDFLib.rgb(0.1, 0.2, 0.5)
        });

        page.drawText(`Document Ref / Certificate No: ${item.id}`, {
          x: 55,
          y: height - 105,
          size: 10,
          font: font,
          color: PDFLib.rgb(0.3, 0.35, 0.4)
        });

        page.drawText(`Sheet Page ${p} of ${item.pages}`, {
          x: 55,
          y: height - 130,
          size: 9,
          font: font,
          color: PDFLib.rgb(0.5, 0.55, 0.6)
        });

        page.drawRectangle({
          x: 55,
          y: height - 260,
          width: width - 110,
          height: 100,
          color: PDFLib.rgb(0.95, 0.97, 0.99),
          borderColor: PDFLib.rgb(0.85, 0.88, 0.92),
          borderWidth: 1
        });

        page.drawText("OFFICIAL PROCUREMENT VERIFICATION COPY", {
          x: 75,
          y: height - 195,
          size: 11,
          font: fontBold,
          color: PDFLib.rgb(0.15, 0.3, 0.6)
        });

        page.drawText(`Issued in favor of Apex Global Solutions Ltd. for Tender Submission.\nVerified valid and original by issuing statutory authority.`, {
          x: 75,
          y: height - 225,
          size: 8.5,
          font: font,
          color: PDFLib.rgb(0.2, 0.25, 0.3),
          lineHeight: 13
        });
      }

      const pdfBytes = await pdfDoc.save();
      const mockFile = new File([pdfBytes], item.name, { type: 'application/pdf' });
      await handleFileInputChange([mockFile]);
    }

    smartAutoMatch(false);

    if (state.tender && state.tender.requirements) {
      state.tender.requirements.forEach(req => {
        if (req.id === 'req-1') state.expiryDates['req-1'] = '2026-12-31';
        if (req.id === 'req-4') state.expiryDates['req-4'] = '2026-11-20';
        if (req.id === 'req-6') state.expiryDates['req-6'] = '2026-10-30';
      });
    }

    renderRequirementsList();
    updateComplianceStatus();
    showToast(t('msg_demo_files_generated'), 'success');

  } catch (err) {
    showToast(`Error creating demo files: ${err.message}`, 'error');
  }
}

// ==========================================
// 16. Helper Utilities
// ==========================================
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
