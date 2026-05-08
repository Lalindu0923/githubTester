const gradeOrder = ['10', '11', '9', '8', '7', '6']

const profileBlueprints = {
  10: [
    {
      name: 'Kamal Perera',
      parentContact: '+94-71-123-4567',
      parentWhatsApp: '+94711234567',
      parentEmail: 'kamal.parent@example.com',
      rating: 5,
      subjects: [
        { name: 'Mathematics', marks: { term1: 88, term2: 82, term3: 90 } },
        { name: 'Science', marks: { term1: 76, term2: 80, term3: 79 } },
        { name: 'English', marks: { term1: 92, term2: 89, term3: 95 } },
        { name: 'History', marks: { term1: 67, term2: 72, term3: 70 } },
        { name: 'Computer', marks: { term1: 81, term2: 85, term3: 88 } }
      ]
    },
    {
      name: 'Saman Silva',
      parentContact: '+94-77-234-5678',
      parentWhatsApp: '+94772345678',
      parentEmail: 'saman.parent@example.com',
      rating: 4,
      subjects: [
        { name: 'Mathematics', marks: { term1: 78, term2: 72, term3: 80 } },
        { name: 'Science', marks: { term1: 86, term2: 79, term3: 88 } },
        { name: 'English', marks: { term1: 82, term2: 85, term3: 84 } },
        { name: 'History', marks: { term1: 71, term2: 68, term3: 73 } },
        { name: 'Computer', marks: { term1: 91, term2: 90, term3: 93 } }
      ]
    },
    {
      name: 'Kasun Fernando',
      parentContact: '+94-76-111-2233',
      parentWhatsApp: '+94761112233',
      parentEmail: 'kasun.parent@example.com',
      rating: 4,
      subjects: [
        { name: 'Mathematics', marks: { term1: 74, term2: 77, term3: 79 } },
        { name: 'Science', marks: { term1: 70, term2: 73, term3: 75 } },
        { name: 'English', marks: { term1: 81, term2: 83, term3: 82 } },
        { name: 'History', marks: { term1: 69, term2: 71, term3: 70 } },
        { name: 'Computer', marks: { term1: 84, term2: 86, term3: 85 } }
      ]
    },
    {
      name: 'Heshan Jayasuriya',
      parentContact: '+94-75-222-3344',
      parentWhatsApp: '+94752223344',
      parentEmail: 'heshan.parent@example.com',
      rating: 3,
      subjects: [
        { name: 'Mathematics', marks: { term1: 68, term2: 70, term3: 72 } },
        { name: 'Science', marks: { term1: 66, term2: 69, term3: 67 } },
        { name: 'English', marks: { term1: 75, term2: 77, term3: 76 } },
        { name: 'History', marks: { term1: 64, term2: 66, term3: 65 } },
        { name: 'Computer', marks: { term1: 78, term2: 79, term3: 80 } }
      ]
    },
    {
      name: 'Mihiri Ranaweera',
      parentContact: '+94-74-333-4455',
      parentWhatsApp: '+94743334455',
      parentEmail: 'mihiri.parent@example.com',
      rating: 5,
      subjects: [
        { name: 'Mathematics', marks: { term1: 90, term2: 92, term3: 91 } },
        { name: 'Science', marks: { term1: 88, term2: 90, term3: 89 } },
        { name: 'English', marks: { term1: 93, term2: 94, term3: 95 } },
        { name: 'History', marks: { term1: 82, term2: 84, term3: 83 } },
        { name: 'Computer', marks: { term1: 96, term2: 95, term3: 97 } }
      ]
    },
    {
      name: 'Nadeesha Wijesinghe',
      parentContact: '+94-73-444-5566',
      parentWhatsApp: '+94734445566',
      parentEmail: 'nadeesha.parent@example.com',
      rating: 4,
      subjects: [
        { name: 'Mathematics', marks: { term1: 80, term2: 81, term3: 83 } },
        { name: 'Science', marks: { term1: 78, term2: 80, term3: 79 } },
        { name: 'English', marks: { term1: 84, term2: 85, term3: 86 } },
        { name: 'History', marks: { term1: 72, term2: 74, term3: 73 } },
        { name: 'Computer', marks: { term1: 87, term2: 88, term3: 89 } }
      ]
    },
    {
      name: 'Dilshan Perera',
      parentContact: '+94-72-555-6677',
      parentWhatsApp: '+94725556677',
      parentEmail: 'dilshan.parent@example.com',
      rating: 3,
      subjects: [
        { name: 'Mathematics', marks: { term1: 71, term2: 73, term3: 72 } },
        { name: 'Science', marks: { term1: 69, term2: 70, term3: 71 } },
        { name: 'English', marks: { term1: 77, term2: 78, term3: 79 } },
        { name: 'History', marks: { term1: 65, term2: 67, term3: 66 } },
        { name: 'Computer', marks: { term1: 80, term2: 81, term3: 82 } }
      ]
    },
    {
      name: 'Tharushi Fonseka',
      parentContact: '+94-71-666-7788',
      parentWhatsApp: '+94716667788',
      parentEmail: 'tharushi.parent@example.com',
      rating: 5,
      subjects: [
        { name: 'Mathematics', marks: { term1: 92, term2: 93, term3: 94 } },
        { name: 'Science', marks: { term1: 89, term2: 91, term3: 90 } },
        { name: 'English', marks: { term1: 95, term2: 96, term3: 94 } },
        { name: 'History', marks: { term1: 83, term2: 85, term3: 84 } },
        { name: 'Computer', marks: { term1: 97, term2: 98, term3: 96 } }
      ]
    },
    {
      name: 'Ruwan Bandara',
      parentContact: '+94-70-777-8899',
      parentWhatsApp: '+94707778899',
      parentEmail: 'ruwan.parent@example.com',
      rating: 2,
      subjects: [
        { name: 'Mathematics', marks: { term1: 63, term2: 64, term3: 66 } },
        { name: 'Science', marks: { term1: 61, term2: 62, term3: 63 } },
        { name: 'English', marks: { term1: 68, term2: 69, term3: 70 } },
        { name: 'History', marks: { term1: 58, term2: 60, term3: 59 } },
        { name: 'Computer', marks: { term1: 72, term2: 73, term3: 74 } }
      ]
    },
    {
      name: 'Lahiru Silva',
      parentContact: '+94-70-888-9900',
      parentWhatsApp: '+94708889900',
      parentEmail: 'lahiru.parent@example.com',
      rating: 3,
      subjects: [
        { name: 'Mathematics', marks: { term1: 72, term2: 74, term3: 75 } },
        { name: 'Science', marks: { term1: 71, term2: 72, term3: 73 } },
        { name: 'English', marks: { term1: 79, term2: 80, term3: 78 } },
        { name: 'History', marks: { term1: 67, term2: 68, term3: 69 } },
        { name: 'Computer', marks: { term1: 83, term2: 84, term3: 85 } }
      ]
    },
    {
      name: 'Yashoda Kumari',
      parentContact: '+94-76-999-0011',
      parentWhatsApp: '+94769990011',
      parentEmail: 'yashoda.parent@example.com',
      rating: 4,
      subjects: [
        { name: 'Mathematics', marks: { term1: 81, term2: 82, term3: 83 } },
        { name: 'Science', marks: { term1: 79, term2: 80, term3: 81 } },
        { name: 'English', marks: { term1: 86, term2: 87, term3: 88 } },
        { name: 'History', marks: { term1: 73, term2: 74, term3: 75 } },
        { name: 'Computer', marks: { term1: 88, term2: 89, term3: 90 } }
      ]
    },
    {
      name: 'Pradeep Nuwan',
      parentContact: '+94-77-101-1122',
      parentWhatsApp: '+94771011122',
      parentEmail: 'pradeep.parent@example.com',
      rating: 4,
      subjects: [
        { name: 'Mathematics', marks: { term1: 79, term2: 78, term3: 80 } },
        { name: 'Science', marks: { term1: 77, term2: 76, term3: 78 } },
        { name: 'English', marks: { term1: 85, term2: 84, term3: 86 } },
        { name: 'History', marks: { term1: 70, term2: 71, term3: 72 } },
        { name: 'Computer', marks: { term1: 86, term2: 87, term3: 88 } }
      ]
    }
  ],
  11: [
    {
      name: 'Nimasha Jayawardena',
      parentContact: '+94-72-345-6789',
      parentWhatsApp: '+94723456789',
      parentEmail: 'nimasha.parent@example.com',
      rating: 5,
      subjects: [
        { name: 'Mathematics', marks: { term1: 84, term2: 88, term3: 86 } },
        { name: 'Science', marks: { term1: 81, term2: 79, term3: 85 } },
        { name: 'English', marks: { term1: 90, term2: 92, term3: 91 } },
        { name: 'History', marks: { term1: 74, term2: 77, term3: 79 } },
        { name: 'Computer', marks: { term1: 93, term2: 95, term3: 94 } }
      ]
    },
    {
      name: 'Tharindu Wickramasinghe',
      parentContact: '+94-70-456-7890',
      parentWhatsApp: '+94704567890',
      parentEmail: 'tharindu.parent@example.com',
      rating: 2,
      subjects: [
        { name: 'Mathematics', marks: { term1: 76, term2: 80, term3: 82 } },
        { name: 'Science', marks: { term1: 88, term2: 86, term3: 89 } },
        { name: 'English', marks: { term1: 79, term2: 83, term3: 81 } },
        { name: 'History', marks: { term1: 70, term2: 73, term3: 75 } },
        { name: 'Computer', marks: { term1: 85, term2: 87, term3: 90 } }
      ]
    },
    {
      name: 'Sethmi Ranasinghe',
      parentContact: '+94-75-567-8901',
      parentWhatsApp: '+94755678901',
      parentEmail: 'sethmi.parent@example.com',
      rating: 1,
      subjects: [
        { name: 'Mathematics', marks: { term1: 91, term2: 89, term3: 93 } },
        { name: 'Science', marks: { term1: 87, term2: 90, term3: 88 } },
        { name: 'English', marks: { term1: 94, term2: 93, term3: 95 } },
        { name: 'History', marks: { term1: 80, term2: 82, term3: 84 } },
        { name: 'Computer', marks: { term1: 96, term2: 94, term3: 97 } }
      ]
    },
    {
      name: 'Ayesh Bandara',
      parentContact: '+94-76-120-2211',
      parentWhatsApp: '+94761202211',
      parentEmail: 'ayesh.parent@example.com',
      rating: 4,
      subjects: [
        { name: 'Mathematics', marks: { term1: 83, term2: 84, term3: 85 } },
        { name: 'Science', marks: { term1: 80, term2: 81, term3: 82 } },
        { name: 'English', marks: { term1: 88, term2: 87, term3: 89 } },
        { name: 'History', marks: { term1: 75, term2: 76, term3: 77 } },
        { name: 'Computer', marks: { term1: 90, term2: 91, term3: 92 } }
      ]
    },
    {
      name: 'Dinuka Weerasinghe',
      parentContact: '+94-77-130-2311',
      parentWhatsApp: '+94771302311',
      parentEmail: 'dinuka.parent@example.com',
      rating: 3,
      subjects: [
        { name: 'Mathematics', marks: { term1: 74, term2: 75, term3: 76 } },
        { name: 'Science', marks: { term1: 72, term2: 73, term3: 74 } },
        { name: 'English', marks: { term1: 79, term2: 80, term3: 81 } },
        { name: 'History', marks: { term1: 68, term2: 69, term3: 70 } },
        { name: 'Computer', marks: { term1: 82, term2: 83, term3: 84 } }
      ]
    },
    {
      name: 'Malsha Ranatunga',
      parentContact: '+94-71-140-2411',
      parentWhatsApp: '+94711402411',
      parentEmail: 'malsha.parent@example.com',
      rating: 5,
      subjects: [
        { name: 'Mathematics', marks: { term1: 92, term2: 91, term3: 93 } },
        { name: 'Science', marks: { term1: 89, term2: 88, term3: 90 } },
        { name: 'English', marks: { term1: 95, term2: 94, term3: 96 } },
        { name: 'History', marks: { term1: 83, term2: 84, term3: 85 } },
        { name: 'Computer', marks: { term1: 97, term2: 98, term3: 97 } }
      ]
    },
    {
      name: 'Chathura Silva',
      parentContact: '+94-70-150-2511',
      parentWhatsApp: '+94701502511',
      parentEmail: 'chathura.parent@example.com',
      rating: 3,
      subjects: [
        { name: 'Mathematics', marks: { term1: 70, term2: 71, term3: 72 } },
        { name: 'Science', marks: { term1: 68, term2: 69, term3: 70 } },
        { name: 'English', marks: { term1: 77, term2: 78, term3: 79 } },
        { name: 'History', marks: { term1: 66, term2: 67, term3: 68 } },
        { name: 'Computer', marks: { term1: 81, term2: 82, term3: 83 } }
      ]
    },
    {
      name: 'Sanduni Peris',
      parentContact: '+94-72-160-2611',
      parentWhatsApp: '+94721602611',
      parentEmail: 'sanduni.parent@example.com',
      rating: 4,
      subjects: [
        { name: 'Mathematics', marks: { term1: 82, term2: 83, term3: 84 } },
        { name: 'Science', marks: { term1: 79, term2: 80, term3: 81 } },
        { name: 'English', marks: { term1: 87, term2: 88, term3: 89 } },
        { name: 'History', marks: { term1: 74, term2: 75, term3: 76 } },
        { name: 'Computer', marks: { term1: 88, term2: 89, term3: 90 } }
      ]
    },
    {
      name: 'Vishaka Herath',
      parentContact: '+94-73-170-2711',
      parentWhatsApp: '+94731702711',
      parentEmail: 'vishaka.parent@example.com',
      rating: 2,
      subjects: [
        { name: 'Mathematics', marks: { term1: 65, term2: 66, term3: 67 } },
        { name: 'Science', marks: { term1: 63, term2: 64, term3: 65 } },
        { name: 'English', marks: { term1: 71, term2: 72, term3: 73 } },
        { name: 'History', marks: { term1: 60, term2: 61, term3: 62 } },
        { name: 'Computer', marks: { term1: 75, term2: 76, term3: 77 } }
      ]
    },
    {
      name: 'Nethmi De Silva',
      parentContact: '+94-74-180-2811',
      parentWhatsApp: '+94741802811',
      parentEmail: 'nethmi.parent@example.com',
      rating: 5,
      subjects: [
        { name: 'Mathematics', marks: { term1: 93, term2: 94, term3: 95 } },
        { name: 'Science', marks: { term1: 90, term2: 91, term3: 92 } },
        { name: 'English', marks: { term1: 96, term2: 95, term3: 97 } },
        { name: 'History', marks: { term1: 84, term2: 85, term3: 86 } },
        { name: 'Computer', marks: { term1: 98, term2: 99, term3: 98 } }
      ]
    },
    {
      name: 'Pasindu Ranasinghe',
      parentContact: '+94-75-190-2911',
      parentWhatsApp: '+94751902911',
      parentEmail: 'pasindu.parent@example.com',
      rating: 3,
      subjects: [
        { name: 'Mathematics', marks: { term1: 73, term2: 74, term3: 75 } },
        { name: 'Science', marks: { term1: 71, term2: 72, term3: 73 } },
        { name: 'English', marks: { term1: 78, term2: 79, term3: 80 } },
        { name: 'History', marks: { term1: 67, term2: 68, term3: 69 } },
        { name: 'Computer', marks: { term1: 82, term2: 83, term3: 84 } }
      ]
    },
    {
      name: 'Kavindi Prasadini',
      parentContact: '+94-76-200-3011',
      parentWhatsApp: '+94762003011',
      parentEmail: 'kavindi.parent@example.com',
      rating: 4,
      subjects: [
        { name: 'Mathematics', marks: { term1: 84, term2: 85, term3: 86 } },
        { name: 'Science', marks: { term1: 81, term2: 82, term3: 83 } },
        { name: 'English', marks: { term1: 89, term2: 90, term3: 91 } },
        { name: 'History', marks: { term1: 76, term2: 77, term3: 78 } },
        { name: 'Computer', marks: { term1: 90, term2: 91, term3: 92 } }
      ]
    },
    {
      name: 'Ishara Wimalasiri',
      parentContact: '+94-77-210-3111',
      parentWhatsApp: '+94772103111',
      parentEmail: 'ishara.parent@example.com',
      rating: 2,
      subjects: [
        { name: 'Mathematics', marks: { term1: 64, term2: 65, term3: 66 } },
        { name: 'Science', marks: { term1: 62, term2: 63, term3: 64 } },
        { name: 'English', marks: { term1: 70, term2: 71, term3: 72 } },
        { name: 'History', marks: { term1: 59, term2: 60, term3: 61 } },
        { name: 'Computer', marks: { term1: 74, term2: 75, term3: 76 } }
      ]
    },
    {
      name: 'Dileeka Mendis',
      parentContact: '+94-70-220-3211',
      parentWhatsApp: '+94702203211',
      parentEmail: 'dileeka.parent@example.com',
      rating: 5,
      subjects: [
        { name: 'Mathematics', marks: { term1: 91, term2: 92, term3: 93 } },
        { name: 'Science', marks: { term1: 88, term2: 89, term3: 90 } },
        { name: 'English', marks: { term1: 94, term2: 95, term3: 96 } },
        { name: 'History', marks: { term1: 82, term2: 83, term3: 84 } },
        { name: 'Computer', marks: { term1: 97, term2: 96, term3: 98 } }
      ]
    },
    {
      name: 'Sachini Thilakaratne',
      parentContact: '+94-71-230-3311',
      parentWhatsApp: '+94712303311',
      parentEmail: 'sachini.parent@example.com',
      rating: 3,
      subjects: [
        { name: 'Mathematics', marks: { term1: 69, term2: 70, term3: 71 } },
        { name: 'Science', marks: { term1: 67, term2: 68, term3: 69 } },
        { name: 'English', marks: { term1: 76, term2: 77, term3: 78 } },
        { name: 'History', marks: { term1: 64, term2: 65, term3: 66 } },
        { name: 'Computer', marks: { term1: 80, term2: 81, term3: 82 } }
      ]
    },
    {
      name: 'Rashmi Seneviratne',
      parentContact: '+94-72-240-3411',
      parentWhatsApp: '+94722403411',
      parentEmail: 'rashmi.parent@example.com',
      rating: 4,
      subjects: [
        { name: 'Mathematics', marks: { term1: 83, term2: 84, term3: 85 } },
        { name: 'Science', marks: { term1: 80, term2: 81, term3: 82 } },
        { name: 'English', marks: { term1: 88, term2: 89, term3: 90 } },
        { name: 'History', marks: { term1: 75, term2: 76, term3: 77 } },
        { name: 'Computer', marks: { term1: 89, term2: 90, term3: 91 } }
      ]
    },
    {
      name: 'Ishani Peiris',
      parentContact: '+94-73-250-3511',
      parentWhatsApp: '+94732503511',
      parentEmail: 'ishani.parent@example.com',
      rating: 1,
      subjects: [
        { name: 'Mathematics', marks: { term1: 60, term2: 61, term3: 62 } },
        { name: 'Science', marks: { term1: 58, term2: 59, term3: 60 } },
        { name: 'English', marks: { term1: 66, term2: 67, term3: 68 } },
        { name: 'History', marks: { term1: 55, term2: 56, term3: 57 } },
        { name: 'Computer', marks: { term1: 70, term2: 71, term3: 72 } }
      ]
    },
    {
      name: 'Kanchana Madushan',
      parentContact: '+94-74-260-3611',
      parentWhatsApp: '+94742603611',
      parentEmail: 'kanchana.parent@example.com',
      rating: 4,
      subjects: [
        { name: 'Mathematics', marks: { term1: 82, term2: 83, term3: 84 } },
        { name: 'Science', marks: { term1: 79, term2: 80, term3: 81 } },
        { name: 'English', marks: { term1: 87, term2: 88, term3: 89 } },
        { name: 'History', marks: { term1: 73, term2: 74, term3: 75 } },
        { name: 'Computer', marks: { term1: 88, term2: 89, term3: 90 } }
      ]
    },
    {
      name: 'Sandamali Nisansala',
      parentContact: '+94-75-270-3711',
      parentWhatsApp: '+94752703711',
      parentEmail: 'sandamali.parent@example.com',
      rating: 3,
      subjects: [
        { name: 'Mathematics', marks: { term1: 71, term2: 72, term3: 73 } },
        { name: 'Science', marks: { term1: 69, term2: 70, term3: 71 } },
        { name: 'English', marks: { term1: 78, term2: 79, term3: 80 } },
        { name: 'History', marks: { term1: 66, term2: 67, term3: 68 } },
        { name: 'Computer', marks: { term1: 81, term2: 82, term3: 83 } }
      ]
    }
  ]
}

const fallbackTemplate = {
  parentContact: '+94-70-000-0000',
  parentWhatsApp: '+94700000000',
  parentEmail: 'parent@example.com',
  rating: 3,
  subjects: [
    { name: 'Mathematics', marks: { term1: 70, term2: 72, term3: 74 } },
    { name: 'Science', marks: { term1: 68, term2: 70, term3: 72 } },
    { name: 'English', marks: { term1: 75, term2: 77, term3: 79 } },
    { name: 'History', marks: { term1: 66, term2: 68, term3: 70 } },
    { name: 'Computer', marks: { term1: 80, term2: 82, term3: 84 } }
  ]
}

const gradeNames = {
  10: [
    'Kamal Perera',
    'Saman Silva',
    'Kasun Fernando',
    'Heshan Jayasuriya',
    'Mihiri Ranaweera',
    'Nadeesha Wijesinghe',
    'Dilshan Perera',
    'Tharushi Fonseka',
    'Ruwan Bandara',
    'Lahiru Silva',
    'Yashoda Kumari',
    'Pradeep Nuwan'
  ],
  11: [
    'Nimasha Jayawardena',
    'Tharindu Wickramasinghe',
    'Sethmi Ranasinghe',
    'Ayesh Bandara',
    'Dinuka Weerasinghe',
    'Malsha Ranatunga',
    'Chathura Silva',
    'Sanduni Peris',
    'Vishaka Herath',
    'Nethmi De Silva',
    'Pasindu Ranasinghe',
    'Kavindi Prasadini',
    'Ishara Wimalasiri',
    'Dileeka Mendis',
    'Sachini Thilakaratne',
    'Rashmi Seneviratne',
    'Ishani Peiris',
    'Kanchana Madushan',
    'Sandamali Nisansala',
    'Prabath Gunasekara',
    'Harshi Perera',
    'Vihanga Karunaratne',
    'Anushka De Silva'
  ],
  9: [
    'Aarav Senanayake',
    'Bhanuka Weeraratne',
    'Chenuka Rathnayake',
    'Dinithi Fernando',
    'Eshani Perera',
    'Fazal Hamid',
    'Gihan Wickramasinghe',
    'Hasini Jayawardena',
    'Ishanth Weerasooriya',
    'Jayantha Silva'
  ],
  8: [
    'Kavisha Mendis',
    'Laksiri Nadeesha',
    'Manesha Ranasinghe',
    'Nisal Peris',
    'Oshada Fernando',
    'Piumi De Silva',
    'Rashen Wickramasinghe',
    'Shenal Jayasuriya',
    'Thamali Perera',
    'Umesh Karunanayake'
  ],
  7: [
    'Vidura Lakmal',
    'Wathsala Kumari',
    'Xavier Silva',
    'Yomal Perera',
    'Zahira Mohamed',
    'Apsara Fernando',
    'Bimal Jayawardena',
    'Chamara Mendis',
    'Dilini Weerasinghe',
    'Erandi Nirosha'
  ],
  6: [
    'Fathima Rasheed',
    'Gayana Perera',
    'Hirantha Silva',
    'Iresha Kumari',
    'Janaka Weeraratne',
    'Kethmi Prasad',
    'Liyara Fernando',
    'Madhava Jayasuriya',
    'Naduni Peris',
    'Oshadi Wijesinghe'
  ]
}

const countsByGrade = {
  10: 12,
  11: 23,
  9: 10,
  8: 10,
  7: 10,
  6: 10
}

const grades = [10, 11, 9, 8, 7, 6]
let nextStudentId = 1

function createStudentProfile({ id, name, grade, rating, offset = 0, blueprint }) {
  const base = blueprint || fallbackTemplate
  const subjects = base.subjects.map((subject) => ({
    name: subject.name,
    marks: {
      term1: subject.marks.term1 + offset,
      term2: subject.marks.term2 + offset,
      term3: subject.marks.term3 + offset
    }
  }))

  return {
    id,
    name,
    grade: String(grade),
    parentContact: base.parentContact,
    parentWhatsApp: base.parentWhatsApp,
    parentEmail: base.parentEmail,
    rating,
    subjects
  }
}

function buildGradeStudents(grade) {
  const names = gradeNames[grade]
  const desiredCount = countsByGrade[grade]
  const students = []
  const blueprints = profileBlueprints[grade] || []

  for (let index = 0; index < desiredCount; index += 1) {
    const blueprint = blueprints[index]
    const name = names[index] || `${grade} Grade Student ${index + 1}`
    const rating = blueprint?.rating ?? (index % 5) + 1
    students.push(
      createStudentProfile({
        id: nextStudentId++,
        name,
        grade,
        rating,
        offset: index % 4,
        blueprint
      })
    )
  }

  return students
}

const studentsDataArray = grades.flatMap((grade) => buildGradeStudents(grade))

const studentsData = studentsDataArray.reduce((acc, student) => {
  acc[student.id] = student
  return acc
}, {})

const sampleStudents = studentsDataArray.map((student) => ({
  id: student.id,
  name: student.name,
  grade: student.grade,
  parentContact: student.parentContact,
  parentWhatsApp: student.parentWhatsApp,
  parentEmail: student.parentEmail,
  rating: student.rating
}))

export { gradeOrder, sampleStudents, studentsData }
