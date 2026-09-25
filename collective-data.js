// The Weber County Hive — Letters & Essays to the Collective
// index.html reads this file and builds the page automatically.
// To add a piece: copy the example in the comment below, fill it in,
// and add it to the PIECES list. The "link" must exactly match the
// filename of the piece's page in this repo.
//
// type:        "letter" (up to 400 words) or "essay" (up to 1,500 words)
// published:   date it first went up, e.g. "Oct 2, 2026"
// updated:     date of the latest change (same as published if never changed)
// checked:     how many factual statements were checked against public records
// corrected:   how many factual statements were corrected to match the record
// removed:     how many factual statements were cut or sent back because no record was found
// from:        "reader" or "publisher" (the publisher's own essays get the "From the publisher" badge)
// minutes:     reading time in minutes
// firstRan:    date it first ran elsewhere (e.g. on Substack), or ""
// related:     optional links to Hive case files the piece discusses
//
// Example (not live — this is only a pattern to copy):
// {
//   id: "L-2026-001",
//   type: "letter",
//   title: "Title the writer chose",
//   writer: "First Last",
//   city: "Ogden",
//   topic: "Land use",
//   summary: "One or two sentences on what the piece argues.",
//   published: "Oct 2, 2026",
//   updated: "Oct 2, 2026",
//   checked: 3,
//   removed: 0,
//   related: [{ title: "HD-27 case file", link: "https://weber-county-hive.github.io/candidates2026/hd27-loubet-oates.html" }],
//   link: "L-2026-001.html"
// },

const SITE = {
  name: "Letters & Essays to the Collective",
  pagePublished: "Sep 25, 2026",
  pageUpdated: "Oct 2, 2026",
  // How readers send a piece. Change this one line if the address changes.
  submitHow: "Reply to any Weber County Hive or Utah Hive Politics newsletter email with your letter or essay in the body (no attachments), and put “Letter to the Collective” or “Essay to the Collective” in the subject line."
};

const PIECES = [
  {
    "id": "E-2026-004",
    "type": "essay",
    "from": "publisher",
    "title": "Red Rover",
    "writer": "Shauna Miller",
    "city": "",
    "topic": "Choosing sides",
    "summary": "Two lines of kids, arms locked so tight your fingers went white. What the COVID years cost, and why neither team deserves our locked arms.",
    "published": "Oct 2, 2026",
    "updated": "Oct 2, 2026",
    "firstRan": "Oct 2, 2026",
    "minutes": 10,
    "checked": 8,
    "corrected": 4,
    "removed": 0,
    "related": [],
    "link": "E-2026-004.html"
  },
  {
    "id": "E-2026-003",
    "type": "essay",
    "from": "publisher",
    "title": "Both Sides Are Playing Us",
    "writer": "Shauna Miller",
    "city": "",
    "topic": "Choosing sides",
    "summary": "Each party’s stated first principle gets suspended exactly where holding to it would cost them power. The same scrutiny, applied to both.",
    "published": "Sep 25, 2026",
    "updated": "Sep 25, 2026",
    "firstRan": "Aug 15, 2026",
    "minutes": 14,
    "checked": 18,
    "corrected": 6,
    "removed": 0,
    "related": [],
    "link": "E-2026-003.html"
  },
  {
    "id": "E-2026-002",
    "type": "essay",
    "from": "publisher",
    "title": "Does Your Tribe or Integrity Come First?",
    "writer": "Shauna Miller",
    "city": "",
    "topic": "Choosing sides",
    "summary": "In a world of Gadiantons, doing the right thing means dropping the tribe.",
    "published": "Sep 25, 2026",
    "updated": "Sep 25, 2026",
    "firstRan": "Aug 29, 2026",
    "minutes": 2,
    "checked": 3,
    "corrected": 1,
    "removed": 0,
    "related": [],
    "link": "E-2026-002.html"
  },
  {
    "id": "E-2026-001",
    "type": "essay",
    "from": "publisher",
    "title": "Where Were You — And What Were We Actually Founded On",
    "writer": "Shauna Miller",
    "city": "",
    "topic": "Power and restraint",
    "summary": "A memory of September 11, 2001, and what the founders were actually fighting: a trade and tax system the people paying into it had no say in.",
    "published": "Sep 25, 2026",
    "updated": "Sep 25, 2026",
    "firstRan": "Sep 11, 2026",
    "minutes": 6,
    "checked": 13,
    "corrected": 3,
    "removed": 1,
    "related": [],
    "link": "E-2026-001.html"
  }
];
