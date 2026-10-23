// All copy lives here. Greek is the default language, English mirrors the same shape.
// Review product claims (myDATA, SMS reminders, EU hosting, backups) against the real product before publishing.

const el = {
  htmlLang: 'el',
  langSwitch: 'EN',
  themeLabel: 'Εναλλαγή φωτεινού/σκούρου θέματος',
  menuLabel: 'Μενού',
  meta: {
    title: 'VetDesk – Λογισμικό διαχείρισης κτηνιατρικής κλινικής',
    description:
      'Ραντεβού, ιστορικό ασθενών, υπενθυμίσεις και τιμολόγηση σε ένα σύστημα φτιαγμένο για κτηνιάτρους στην Ελλάδα.',
    notFound: 'Η σελίδα δεν βρέθηκε – VetDesk',
  },
  nav: {
    features: 'Λειτουργίες',
    how: 'Πώς ξεκινάτε',
    greece: 'Για την Ελλάδα',
    pricing: 'Τιμολόγηση',
    faq: 'Ερωτήσεις',
    contact: 'Επικοινωνία',
  },
  cta: { demo: 'Ζητήστε παρουσίαση', watch: 'Δείτε το βίντεο', send: 'Αποστολή' },
  hero: {
    eyebrow: 'Για κτηνιατρικές κλινικές στην Ελλάδα',
    title: 'Η κλινική σας, οργανωμένη. Χωρίς χαρτιά, χωρίς άγχος.',
    subtitle:
      'Ραντεβού, ιστορικό ασθενών, υπενθυμίσεις εμβολίων και τιμολόγηση σε ένα απλό σύστημα, φτιαγμένο για την καθημερινότητα του κτηνιάτρου.',
    note: 'Δωρεάν παρουσίαση, χωρίς δέσμευση.',
    close: 'Κλείσιμο',
  },
  carousel: {
    label: 'Παρουσίαση εφαρμογής',
    prev: 'Προηγούμενο',
    next: 'Επόμενο',
    pause: 'Παύση',
    play: 'Αναπαραγωγή',
    slideOf: 'από',
    slides: ['Πίνακας ελέγχου', 'Ημερολόγιο ραντεβού', 'Ιστορικό ασθενούς', 'Υπενθυμίσεις', 'Χρεώσεις'],
  },
  marquee: {
    label: 'Λειτουργίες VetDesk',
    items: ['Ραντεβού', 'Ιστορικό ασθενών', 'Υπενθυμίσεις εμβολίων', 'Εργαστηριακά', 'Αρχεία', 'SMS ειδοποιήσεις', 'Χρεώσεις', 'Ασφαλής αποθήκευση'],
  },
  features: {
    title: 'Όλα όσα χρειάζεται η κλινική σας',
    subtitle: 'Λιγότερος χρόνος στη διαχείριση, περισσότερος για τα ζώα.',
    items: [
      {
        id: 'appointments',
        title: 'Ραντεβού χωρίς κενά',
        text: 'Ημερολόγιο ανά κτηνίατρο και χώρο, γρήγορη κράτηση και καθαρή εικόνα του φόρτου της ημέρας.',
        bullets: [
          'Έλεγχος και επίλυση διπλών καταχωρίσεων και συγκρούσεων ραντεβού.',
          'Ειδοποιήσεις SMS 7/3/1 μέρες πριν την επίσκεψη προς τους κηδεμόνες· υπενθυμίσεις εμβολίων και αντιπαρασιτικών αγωγών σε επιλεγμένα διαστήματα, ώστε να μην παραβλέπονται επαναλαμβανόμενες και προληπτικές θεραπείες.',
          'Ταυτόχρονη εσωτερική ειδοποίηση της ιατρικής ομάδας για εκκρεμότητες: αποτελέσματα εξωτερικών εργαστηρίων, παραλαβές φαρμάκων και προϊόντων από προμηθευτές.',
        ],
      },
      {
        id: 'records',
        title: 'Πλήρες ιστορικό ασθενούς & Διαφορική Διάγνωση',
        text: 'Πλήρης φάκελος με όλο το ιστορικό εξετάσεων, εμβολιασμών, παρατηρήσεων και νοσηλειών, με ανάλυση όλων των δεδομένων ανά επίσκεψη ή συνολικά για έκδοση διαφορικής διάγνωσης.',
        bullets: [
          'Δημιουργία πλήρους ιστορικού για κάθε επίσκεψη / νοσηλεία.',
          'Παρακολούθηση χρεώσεων κατά τη νοσηλεία στο κτηνιατρείο.',
          'Διαφορικές διαγνώσεις βάσει του ιστορικού, είτε ανά επίσκεψη είτε συνολικά, με αυτόματη συμπερίληψη όλων των αρχείων εξετάσεων του ζώου με τη χρήση ΑΙ.',
          'Ακτινογραφίες, υπέρηχοι, εκτυπώσεις εξετάσεων και έγγραφα (DICOM, JPG, PDF) συνδεδεμένα απευθείας με την αντίστοιχη επίσκεψη.',
          'Ιστορικό μετρήσεων βάρους με γράφημα και ένδειξη αύξησης/μείωσης, ώστε η εξέλιξη του ζώου να είναι ορατή με μια ματιά.',
        ],
      },
      {
        id: 'reminders',
        title: 'Υπενθυμίσεις που δεν ξεχνιούνται',
        text: 'Υπενθυμίσεις εμβολίων και επανεξετάσεων προς τον ιδιοκτήτη, ώστε να γεμίζει το πρόγραμμα χωρίς τηλέφωνα.',
        bullets: [
          'Αυτόματη αποστολή SMS / email σε προεπιλεγμένα διαστήματα για νέα ραντεβού, υπενθυμίσεις αγωγών, αντιπαρασιτικών και εμβολίων.',
          'Εσωτερικές ειδοποιήσεις του συστήματος προς τους κτηνιάτρους και το προσωπικό του κτηνιατρείου.',
        ],
      },
      {
        id: 'lab-scanning',
        title: 'Αυτόματη ανάγνωση εξετάσεων',
        text: 'Εισαγωγή αποτελεσμάτων εξετάσεων με κάμερα ή drag & drop, χωρίς χειροκίνητη καταχώρηση τιμών.',
        bullets: [
          'Αυτόματη ανάγνωση και εισαγωγή αποτελεσμάτων εξετάσεων μέσω του κινητού του κτηνίατρου ή drag & drop από εκτυπώσεις — όλες οι παράμετροι και οι τιμές τους καταχωρούνται σωστά.',
          'Αυτόματη αναγνώριση διαγνωστικών κιτ με αναφορά του βαθμού εγκυρότητας.',
        ],
      },
      {
        id: 'warehouse',
        title: 'Αποθήκη & Διαχείριση Αναλωσίμων',
        text: 'Παρακολούθηση αποθέματος φαρμάκων και ειδών σε πραγματικό χρόνο, με αυτόματες παραγγελίες και άμεση σύνδεση με τιμολόγηση.',
        bullets: [
          'Πλήρης διαχείριση αποθήκης για είδη και φάρμακα — αυτόματη παρακολούθηση ποσότητας και αυτόματα email παραγγελιών προς τον προμηθευτή.',
          'Πώληση φαρμάκων και ειδών με άμεση αφαίρεση από το στοκ.',
          'Κατανάλωση φαρμάκων και αναλώσιμων για ζώα σε νοσηλεία με ταυτόχρονη αφαίρεση από το απόθεμα και τιμολόγηση στα έξοδα νοσηλείας.',
        ],
      },
      {
        id: 'invoicing',
        title: 'Τιμολόγηση χωρίς δεύτερη σκέψη',
        text: 'Έκδοση παραστατικών προσαρμοσμένων στην ελληνική αγορά, με ιστορικό χρεώσεων ανά πελάτη.',
        bullets: [
          'Τιμολόγηση μέσω πιστοποιημένου παρόχου.',
          'Άμεση αποστολή παραστατικών στην ΑΑΔΕ — υποστήριξη B2C, B2B, B2G και παραστατικών αντιλογιστικής.',
          'Αναφορές εσόδων/εξόδων ανά μήνα και έτος.',
        ],
      },
    ],
  },
  steps: {
    title: 'Ξεκινήστε σε τρία βήματα',
    subtitle: 'Η αλλαγή συστήματος δεν χρειάζεται να είναι πονοκέφαλος.',
    items: [
      { title: 'Εγγραφή', text: 'Δημιουργούμε το περιβάλλον της κλινικής σας.' },
      { title: 'Μεταφορά δεδομένων', text: 'Εισάγουμε πελάτες και ασθενείς από το υπάρχον αρχείο σας.' },
      { title: 'Έναρξη', text: 'Εκπαιδεύουμε την ομάδα σας και ξεκινάτε από την επόμενη μέρα.' },
    ],
  },
  greece: {
    title: 'Φτιαγμένο για την ελληνική αγορά',
    subtitle: 'Όχι ένα ξένο εργαλείο με μετάφραση.',
    items: [
      { title: 'Ελληνικό περιβάλλον', text: 'Πλήρως στα ελληνικά, με όρους που χρησιμοποιείτε στην κλινική.' },
      { title: 'Φορολογικές απαιτήσεις', text: 'Σχεδιασμένο με γνώμονα την ΑΑΔΕ και το myDATA.' },
      { title: 'GDPR και ασφάλεια', text: 'Τα δεδομένα κάθε κλινικής παραμένουν διαχωρισμένα και προστατευμένα.' },
      { title: 'Φιλοξενία στην ΕΕ', text: 'Τα δεδομένα σας μένουν εντός Ευρωπαϊκής Ένωσης.' },
      { title: 'Υποστήριξη στα ελληνικά', text: 'Μιλάτε απευθείας με τον άνθρωπο που φτιάχνει το προϊόν.' },
    ],
  },
  pricing: {
    title: 'Τιμολόγηση',
    subtitle: 'Προσαρμοσμένη στο μέγεθος της κλινικής σας.',
    cardTitle: 'Ανά κλινική',
    cardText: 'Επικοινωνήστε για προσφορά. Χωρίς κρυφές χρεώσεις.',
    bullets: ['Δωρεάν παρουσίαση', 'Βοήθεια με τη μεταφορά δεδομένων', 'Υποστήριξη στα ελληνικά'],
  },
  faq: {
    title: 'Συχνές ερωτήσεις',
    items: [
      {
        q: 'Πώς μεταφέρονται τα υπάρχοντα δεδομένα μου;',
        a: 'Εισάγουμε πελάτες και ασθενείς από αρχεία Excel ή CSV. Θα το δούμε μαζί στην παρουσίαση.',
      },
      {
        q: 'Είναι ασφαλή τα δεδομένα μου;',
        a: 'Τα δεδομένα κάθε κλινικής είναι διαχωρισμένα από των υπολοίπων και δημιουργούνται τακτικά αντίγραφα ασφαλείας.',
      },
      { q: 'Χρειάζεται εγκατάσταση;', a: 'Όχι. Λειτουργεί από τον browser, σε υπολογιστή ή tablet.' },
      { q: 'Υπάρχει εκπαίδευση;', a: 'Ναι. Ξεκινάμε με σύντομη εκπαίδευση της ομάδας σας.' },
      {
        q: 'Θα υπάρχει εφαρμογή για κινητό;',
        a: 'Σχεδιάζουμε εφαρμογή για iOS και Android. Επικοινωνήστε μαζί μας για ενημέρωση.',
      },
    ],
  },
  contact: {
    title: 'Ζητήστε παρουσίαση',
    subtitle: 'Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας.',
    name: 'Ονοματεπώνυμο',
    clinic: 'Κλινική',
    email: 'Email',
    phone: 'Τηλέφωνο',
    message: 'Μήνυμα',
    alt: 'Ή επικοινωνήστε απευθείας',
    mailSubject: 'Αίτημα παρουσίασης VetDesk',
  },
  footer: {
    tagline: 'Λογισμικό διαχείρισης για κτηνιατρικές κλινικές.',
    follow: 'Ακολουθήστε μας',
    rights: 'Όλα τα δικαιώματα διατηρούνται.',
  },
  notFound: { title: 'Η σελίδα δεν βρέθηκε', text: 'Ο σύνδεσμος που ακολουθήσατε δεν υπάρχει.', back: 'Αρχική σελίδα' },
};

const en: typeof el = {
  htmlLang: 'en',
  langSwitch: 'EL',
  themeLabel: 'Toggle light/dark theme',
  menuLabel: 'Menu',
  meta: {
    title: 'VetDesk – Veterinary clinic management software',
    description:
      'Appointments, patient records, reminders and invoicing in one system built for veterinarians in Greece.',
    notFound: 'Page not found – VetDesk',
  },
  nav: {
    features: 'Features',
    how: 'Getting started',
    greece: 'For Greece',
    pricing: 'Pricing',
    faq: 'FAQ',
    contact: 'Contact',
  },
  cta: { demo: 'Request a demo', watch: 'Watch the video', send: 'Send' },
  hero: {
    eyebrow: 'For veterinary clinics in Greece',
    title: 'Your clinic, organized. No paperwork, no stress.',
    subtitle:
      'Appointments, patient records, vaccine reminders and invoicing in one simple system, built for the daily life of a vet.',
    note: 'Free demo, no commitment.',
    close: 'Close',
  },
  carousel: {
    label: 'App showcase',
    prev: 'Previous',
    next: 'Next',
    pause: 'Pause',
    play: 'Play',
    slideOf: 'of',
    slides: ['Dashboard', 'Appointment calendar', 'Patient record', 'Reminders', 'Billing'],
  },
  marquee: {
    label: 'VetDesk features',
    items: ['Appointments', 'Patient records', 'Vaccine reminders', 'Lab results', 'Files', 'SMS notifications', 'Invoicing', 'Secure storage'],
  },
  features: {
    title: 'Everything your clinic needs',
    subtitle: 'Less time on admin, more time for the animals.',
    items: [
      {
        id: 'appointments',
        title: 'Appointments without gaps',
        text: "A calendar per vet and room, quick booking and a clear view of the day's load.",
        bullets: [
          'Detection and resolution of double bookings and scheduling conflicts.',
          'SMS reminders at 7/3/1 days before each visit; vaccine and antiparasitic treatment reminders at configured intervals so recurring and preventive care is never missed.',
          'Internal team notifications for pending items: external lab results, incoming medication and product deliveries from suppliers.',
        ],
      },
      {
        id: 'records',
        title: 'Complete patient records & Differential Diagnosis',
        text: 'Complete file with the full history of tests, vaccinations, observations and hospitalisations, with analysis of all data per visit or across the full history for differential diagnosis.',
        bullets: [
          'Full clinical history for every visit and hospitalisation.',
          'Charge tracking during in-clinic stays.',
          "AI-assisted differential diagnoses based on the patient's history — per visit or across all visits — with automatic inclusion of all the animal's lab and imaging files.",
          'X-rays, ultrasounds, lab printouts and documents (DICOM, JPG, PDF) linked directly to the corresponding visit.',
          "Weight measurement history with a trend chart and increase/decrease indicator, so the animal's progress is visible at a glance.",
        ],
      },
      {
        id: 'reminders',
        title: 'Reminders that get sent',
        text: 'Vaccine and follow-up reminders go out to owners, so the schedule fills itself without phone calls.',
        bullets: [
          'Automatic SMS / email at preset intervals for new appointments, treatment reminders, antiparasitic treatments and vaccinations.',
          'Internal system notifications to vets and clinic staff.',
        ],
      },
      {
        id: 'lab-scanning',
        title: 'Lab results without manual entry',
        text: "Import exam results from the vet's mobile camera or drag & drop — no manual transcription of values.",
        bullets: [
          "Automatic reading and import of lab results via the vet's mobile or by drag & drop from printouts — all parameters and values entered correctly.",
          'Automatic recognition of diagnostic kits with a validity score report.',
        ],
      },
      {
        id: 'warehouse',
        title: 'Inventory & Consumables Management',
        text: 'Real-time tracking of medication and product stock, with automatic reorders and direct connection to billing.',
        bullets: [
          'Full inventory management for products and medications — automatic stock-level monitoring and automatic order emails to the supplier.',
          'Sale of medications and products with immediate deduction from stock.',
          'Consumption of medications and consumables for hospitalised animals with simultaneous stock deduction and billing to hospitalisation costs.',
        ],
      },
      {
        id: 'invoicing',
        title: 'Invoicing without second thoughts',
        text: 'Documents adapted to the Greek market, with billing history per client.',
        bullets: [
          'Invoicing through a certified provider.',
          'Instant submission of documents to AADE (Greek tax authority) — B2C, B2B, B2G and credit note documents supported.',
          'Income/expense reports per month and year.',
        ],
      },
    ],
  },
  steps: {
    title: 'Get started in three steps',
    subtitle: 'Switching systems does not have to be a headache.',
    items: [
      { title: 'Sign up', text: "We set up your clinic's environment." },
      { title: 'Move your data', text: 'We import clients and patients from your current records.' },
      { title: 'Go live', text: 'We train your team and you start the next day.' },
    ],
  },
  greece: {
    title: 'Built for the Greek market',
    subtitle: 'Not a foreign tool with a translation on top.',
    items: [
      { title: 'Greek interface', text: 'Fully in Greek, using the terms your clinic uses.' },
      { title: 'Tax requirements', text: 'Designed with AADE and myDATA in mind.' },
      { title: 'GDPR and security', text: "Each clinic's data stays separated and protected." },
      { title: 'EU hosting', text: 'Your data stays inside the European Union.' },
      { title: 'Support in Greek', text: 'You talk directly to the person who builds the product.' },
    ],
  },
  pricing: {
    title: 'Pricing',
    subtitle: 'Tailored to the size of your clinic.',
    cardTitle: 'Per clinic',
    cardText: 'Get in touch for a quote. No hidden fees.',
    bullets: ['Free demo', 'Help with data migration', 'Support in Greek'],
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        q: 'How is my existing data migrated?',
        a: 'We import clients and patients from Excel or CSV files. We will go through it together in the demo.',
      },
      {
        q: 'Is my data safe?',
        a: "Each clinic's data is kept separate from all others and backups are created regularly.",
      },
      { q: 'Do I need to install anything?', a: 'No. It runs in the browser, on a computer or tablet.' },
      { q: 'Is training included?', a: 'Yes. We start with a short training session for your team.' },
      {
        q: 'Will there be a mobile app?',
        a: 'We are planning an app for iOS and Android. Get in touch to be kept informed.',
      },
    ],
  },
  contact: {
    title: 'Request a demo',
    subtitle: 'Fill in the form and we will get back to you.',
    name: 'Full name',
    clinic: 'Clinic',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    alt: 'Or reach us directly',
    mailSubject: 'VetDesk demo request',
  },
  footer: {
    tagline: 'Management software for veterinary clinics.',
    follow: 'Follow us',
    rights: 'All rights reserved.',
  },
  notFound: { title: 'Page not found', text: 'The link you followed does not exist.', back: 'Home' },
};

export const ui = { el, en };
export type Lang = keyof typeof ui;
export const homePath = (lang: Lang) => (lang === 'el' ? '/' : '/en/');
