const masterBank = {
    "Mathematics": [
  // --- NUMBER BASES, PERCENTAGES & FINANCE (1-10) ---
  {q: "A bag costs ₦5,000. If a 15% discount is given, how much will the buyer pay?", a: "₦4,250", options: ["₦4,250", "₦4,500", "₦4,850", "₦750"]},
  {q: "Convert 25 to a base 2 (binary) number.", a: "11001", options: ["10101", "11001", "11100", "10111"]},
  {q: "If 12.5% of a class are boys and there are 40 students, how many boys are there?", a: "5", options: ["4", "5", "8", "10"]},
  {q: "Find the Simple Interest on ₦20,000 for 3 years at 5% per annum.", a: "₦3,000", options: ["₦1,000", "₦3,000", "₦300", "₦6,000"]},
  {q: "Evaluate (110 in base 2) + (101 in base 2).", a: "1011 in base 2", options: ["1011", "211", "111", "1001"]},
  {q: "A man bought a phone for ₦50,000 and sold it for ₦45,000. Calculate his percentage loss.", a: "10%", options: ["5%", "10%", "15%", "20%"]},
  {q: "Write 0.000345 in standard form.", a: "3.45 × 10⁻⁴", options: ["3.45 × 10⁻³", "3.45 × 10⁻⁴", "34.5 × 10⁻⁵", "0.345 × 10⁻³"]},
  {q: "Find the HCF of 18, 24, and 42.", a: "6", options: ["2", "3", "6", "12"]},
  {q: "Simplify √(128) / √(2).", a: "8", options: ["4", "8", "16", "64"]},
  {q: "Express 0.666... as a fraction.", a: "2/3", options: ["1/3", "2/3", "3/4", "3/5"]},

  // --- ALGEBRA & VARIATION (11-20) ---
  {q: "Solve for x: 3(x - 4) = 15", a: "9", options: ["7", "9", "5", "1"]},
  {q: "If x = 4 and y = -2, evaluate 2x + 3y.", a: "2", options: ["14", "2", "6", "10"]},
  {q: "Solve for y: 2y / 5 = 4", a: "10", options: ["10", "20", "8", "2"]},
  {q: "Find the value of x if x + 10 = 2x - 5.", a: "15", options: ["5", "10", "15", "20"]},
  {q: "If y varies directly as x, and y=10 when x=2, find y when x=5.", a: "25", options: ["15", "20", "25", "30"]},
  {q: "Make 'r' the subject of the formula: A = πr²", a: "√(A/π)", options: ["A/π", "√(A/π)", "π/A", "√(π/A)"]},
  {q: "Factorize: 2x² - 8", a: "2(x-2)(x+2)", options: ["(2x-4)(x+2)", "2(x-2)²", "2(x-2)(x+2)", "x(2x-8)"]},
  {q: "Solve the simultaneous equations: x + y = 5, x - y = 1.", a: "x=3, y=2", options: ["x=2, y=3", "x=3, y=2", "x=4, y=1", "x=1, y=4"]},
  {q: "Find the value of (1/2)⁻³", a: "8", options: ["1/8", "6", "8", "-8"]},
  {q: "If 3ˣ = 81, what is x?", a: "4", options: ["2", "3", "4", "5"]},

  // --- GEOMETRY & TRIGONOMETRY (21-35) ---
  {q: "Find the area of a circle with a radius of 7cm. (π = 22/7)", a: "154cm²", options: ["44cm²", "154cm²", "49cm²", "144cm²"]},
  
  {q: "What is the volume of a rectangular box with length 10cm, width 5cm, and height 2cm?", a: "100cm³", options: ["17cm³", "50cm³", "100cm³", "70cm³"]},
  {q: "Find the sum of the interior angles of a pentagon (5 sides).", a: "540°", options: ["360°", "540°", "720°", "180°"]},
  {q: "A square has a perimeter of 32cm. What is its area?", a: "64cm²", options: ["16cm²", "32cm²", "64cm²", "128cm²"]},
  {q: "Find the hypotenuse of a right-angled triangle with sides 3cm and 4cm.", a: "5cm", options: ["5cm", "7cm", "12cm", "25cm"]},
  
  {q: "The angle of elevation of the top of a pole from a point 10m away is 45°. Height?", a: "10m", options: ["5m", "10m", "15m", "20m"]},
  {q: "What is the area of a triangle with base 8cm and height 12cm?", a: "48cm²", options: ["96cm²", "48cm²", "20cm²", "24cm²"]},
  {q: "How many sides does a hexagon have?", a: "6", options: ["5", "6", "7", "8"]},
  {q: "Find the size of each exterior angle of a regular octagon (8 sides).", a: "45°", options: ["30°", "45°", "60°", "90°"]},
  {q: "A cylinder has radius 7cm and height 10cm. Find its volume. (π=22/7)", a: "1540cm³", options: ["1540cm³", "770cm³", "440cm³", "154cm³"]},
  {q: "Find the length of an arc that subtends 60° at the center of a circle of radius 7cm.", a: "7.33cm", options: ["7.33cm", "14.67cm", "22cm", "44cm"]},
  {q: "If cos θ = 0.8, what is the value of θ (to the nearest degree)?", a: "37°", options: ["37°", "53°", "60°", "30°"]},
  {q: "The total surface area of a cube is 150cm². Find the length of one side.", a: "5cm", options: ["4cm", "5cm", "6cm", "25cm"]},
  {q: "What is the bearing of North-East?", a: "045°", options: ["045°", "090°", "135°", "225°"]},
  {q: "Calculate the area of a trapezium with parallel sides 10cm and 6cm, and height 5cm.", a: "40cm²", options: ["80cm²", "40cm²", "30cm²", "50cm²"]},

  // --- STATISTICS & SETS (36-45) ---
  {q: "Find the median of the scores: 12, 18, 14, 20, 16.", a: "16", options: ["14", "16", "18", "20"]},
  {q: "What is the mode of: 2, 3, 3, 4, 5, 5, 5, 6?", a: "5", options: ["3", "4", "5", "6"]},
  {q: "Calculate the mean of 10, 20, 30, 40.", a: "25", options: ["20", "25", "30", "35"]},
  {q: "In a pie chart, a 90° sector represents what percentage of the total?", a: "25%", options: ["10%", "20%", "25%", "50%"]},
  {q: "If the probability of passing is 0.85, what is the probability of failing?", a: "0.15", options: ["0.05", "0.15", "0.25", "0.85"]},
  {q: "Find the range of the numbers: 15, 2, 18, 4, 10.", a: "16", options: ["16", "18", "15", "10"]},
  {q: "If A = {even numbers 1-10} and B = {factors of 6}, find A ∩ B.", a: "{2, 6}", options: ["{2, 3, 4, 6}", "{2, 6}", "{2}", "{1, 2, 3, 4, 6}"]},
  {q: "How many subsets can be formed from a set containing 4 elements?", a: "16", options: ["4", "8", "12", "16"]},
  {q: "In a class of 30, 18 play football and 15 play basket. If 5 play both, how many play neither?", a: "2", options: ["2", "5", "8", "10"]},
  
  {q: "What is the square root of 0.0016?", a: "0.04", options: ["0.4", "0.04", "0.004", "0.16"]},

  // --- BOSS LEVEL: THE UNLUCKY 5 (46-50) ---
  {q: "BOSS: Solve for x in the equation: 8^(x-1) = 1/4", a: "1/3", options: ["1/2", "1/3", "2/3", "-1/3"]},
  {q: "BOSS: If log₁₀ 2 = 0.301 and log₁₀ 3 = 0.477, find log₁₀ 18.", a: "1.255", options: ["0.778", "1.255", "1.123", "0.954"]},
  {q: "BOSS: Find the gradient of the curve y = 2x² - 3x + 1 at the point where x = 2.", a: "5", options: ["3", "5", "7", "8"]},
  {q: "BOSS: Evaluate the limit as x → 3 of (x² - 9) / (x - 3).", a: "6", options: ["0", "3", "6", "Undefined"]},
  {q: "BOSS: A bag contains 4 red and 6 blue balls. If two are picked without replacement, probability both are red?", a: "2/15", options: ["4/25", "2/15", "1/5", "8/45"]}
],
    "Civic Education": [
  // --- VALUES AND CITIZENSHIP (1-10) ---
  {q: "What is the term for the accepted standards of behavior in a society?", a: "Values", options: ["Rules", "Values", "Policies", "Laws"]},
  {q: "Which of these is a characteristic of a person with integrity?", a: "Honesty", options: ["Greed", "Honesty", "Selfishness", "Nepotism"]},
  {q: "A person who is recognized as a legal member of a country is a?", a: "Citizen", options: ["Alien", "Citizen", "Tourist", "Refugee"]},
  {q: "The process by which an alien becomes a citizen of another country is?", a: "Naturalization", options: ["Birth", "Naturalization", "Registration", "Descent"]},
  {q: "Which value is most needed to reduce ethnic conflicts in Nigeria?", a: "Tolerance", options: ["Discipline", "Tolerance", "Courage", "Loyalty"]},
  {q: "The willingness to work together to achieve a common goal is?", a: "Cooperation", options: ["Competition", "Cooperation", "Isolation", "Conflict"]},
  {q: "A major consequence of the lack of values in a society is?", a: "Social vices", options: ["Development", "Social vices", "Peace", "Justice"]},
  {q: "Which of these is a civic responsibility of a citizen?", a: "Paying taxes", options: ["Sleeping", "Paying taxes", "Traveling", "Eating"]},
  {q: "Self-reliance means?", a: "Depending on oneself", options: ["Depending on government", "Depending on parents", "Depending on oneself", "Begging"]},
  {q: "The love for and pride in one's country is called?", a: "Patriotism", options: ["Cultism", "Patriotism", "Nepotism", "Tribalism"]},

  // --- HUMAN RIGHTS AND RULE OF LAW (11-20) ---
  {q: "The acronym UDHR stands for?", a: "Universal Declaration of Human Rights", options: ["United Nations Dept of Human Rights", "Universal Declaration of Human Rights", "Union for Democratic Human Rights", "Universal Data for Human Rights"]},
  {q: "In what year was the UDHR adopted by the United Nations?", a: "1948", options: ["1914", "1945", "1948", "1960"]},
  {q: "Which body is responsible for protecting human rights in Nigeria?", a: "NHRC", options: ["EFCC", "NHRC", "INEC", "NEMA"]},
  {q: "When a person's right is restricted to prevent the spread of a disease, it is called?", a: "Limitation of rights", options: ["Abuse of rights", "Limitation of rights", "Violation", "Dictatorship"]},
  {q: "The principle that ensures no one is above the law is?", a: "Rule of Law", options: ["Rule of Man", "Rule of Law", "Military Rule", "Diplomacy"]},
  {q: "Which arm of government interprets the law?", a: "Judiciary", options: ["Executive", "Legislature", "Judiciary", "Police"]},
  {q: "A written document containing the laws of a country is a?", a: "Constitution", options: ["Manifesto", "Constitution", "Decree", "Hansard"]},
  {q: "The right to vote and be voted for is a?", a: "Political right", options: ["Social right", "Political right", "Economic right", "Religious right"]},
  {q: "Democracy originated from which ancient civilization?", a: "Greece", options: ["Rome", "Greece", "Egypt", "Mali"]},
  {q: "A system of government where the military is in power is a?", a: "Junta", options: ["Monarchy", "Republic", "Junta", "Democracy"]},

  // --- SOCIAL ISSUES: DRUGS, CULTISM, HIV (21-35) ---
  {q: "Which agency is responsible for fighting drug abuse in Nigeria?", a: "NDLEA", options: ["NAFDAC", "NDLEA", "EFCC", "ICPC"]},
  {q: "A person who is addicted to drugs is called a?", a: "Drug addict", options: ["Drug trafficker", "Drug addict", "Pharmacist", "Consumer"]},
  {q: "Which of these is a consequence of drug abuse?", a: "Mental illness", options: ["Good health", "Mental illness", "Academic success", "Wealth"]},
  {q: "Cultism can be defined as?", a: "Secret society", options: ["Reading club", "Secret society", "Football team", "Political party"]},
  {q: "The first cult group in Nigeria was the?", a: "Sea Dogs", options: ["Sea Dogs", "Black Axe", "Vikings", "Eiye"]},
  {q: "Which of these is a way to prevent cultism?", a: "Good parenting", options: ["Joining gangs", "Good parenting", "Drug use", "Skipping school"]},
  {q: "HIV is mostly transmitted through?", a: "Unprotected sex", options: ["Sharing food", "Unprotected sex", "Mosquito bites", "Handshakes"]},
  {q: "The full meaning of AIDS is?", a: "Acquired Immune Deficiency Syndrome", options: ["Acquired Immune Deficiency Syndrome", "Advanced Internal Disease System", "Automatic Immune Death Symptom", "Acquired Infection and Disease System"]},
  {q: "A person living with HIV/AIDS should be?", a: "Supported", options: ["Stigmatized", "Isolated", "Supported", "Mocked"]},
  {q: "Human trafficking involves?", a: "Illegal trade of humans", options: ["Legal migration", "Illegal trade of humans", "Tourism", "Sports recruitment"]},
  {q: "STDs stand for?", a: "Sexually Transmitted Diseases", options: ["Systemic Tissue Disorders", "Sexually Transmitted Diseases", "Socially Transmitted Deaths", "Standard Treated Diseases"]},
  {q: "The most effective way to prevent HIV transmission via sharp objects is?", a: "Sterilization", options: ["Washing with water", "Sterilization", "Painting them", "Sharing with friends"]},
  {q: "What is the main reason why people join cults?", a: "Peer pressure", options: ["Peer pressure", "Hard work", "Love for God", "Patriotism"]},
  {q: "Which of these is a symptom of AIDS?", a: "Chronic weight loss", options: ["Instant weight gain", "Chronic weight loss", "Enhanced vision", "Blue skin"]},
  {q: "Drug trafficking means?", a: "Illegal trade of drugs", options: ["Prescribing drugs", "Illegal trade of drugs", "Taking medicine", "Making vaccines"]},

  // --- DEMOCRACY AND GOVERNANCE (36-45) ---
  {q: "The body responsible for conducting elections in Nigeria is?", a: "INEC", options: ["NPC", "INEC", "NUC", "JAMB"]},
  {q: "How many years make one term for a President in Nigeria?", a: "4 years", options: ["2 years", "4 years", "6 years", "8 years"]},
  {q: "The head of the Executive arm of government in a state is the?", a: "Governor", options: ["President", "Governor", "Senator", "Speaker"]},
  {q: "A system where power is shared between central and state governments is?", a: "Federalism", options: ["Unitary", "Federalism", "Confederation", "Monarchy"]},
  {q: "Public Service refers to?", a: "Government workers", options: ["Private companies", "Government workers", "Market traders", "Self-employed"]},
  {q: "Which of these is a challenge to the Nigerian Civil Service?", a: "Corruption", options: ["Punctuality", "Corruption", "Efficiency", "Honesty"]},
  {q: "The symbol of authority in the Legislature is the?", a: "Mace", options: ["Gavel", "Mace", "Crown", "Flag"]},
  
  {q: "The process of counting people in a country is?", a: "Census", options: ["Election", "Census", "Referendum", "Manifesto"]},
  {q: "Civil society groups are?", a: "Non-governmental", options: ["Military-owned", "Non-governmental", "Part of the Police", "Secret cults"]},
  {q: "A 'Referendum' is used to?", a: "Vote on an issue", options: ["Elect a King", "Vote on an issue", "Arrest criminals", "Start a war"]},

  // --- BOSS LEVEL: THE UNLUCKY 5 (46-50) ---
  {q: "BOSS: Which constitution first introduced the elective principle in Nigeria?", a: "Clifford Constitution", options: ["Richards Constitution", "Clifford Constitution", "Macpherson Constitution", "Lyttleton Constitution"]},
  {q: "BOSS: In the Rule of Law, 'A.V. Dicey' is famous for identifying how many pillars?", a: "3", options: ["2", "3", "4", "5"]},
  {q: "BOSS: The first stage of the HIV virus life cycle is?", a: "Binding/Attachment", options: ["Integration", "Binding/Attachment", "Budding", "Replication"]},
  {q: "BOSS: Which of these is a Quasi-Federal state?", a: "Nigeria", options: ["USA", "Nigeria", "Switzerland", "Canada"]},
  {q: "BOSS: The 'Ombudsman' in Civic Education refers to the?", a: "Public Complaints Commission", options: ["Electoral Commission", "Public Complaints Commission", "Supreme Court", "Police Force"]}
],
 "Government": [
  // --- CONCEPTS & SYSTEMS (1-15) ---
  {q: "The supreme power of a state to make and enforce laws is?", a: "Sovereignty", options: ["Authority", "Sovereignty", "Legitimacy", "Power"]},
  {q: "A state is defined by four elements: Population, Territory, Government and?", a: "Sovereignty", options: ["Army", "Sovereignty", "Taxation", "Religion"]},
  {q: "The right of a leader to be obeyed based on acceptance by the people is?", a: "Legitimacy", options: ["Force", "Legitimacy", "Dictatorship", "Influence"]},
  {q: "The process of getting and using power in a society is?", a: "Politics", options: ["Economics", "Politics", "Civics", "Ethics"]},
  {q: "A system where power is concentrated at the center is a?", a: "Unitary system", options: ["Federal system", "Unitary system", "Confederal system", "Monarchy"]},
  {q: "The principle of 'Separation of Powers' was popularized by?", a: "Baron de Montesquieu", options: ["John Locke", "Thomas Hobbes", "Baron de Montesquieu", "Karl Marx"]},
  
  {q: "A bicameral legislature consists of?", a: "Two houses", options: ["One house", "Two houses", "Three houses", "Military officers"]},
  {q: "In a Parliamentary system, the Head of Government is the?", a: "Prime Minister", options: ["President", "King", "Prime Minister", "Speaker"]},
  {q: "An 'Oligarchy' is a government by?", a: "A few people", options: ["One person", "A few people", "The masses", "The military"]},
  {q: "The 'Rule of Law' implies?", a: "Equality before the law", options: ["Laws for the poor", "Equality before the law", "Law of the jungle", "Military decrees"]},
  {q: "The set of rules that governs a country is called a?", a: "Constitution", options: ["Manifesto", "Hansard", "Constitution", "Decree"]},
  {q: "Socialism is a system that emphasizes?", a: "Public ownership", options: ["Private ownership", "Public ownership", "Religious rule", "Military power"]},
  {q: "Which arm of government interprets the law?", a: "Judiciary", options: ["Executive", "Legislature", "Judiciary", "Police"]},
  {q: "The ability to influence the behavior of others is?", a: "Power", options: ["Power", "Sovereignty", "Diplomacy", "Legitimacy"]},
  {q: "A 'Confederation' is a union where power lies with?", a: "The component units", options: ["The center", "The component units", "The military", "The king"]},

  // --- PRE-COLONIAL & COLONIAL NIGERIA (16-30) ---
  {q: "Who was the political head of the pre-colonial Oyo Empire?", a: "Alaafin", options: ["Ooni", "Alaafin", "Oba", "Sultan"]},
  {q: "The 'Oyo Mesi' served as?", a: "Kingmakers", options: ["Warriors", "Kingmakers", "Priests", "Traders"]},
  
  {q: "The Igbo pre-colonial system was often described as?", a: "Acephalous", options: ["Monarchical", "Acephalous", "Theocratic", "Imperial"]},
  {q: "Which official amalgamated Northern and Southern Nigeria in 1914?", a: "Lord Lugard", options: ["Lord Milverton", "Lord Lugard", "Sir Arthur Richards", "John Beecroft"]},
  {q: "The Clifford Constitution of 1922 introduced the?", a: "Elective principle", options: ["Federal system", "Elective principle", "Regionalism", "Independence"]},
  {q: "The Richards Constitution of 1946 introduced?", a: "Regionalism", options: ["Independence", "Regionalism", "Unitary rule", "Monarchy"]},
  {q: "The Lyttleton Constitution of 1954 is significant because it introduced?", a: "Federalism", options: ["Regionalism", "Independence", "Federalism", "The Senate"]},
  {q: "In what year did Nigeria gain independence?", a: "1960", options: ["1957", "1960", "1963", "1966"]},
  {q: "Nigeria became a Republic in which year?", a: "1963", options: ["1960", "1963", "1966", "1970"]},
  {q: "Who was the first ceremonial President of Nigeria?", a: "Nnamdi Azikiwe", options: ["Obafemi Awolowo", "Nnamdi Azikiwe", "Tafawa Balewa", "Shehu Shagari"]},
  {q: "The 1979 Constitution introduced which system of government?", a: "Presidential system", options: ["Parliamentary system", "Presidential system", "Monarchy", "Unitary system"]},
  {q: "The head of the Executive arm in a Nigerian State is the?", a: "Governor", options: ["President", "Governor", "Senator", "Speaker"]},
  {q: "The highest court in Nigeria is the?", a: "Supreme Court", options: ["High Court", "Court of Appeal", "Supreme Court", "Magistrate Court"]},
  {q: "Universal Adult Suffrage means?", a: "Right of adults to vote", options: ["Right of men to vote", "Right of adults to vote", "Voting in church", "Military voting"]},
  {q: "The first military coup in Nigeria occurred in?", a: "January 1966", options: ["October 1960", "January 1966", "July 1975", "December 1983"]},

  // --- PUBLIC ADMIN & INTERNATIONAL RELATIONS (31-45) ---
  {q: "The body of permanent officials who carry out government policies is?", a: "Civil Service", options: ["The Army", "Civil Service", "The Cabinet", "INEC"]},
  {q: "The headquarters of ECOWAS is located in?", a: "Abuja", options: ["Lagos", "Accra", "Abuja", "Lome"]},
  {q: "The 'veto power' in the UN is held by how many permanent members?", a: "5", options: ["3", "5", "10", "15"]},
  {q: "Which organization replaced the OAU in 2002?", a: "African Union", options: ["ECOWAS", "African Union", "NEPAD", "UN"]},
  {q: "The primary aim of OPEC is to?", a: "Regulate oil prices", options: ["Stop wars", "Regulate oil prices", "Promote farming", "Lend money"]},
  {q: "The Commonwealth of Nations is an association of?", a: "Former British colonies", options: ["All African states", "Former British colonies", "Oil producing states", "Military powers"]},
  {q: "Non-Alignment means a country?", a: "Does not join any power bloc", options: ["Has no army", "Does not join any power bloc", "Has no president", "Is always at war"]},
  {q: "A 'Manifesto' is a document that contains?", a: "Party programs", options: ["Court laws", "Party programs", "Voter names", "Military ranks"]},
  {q: "An Interest Group's main objective is to?", a: "Influence policy", options: ["Win elections", "Influence policy", "Arrest criminals", "Form a cabinet"]},
  {q: "Public Opinion can be measured through?", a: "Polls", options: ["Polls", "Wars", "Prayers", "Sleep"]},
  {q: "The mass media is referred to as the?", a: "Fourth Estate of the Realm", options: ["First Estate", "Second Estate", "Third Estate", "Fourth Estate of the Realm"]},
  {q: "Who conducts elections in Nigeria?", a: "INEC", options: ["NPC", "INEC", "EFCC", "NUC"]},
  {q: "The process of counting a country's population is?", a: "Census", options: ["Election", "Census", "Referendum", "Manifesto"]},
  {q: "A 'Referendum' is a?", a: "Direct vote on an issue", options: ["General election", "Direct vote on an issue", "Military decree", "Court ruling"]},
  {q: "Local governments are created to?", a: "Bring government closer to people", options: ["Increase taxes", "Bring government closer to people", "Rule the King", "Arrest senators"]},

  // --- BOSS LEVEL: THE UNLUCKY 5 (46-50) ---
  {q: "BOSS: Which pre-colonial official could command the Alaafin to 'sleep' (commit suicide)?", a: "The Bashorun", options: ["The Are-Ona-Kakanfo", "The Bashorun", "The Ooni", "The Alake"]},
  {q: "BOSS: The first African to preside over the UN General Assembly was?", a: "Angie Brooks", options: ["Nnamdi Azikiwe", "Angie Brooks", "Kofi Annan", "Joe Garba"]},
  {q: "BOSS: In the 1979 Constitution, how many states were in Nigeria?", a: "19", options: ["12", "19", "21", "36"]},
  {q: "BOSS: A 'Gerrymander' refers to the manipulation of?", a: "Constituency boundaries", options: ["Voter IDs", "Constituency boundaries", "Tax rates", "Court cases"]},
  {q: "BOSS: The 'Fascist' ideology is most associated with?", a: "Benito Mussolini", options: ["Adolf Hitler", "Benito Mussolini", "Joseph Stalin", "Winston Churchill"]}
],
 "Literature In English": [
  {q: "A comparison between two unlike things using 'as' or 'like' is a?", a: "Simile", options: ["Metaphor", "Simile", "Personification", "Hyperbole"]},
  {q: "The repetition of consonant sounds at the beginning of words is?", a: "Alliteration", options: ["Assonance", "Alliteration", "Onomatopoeia", "Pun"]},
  {q: "When an inanimate object is given human qualities, it is called?", a: "Personification", options: ["Metaphor", "Alliteration", "Personification", "Paradox"]},
  {q: "An exaggeration used for emphasis is known as?", a: "Hyperbole", options: ["Understatement", "Hyperbole", "Oxymoron", "Irony"]},
  {q: "A statement that appears self-contradictory but reveals a truth is a?", a: "Paradox", options: ["Oxymoron", "Paradox", "Euphemism", "Irony"]},
  {q: "Two contradictory words placed side by side (e.g., 'bitter-sweet') is an?", a: "Oxymoron", options: ["Oxymoron", "Paradox", "Onomatopoeia", "Synecdoche"]},
  {q: "A mild or indirect expression substituted for a harsh one is a?", a: "Euphemism", options: ["Irony", "Euphemism", "Metonymy", "Litotes"]},
  {q: "A play on words that have similar sounds but different meanings is a?", a: "Pun", options: ["Pun", "Satire", "Sarcasm", "Parody"]},
  {q: "The use of words that imitate the sound they describe (e.g., 'hiss') is?", a: "Onomatopoeia", options: ["Assonance", "Onomatopoeia", "Alliteration", "Rhyme"]},
  {q: "A reference to a famous person, place, or event in history or literature is an?", a: "Allusion", options: ["Illusion", "Allusion", "Allegory", "Imagery"]},
  {q: "The central idea or message of a literary work is the?", a: "Theme", options: ["Plot", "Theme", "Setting", "Climax"]},
  {q: "The attitude of the writer towards the subject matter is the?", a: "Tone", options: ["Mood", "Tone", "Diction", "Style"]},
  {q: "A story where characters and events represent abstract qualities or ideas is an?", a: "Allegory", options: ["Allegory", "Epic", "Fable", "Ode"]},
  {q: "The substitution of a part for the whole (e.g., 'all hands on deck') is?", a: "Synecdoche", options: ["Metonymy", "Synecdoche", "Simile", "Personification"]},
  {q: "A short poem that expresses the personal emotions of a speaker is a?", a: "Lyric", options: ["Epic", "Lyric", "Ballad", "Elegy"]},

  // --- DRAMA (16-25) ---
  {q: "A serious play that ends in a disaster for the main character is a?", a: "Tragedy", options: ["Comedy", "Tragedy", "Tragicomedy", "Farce"]},
  {q: "The main character in a tragedy whose downfall is caused by a flaw is the?", a: "Tragic Hero", options: ["Villain", "Tragic Hero", "Protagonist", "Antagonist"]},
  {q: "The fatal flaw that leads to the hero's downfall is called?", a: "Hamartia", options: ["Hubris", "Hamartia", "Catharsis", "Nemesis"]},
  {q: "Excessive pride or arrogance in a tragic hero is known as?", a: "Hubris", options: ["Hubris", "Climax", "Soliloquy", "Prologue"]},
  {q: "When a character speaks their inner thoughts aloud alone on stage, it is a?", a: "Soliloquy", options: ["Dialogue", "Monologue", "Soliloquy", "Aside"]},
  {q: "A short remark directed to the audience that other characters 'cannot hear' is an?", a: "Aside", options: ["Aside", "Soliloquy", "Epilogue", "Chorus"]},
  {q: "The emotional release or purging felt by the audience at the end of a tragedy is?", a: "Catharsis", options: ["Climax", "Catharsis", "Denouement", "Conflict"]},
  {q: "A light-hearted play intended to make the audience laugh is a?", a: "Comedy", options: ["Tragedy", "Comedy", "Melodrama", "Opera"]},
  {q: "The 'resolution' or final outcome of a complex plot is the?", a: "Denouement", options: ["Climax", "Exposition", "Denouement", "Rising Action"]},
  {q: "A person who opposes the main character in a story is the?", a: "Antagonist", options: ["Protagonist", "Antagonist", "Hero", "Foil"]},
 ]
}