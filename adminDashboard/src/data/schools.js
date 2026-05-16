// Comprehensive School Data with Teachers, Students, and Principal Contact
export const schoolsData = [
  {
    id: 1,
    name: 'Central High School',
    principal: {
      name: 'Dr. James Mitchell',
      email: 'j.mitchell@centralhigh.edu',
      phone: '+1 (555) 234-5678',
      office: 'Room 101'
    },
    address: '123 Main Street, Downtown',
    established: 1985,
    totalTeachers: 12,
    totalStudents: 145,
    teachers: [
      { id: 101, name: 'Sarah Johnson', subject: 'Mathematics', email: 'sjohnson@centralhigh.edu', phone: '+1 (555) 345-6789' },
      { id: 102, name: 'Michael Brown', subject: 'English', email: 'mbrown@centralhigh.edu', phone: '+1 (555) 345-6790' },
      { id: 103, name: 'Emily Davis', subject: 'Science', email: 'edavis@centralhigh.edu', phone: '+1 (555) 345-6791' },
      { id: 104, name: 'Robert Wilson', subject: 'History', email: 'rwilson@centralhigh.edu', phone: '+1 (555) 345-6792' },
      { id: 105, name: 'Jessica Lee', subject: 'Physical Education', email: 'jlee@centralhigh.edu', phone: '+1 (555) 345-6793' },
      { id: 106, name: 'David Martinez', subject: 'Computer Science', email: 'dmartinez@centralhigh.edu', phone: '+1 (555) 345-6794' },
      { id: 107, name: 'Amanda Taylor', subject: 'Art', email: 'ataylor@centralhigh.edu', phone: '+1 (555) 345-6795' },
      { id: 108, name: 'Christopher Anderson', subject: 'Music', email: 'canderson@centralhigh.edu', phone: '+1 (555) 345-6796' },
      { id: 109, name: 'Sophia Thomas', subject: 'Spanish', email: 'sthomas@centralhigh.edu', phone: '+1 (555) 345-6797' },
      { id: 110, name: 'Kevin Jackson', subject: 'Chemistry', email: 'kjackson@centralhigh.edu', phone: '+1 (555) 345-6798' },
      { id: 111, name: 'Lauren White', subject: 'Biology', email: 'lwhite@centralhigh.edu', phone: '+1 (555) 345-6799' },
      { id: 112, name: 'Brandon Harris', subject: 'Physics', email: 'bharris@centralhigh.edu', phone: '+1 (555) 345-6800' }
    ],
    students: [
      { id: 1001, name: 'Alice Cooper', grade: 9, email: 'acooper@student.centralhigh.edu' },
      { id: 1002, name: 'Benjamin Clark', grade: 10, email: 'bclark@student.centralhigh.edu' },
      { id: 1003, name: 'Caroline Lewis', grade: 11, email: 'clewis@student.centralhigh.edu' },
      { id: 1004, name: 'Daniel Rodriguez', grade: 12, email: 'drodriguez@student.centralhigh.edu' },
      { id: 1005, name: 'Emily Garcia', grade: 9, email: 'egarcia@student.centralhigh.edu' },
      { id: 1006, name: 'Fiona Martinez', grade: 10, email: 'fmartinez@student.centralhigh.edu' },
      { id: 1007, name: 'George Hernandez', grade: 11, email: 'ghernandez@student.centralhigh.edu' },
      { id: 1008, name: 'Hannah Lopez', grade: 12, email: 'hlopez@student.centralhigh.edu' },
      { id: 1009, name: 'Isaac Gonzalez', grade: 9, email: 'igonzalez@student.centralhigh.edu' },
      { id: 1010, name: 'Julia Wilson', grade: 10, email: 'jwilson@student.centralhigh.edu' },
      { id: 1011, name: 'Kevin Anderson', grade: 11, email: 'kanderson@student.centralhigh.edu' },
      { id: 1012, name: 'Lauren Taylor', grade: 12, email: 'ltaylor@student.centralhigh.edu' },
      { id: 1013, name: 'Mason Thomas', grade: 9, email: 'mthomas@student.centralhigh.edu' },
      { id: 1014, name: 'Natalie Jackson', grade: 10, email: 'njackson@student.centralhigh.edu' },
      { id: 1015, name: 'Oliver White', grade: 11, email: 'owhite@student.centralhigh.edu' }
    ]
  },
  {
    id: 2,
    name: 'Riverside Academy',
    principal: {
      name: 'Ms. Patricia Anderson',
      email: 'p.anderson@riverside.edu',
      phone: '+1 (555) 456-7890',
      office: 'Room 202'
    },
    address: '456 River Road, Waterfront District',
    established: 1992,
    totalTeachers: 8,
    totalStudents: 92,
    teachers: [
      { id: 201, name: 'Jennifer Martinez', subject: 'Mathematics', email: 'jmartinez@riverside.edu', phone: '+1 (555) 456-7891' },
      { id: 202, name: 'Marcus Stevens', subject: 'English', email: 'mstevens@riverside.edu', phone: '+1 (555) 456-7892' },
      { id: 203, name: 'Rachel Green', subject: 'Science', email: 'rgreen@riverside.edu', phone: '+1 (555) 456-7893' },
      { id: 204, name: 'Thomas Moore', subject: 'Social Studies', email: 'tmoore@riverside.edu', phone: '+1 (555) 456-7894' },
      { id: 205, name: 'Nicole Scott', subject: 'Art & Design', email: 'nscott@riverside.edu', phone: '+1 (555) 456-7895' },
      { id: 206, name: 'Daniel King', subject: 'Physical Education', email: 'dking@riverside.edu', phone: '+1 (555) 456-7896' },
      { id: 207, name: 'Stephanie Hall', subject: 'Technology', email: 'shall@riverside.edu', phone: '+1 (555) 456-7897' },
      { id: 208, name: 'Andrew Wright', subject: 'Music', email: 'awright@riverside.edu', phone: '+1 (555) 456-7898' }
    ],
    students: [
      { id: 2001, name: 'Tyler Adams', grade: 6, email: 'tadams@student.riverside.edu' },
      { id: 2002, name: 'Olivia Baker', grade: 7, email: 'obaker@student.riverside.edu' },
      { id: 2003, name: 'Ethan Cox', grade: 8, email: 'ecox@student.riverside.edu' },
      { id: 2004, name: 'Ava Davis', grade: 6, email: 'adavis@student.riverside.edu' },
      { id: 2005, name: 'Jackson Edwards', grade: 7, email: 'jedwards@student.riverside.edu' },
      { id: 2006, name: 'Emma Fox', grade: 8, email: 'efox@student.riverside.edu' },
      { id: 2007, name: 'Liam Green', grade: 6, email: 'lgreen@student.riverside.edu' },
      { id: 2008, name: 'Sophia Harris', grade: 7, email: 'sharris@student.riverside.edu' },
      { id: 2009, name: 'Noah Irving', grade: 8, email: 'nirving@student.riverside.edu' },
      { id: 2010, name: 'Isabella Jones', grade: 6, email: 'ijones@student.riverside.edu' }
    ]
  },
  {
    id: 3,
    name: 'Northside Elementary',
    principal: {
      name: 'Mr. Richard Thompson',
      email: 'r.thompson@northside.edu',
      phone: '+1 (555) 567-8901',
      office: 'Room 150'
    },
    address: '789 North Avenue, North District',
    established: 1978,
    totalTeachers: 15,
    totalStudents: 210,
    teachers: [
      { id: 301, name: 'Catherine Miller', subject: 'Grade 1', email: 'cmiller@northside.edu', phone: '+1 (555) 567-8902' },
      { id: 302, name: 'Gregory Bell', subject: 'Grade 2', email: 'gbell@northside.edu', phone: '+1 (555) 567-8903' },
      { id: 303, name: 'Brenda Cole', subject: 'Grade 3', email: 'bcole@northside.edu', phone: '+1 (555) 567-8904' },
      { id: 304, name: 'Samuel Cross', subject: 'Grade 4', email: 'scross@northside.edu', phone: '+1 (555) 567-8905' },
      { id: 305, name: 'Rebecca Dale', subject: 'Grade 5', email: 'rdale@northside.edu', phone: '+1 (555) 567-8906' },
      { id: 306, name: 'Dennis Evans', subject: 'Mathematics', email: 'devans@northside.edu', phone: '+1 (555) 567-8907' },
      { id: 307, name: 'Margaret Foster', subject: 'Reading', email: 'mfoster@northside.edu', phone: '+1 (555) 567-8908' },
      { id: 308, name: 'Edward Grant', subject: 'Science', email: 'egrant@northside.edu', phone: '+1 (555) 567-8909' },
      { id: 309, name: 'Linda Harper', subject: 'Art', email: 'lharper@northside.edu', phone: '+1 (555) 567-8910' },
      { id: 310, name: 'Paul Hunter', subject: 'Physical Education', email: 'phunter@northside.edu', phone: '+1 (555) 567-8911' },
      { id: 311, name: 'Dorothy Ingram', subject: 'Music', email: 'dingram@northside.edu', phone: '+1 (555) 567-8912' },
      { id: 312, name: 'Charles Jenkins', subject: 'Social Studies', email: 'cjenkins@northside.edu', phone: '+1 (555) 567-8913' },
      { id: 313, name: 'Helen Kelley', subject: 'Special Education', email: 'hkelley@northside.edu', phone: '+1 (555) 567-8914' },
      { id: 314, name: 'George Lambert', subject: 'Librarian', email: 'glambert@northside.edu', phone: '+1 (555) 567-8915' },
      { id: 315, name: 'Joyce Marshall', subject: 'Counselor', email: 'jmarshall@northside.edu', phone: '+1 (555) 567-8916' }
    ],
    students: [
      { id: 3001, name: 'Aiden Nelson', grade: 1, email: 'anelson@student.northside.edu' },
      { id: 3002, name: 'Bailey Owens', grade: 2, email: 'bowens@student.northside.edu' },
      { id: 3003, name: 'Chloe Perry', grade: 3, email: 'cperry@student.northside.edu' },
      { id: 3004, name: 'Dylan Quinn', grade: 4, email: 'dquinn@student.northside.edu' },
      { id: 3005, name: 'Emma Roberts', grade: 5, email: 'eroberts@student.northside.edu' },
      { id: 3006, name: 'Finley Scott', grade: 1, email: 'fscott@student.northside.edu' },
      { id: 3007, name: 'Grace Taylor', grade: 2, email: 'gtaylor@student.northside.edu' },
      { id: 3008, name: 'Henry Underwood', grade: 3, email: 'hunderwood@student.northside.edu' },
      { id: 3009, name: 'Ivy Vaughn', grade: 4, email: 'ivaughn@student.northside.edu' },
      { id: 3010, name: 'Jack Williams', grade: 5, email: 'jwilliams@student.northside.edu' }
    ]
  },
  {
    id: 4,
    name: 'Westbrook Middle School',
    principal: {
      name: 'Dr. Elizabeth Foster',
      email: 'e.foster@westbrook.edu',
      phone: '+1 (555) 678-9012',
      office: 'Room 250'
    },
    address: '321 West Boulevard, West Side',
    established: 1998,
    totalTeachers: 10,
    totalStudents: 128,
    teachers: [
      { id: 401, name: 'Nancy Young', subject: 'Mathematics', email: 'nyoung@westbrook.edu', phone: '+1 (555) 678-9013' },
      { id: 402, name: 'Ronald Zimmer', subject: 'English', email: 'rzimmer@westbrook.edu', phone: '+1 (555) 678-9014' },
      { id: 403, name: 'Sandra Allen', subject: 'Science', email: 'sallen@westbrook.edu', phone: '+1 (555) 678-9015' },
      { id: 404, name: 'Frank Brown', subject: 'History', email: 'fbrown@westbrook.edu', phone: '+1 (555) 678-9016' },
      { id: 405, name: 'Donna Clark', subject: 'Physical Education', email: 'dclark@westbrook.edu', phone: '+1 (555) 678-9017' },
      { id: 406, name: 'Gary Davis', subject: 'Technology', email: 'gdavis@westbrook.edu', phone: '+1 (555) 678-9018' },
      { id: 407, name: 'Carol Edwards', subject: 'Art', email: 'cedwards@westbrook.edu', phone: '+1 (555) 678-9019' },
      { id: 408, name: 'Walter Fields', subject: 'Music', email: 'wfields@westbrook.edu', phone: '+1 (555) 678-9020' },
      { id: 409, name: 'Barbara Garcia', subject: 'Language Arts', email: 'bgarcia@westbrook.edu', phone: '+1 (555) 678-9021' },
      { id: 410, name: 'Stephen Hall', subject: 'Science Lab', email: 'shall@westbrook.edu', phone: '+1 (555) 678-9022' }
    ],
    students: [
      { id: 4001, name: 'Kevin Harris', grade: 6, email: 'kharris@student.westbrook.edu' },
      { id: 4002, name: 'Lauren Ingram', grade: 7, email: 'lingram@student.westbrook.edu' },
      { id: 4003, name: 'Mason Jenkins', grade: 8, email: 'mjenkins@student.westbrook.edu' },
      { id: 4004, name: 'Natalie Kelley', grade: 6, email: 'nkelley@student.westbrook.edu' },
      { id: 4005, name: 'Oscar Lambert', grade: 7, email: 'olambert@student.westbrook.edu' },
      { id: 4006, name: 'Piper Marshall', grade: 8, email: 'pmarshall@student.westbrook.edu' },
      { id: 4007, name: 'Quinn Nelson', grade: 6, email: 'qnelson@student.westbrook.edu' },
      { id: 4008, name: 'Riley Owens', grade: 7, email: 'rowens@student.westbrook.edu' },
      { id: 4009, name: 'Samuel Perry', grade: 8, email: 'sperry@student.westbrook.edu' },
      { id: 4010, name: 'Tessa Quinn', grade: 6, email: 'tquinn@student.westbrook.edu' }
    ]
  }
];
