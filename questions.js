// File: questions.js
// Developer: Phil Parker

const questions = {
  "Old Testament": {
    100: [
      {
        question: "What is the first book of the Bible?",
        options: ["Genesis", "Exodus", "Leviticus", "Numbers"],
        answer: "Genesis",
      },
      {
        question: "Who built the ark to survive the flood?",
        options: ["Moses", "Noah", "Abraham", "David"],
        answer: "Noah",
      },
      {
        question: "What did God create on the first day?",
        options: ["Light", "Sky", "Land", "Animals"],
        answer: "Light",
      },
    ],
    200: [
      {
        question: "Which Old Testament figure led the Israelites out of Egypt?",
        options: ["Moses", "Joshua", "Joseph", "Aaron"],
        answer: "Moses",
      },
      {
        question: "Who received the Ten Commandments on Mount Sinai?",
        options: ["Elijah", "Abraham", "Moses", "Isaiah"],
        answer: "Moses",
      },
      {
        question:
          "What river did the Israelites cross to enter the Promised Land?",
        options: ["Jordan", "Nile", "Euphrates", "Tigris"],
        answer: "Jordan",
      },
    ],
    300: [
      {
        question: "Who interpreted Pharaoh’s dreams in Egypt?",
        options: ["Joseph", "Daniel", "Moses", "Aaron"],
        answer: "Joseph",
      },
      {
        question: "How many plagues did God send on Egypt?",
        options: ["7", "10", "12", "40"],
        answer: "10",
      },
      {
        question: "What food did God provide in the desert?",
        options: ["Bread", "Fish", "Quail and manna", "Figs"],
        answer: "Quail and manna",
      },
    ],
    400: [
      {
        question: "Who was the only female judge of Israel?",
        options: ["Deborah", "Esther", "Miriam", "Ruth"],
        answer: "Deborah",
      },
      {
        question:
          "Which Old Testament prophet was taken up to heaven in a whirlwind?",
        options: ["Elijah", "Isaiah", "Jeremiah", "Elisha"],
        answer: "Elijah",
      },
      {
        question:
          "Which book tells the story of a Moabite woman who followed her mother-in-law to Israel?",
        options: ["Ruth", "Esther", "Judges", "Genesis"],
        answer: "Ruth",
      },
    ],
    500: [
      {
        question: "Which prophet had a vision of a valley of dry bones?",
        options: ["Isaiah", "Ezekiel", "Jeremiah", "Daniel"],
        answer: "Ezekiel",
      },
      {
        question: "Who saw a vision of a ladder reaching to heaven?",
        options: ["Jacob", "Joseph", "Samuel", "Moses"],
        answer: "Jacob",
      },
      {
        question:
          "What king saw the writing on the wall predicting his downfall?",
        options: ["Nebuchadnezzar", "Belshazzar", "Darius", "Saul"],
        answer: "Belshazzar",
      },
    ],
  },
  "New Testament": {
    100: [
      {
        question: "Where was Jesus born?",
        options: ["Bethlehem", "Nazareth", "Jerusalem", "Galilee"],
        answer: "Bethlehem",
      },
      {
        question: "Who baptized Jesus?",
        options: ["John the Baptist", "Peter", "Paul", "James"],
        answer: "John the Baptist",
      },
      {
        question: "What profession did Jesus have before ministry?",
        options: ["Carpenter", "Fisherman", "Shepherd", "Teacher"],
        answer: "Carpenter",
      },
    ],
    200: [
      {
        question: "How many disciples did Jesus choose?",
        options: ["10", "12", "7", "3"],
        answer: "12",
      },
      {
        question: "Who betrayed Jesus for 30 pieces of silver?",
        options: ["Peter", "Judas Iscariot", "Thomas", "Matthew"],
        answer: "Judas Iscariot",
      },
      {
        question: "Which book comes right after the four Gospels?",
        options: ["Acts", "Romans", "Revelation", "Hebrews"],
        answer: "Acts",
      },
    ],
    300: [
      {
        question: "Which apostle is known for doubting Jesus' resurrection?",
        options: ["Peter", "Thomas", "James", "Bartholomew"],
        answer: "Thomas",
      },
      {
        question: "Where did Jesus turn water into wine?",
        options: ["Cana", "Nazareth", "Bethany", "Jericho"],
        answer: "Cana",
      },
      {
        question: "Who wrote most of the New Testament letters?",
        options: ["Paul", "John", "Peter", "Luke"],
        answer: "Paul",
      },
    ],
    400: [
      {
        question:
          "What was the name of the criminal released instead of Jesus?",
        options: ["Barabbas", "Judas", "Pilate", "Simon"],
        answer: "Barabbas",
      },
      {
        question: "Which gospel was written by a doctor?",
        options: ["Luke", "Matthew", "John", "Mark"],
        answer: "Luke",
      },
      {
        question: "What event marked the start of the Church in Acts?",
        options: ["Pentecost", "Ascension", "Last Supper", "Baptism of Jesus"],
        answer: "Pentecost",
      },
    ],
    500: [
      {
        question: "Who had a vision of Jesus on the road to Damascus?",
        options: ["Paul", "Peter", "Stephen", "Barnabas"],
        answer: "Paul",
      },
      {
        question: "What island was John on when he wrote Revelation?",
        options: ["Patmos", "Cyprus", "Crete", "Malta"],
        answer: "Patmos",
      },
      {
        question: "Which church did Paul write about love in 1 Corinthians 13?",
        options: ["Corinth", "Ephesus", "Rome", "Galatia"],
        answer: "Corinth",
      },
    ],
  },
  "Life of Jesus": {
    100: [
      {
        question: "Who were Jesus’ earthly parents?",
        options: [
          "Mary and Joseph",
          "Elizabeth and Zechariah",
          "Sarah and Abraham",
          "Martha and Lazarus",
        ],
        answer: "Mary and Joseph",
      },
      {
        question: "Where did Jesus grow up?",
        options: ["Nazareth", "Bethlehem", "Jerusalem", "Capernaum"],
        answer: "Nazareth",
      },
      {
        question: "At what age did Jesus begin his ministry?",
        options: ["30", "25", "33", "20"],
        answer: "30",
      },
    ],
    200: [
      {
        question: "Who tempted Jesus in the wilderness?",
        options: ["Satan", "Pilate", "Herod", "Pharisees"],
        answer: "Satan",
      },
      {
        question: "How many days was Jesus in the wilderness?",
        options: ["40", "30", "20", "12"],
        answer: "40",
      },
      {
        question: "Who baptized Jesus?",
        options: ["John the Baptist", "Peter", "James", "Moses"],
        answer: "John the Baptist",
      },
    ],
    300: [
      {
        question: "Which disciple walked on water with Jesus?",
        options: ["Peter", "John", "James", "Andrew"],
        answer: "Peter",
      },
      {
        question: "What miracle did Jesus perform at the wedding in Cana?",
        options: [
          "Turned water into wine",
          "Healed a blind man",
          "Walked on water",
          "Fed 5,000",
        ],
        answer: "Turned water into wine",
      },
      {
        question: "Where did Jesus pray before being arrested?",
        options: ["Gethsemane", "Nazareth", "Mount Sinai", "Bethlehem"],
        answer: "Gethsemane",
      },
    ],
    400: [
      {
        question: "Who denied knowing Jesus three times?",
        options: ["Peter", "Judas", "Thomas", "James"],
        answer: "Peter",
      },
      {
        question: "Who sentenced Jesus to be crucified?",
        options: ["Pontius Pilate", "Caesar", "Herod", "Nicodemus"],
        answer: "Pontius Pilate",
      },
      {
        question: "What was Jesus’ final command before ascending to heaven?",
        options: [
          "Make disciples of all nations",
          "Build a temple",
          "Write the Bible",
          "Go to Jerusalem",
        ],
        answer: "Make disciples of all nations",
      },
    ],
    500: [
      {
        question: "What was the name of the hill where Jesus was crucified?",
        options: ["Golgotha", "Zion", "Sinai", "Olives"],
        answer: "Golgotha",
      },
      {
        question: "Who helped carry Jesus’ cross?",
        options: [
          "Simon of Cyrene",
          "Joseph of Arimathea",
          "Nicodemus",
          "Peter",
        ],
        answer: "Simon of Cyrene",
      },
      {
        question: "What did the curtain in the temple do when Jesus died?",
        options: ["Tore in two", "Fell down", "Caught fire", "Glowed brightly"],
        answer: "Tore in two",
      },
    ],
  },
  Parables: {
    100: [
      {
        question: "What did the sower scatter in the Parable of the Sower?",
        options: ["Seed", "Wheat", "Grain", "Coins"],
        answer: "Seed",
      },
      {
        question: "What animal left the 99 in the Parable of the Lost Sheep?",
        options: ["Shepherd", "Wolf", "Farmer", "Merchant"],
        answer: "Shepherd",
      },
      {
        question: "What type of tree did Jesus curse for bearing no fruit?",
        options: ["Fig tree", "Olive tree", "Cedar tree", "Vine"],
        answer: "Fig tree",
      },
    ],
    200: [
      {
        question:
          "In the Parable of the Good Samaritan, who helped the injured man?",
        options: ["Samaritan", "Priest", "Levite", "Pharisee"],
        answer: "Samaritan",
      },
      {
        question:
          "What did the man find in the field that made him sell everything?",
        options: ["Treasure", "Pearl", "Gold", "Oil"],
        answer: "Treasure",
      },
      {
        question: "What do the seeds represent in the Parable of the Sower?",
        options: ["God's word", "Money", "Angels", "Disciples"],
        answer: "God's word",
      },
    ],
    300: [
      {
        question:
          "In the Parable of the Talents, how many servants received talents?",
        options: ["3", "2", "4", "5"],
        answer: "3",
      },
      {
        question: "What did the prodigal son ask for early?",
        options: ["Inheritance", "Land", "Wife", "Animals"],
        answer: "Inheritance",
      },
      {
        question:
          "What was the father’s reaction when the prodigal son returned?",
        options: [
          "Welcomed him",
          "Punished him",
          "Ignored him",
          "Sold his land",
        ],
        answer: "Welcomed him",
      },
    ],
    400: [
      {
        question:
          "In the Parable of the Ten Virgins, what were they waiting for?",
        options: ["The bridegroom", "A king", "A feast", "An angel"],
        answer: "The bridegroom",
      },
      {
        question: "What item was missing from the foolish virgins?",
        options: ["Oil", "Money", "Shoes", "Robe"],
        answer: "Oil",
      },
      {
        question: "What does the mustard seed grow into?",
        options: ["A large tree", "A vineyard", "A palm tree", "A wheat field"],
        answer: "A large tree",
      },
    ],
    500: [
      {
        question: "What did the rich man build to store his crops?",
        options: ["Barns", "Storehouses", "Temples", "Granaries"],
        answer: "Barns",
      },
      {
        question:
          "Who was the master angry with in the Parable of the Talents?",
        options: [
          "The servant who buried his talent",
          "The one who spent it all",
          "The dishonest one",
          "The lazy neighbor",
        ],
        answer: "The servant who buried his talent",
      },
      {
        question:
          "In the Parable of the Wedding Feast, who was invited after the original guests declined?",
        options: [
          "The poor and outcasts",
          "The disciples",
          "The priests",
          "Foreigners",
        ],
        answer: "The poor and outcasts",
      },
    ],
  },
  Miracles: {
    100: [
      {
        question: "What did Jesus turn water into at a wedding?",
        options: ["Wine", "Milk", "Oil", "Honey"],
        answer: "Wine",
      },
      {
        question:
          "How many people did Jesus feed with five loaves and two fish?",
        options: ["5,000", "1,000", "3,000", "2,000"],
        answer: "5,000",
      },
      {
        question: "What did Jesus calm during a storm?",
        options: ["The sea", "The crowd", "The wind", "The sky"],
        answer: "The sea",
      },
    ],
    200: [
      {
        question: "Who was raised from the dead after 4 days?",
        options: ["Lazarus", "Jairus' daughter", "Tabitha", "Eutychus"],
        answer: "Lazarus",
      },
      {
        question:
          "What body part did Jesus restore to a servant during His arrest?",
        options: ["Ear", "Hand", "Eye", "Foot"],
        answer: "Ear",
      },
      {
        question: "What did Jesus do to a fig tree that bore no fruit?",
        options: ["Cursed it", "Cut it down", "Watered it", "Burned it"],
        answer: "Cursed it",
      },
    ],
    300: [
      {
        question: "What miracle involved Jesus walking on something?",
        options: ["Water", "Fire", "Air", "Clouds"],
        answer: "Water",
      },
      {
        question: "What woman was healed by touching Jesus' cloak?",
        options: [
          "A bleeding woman",
          "A blind woman",
          "A Samaritan woman",
          "A widow",
        ],
        answer: "A bleeding woman",
      },
      {
        question:
          "What animal did Jesus get a coin from to pay the temple tax?",
        options: ["Fish", "Donkey", "Camel", "Bird"],
        answer: "Fish",
      },
    ],
    400: [
      {
        question: "What did Jesus do to 10 lepers?",
        options: ["Healed them", "Sent them away", "Fed them", "Baptized them"],
        answer: "Healed them",
      },
      {
        question: "Which disciple performed miracles after Jesus ascended?",
        options: ["Peter", "Matthew", "Thomas", "James"],
        answer: "Peter",
      },
      {
        question: "What miracle involved Peter’s mother-in-law?",
        options: [
          "She was healed of a fever",
          "She walked on water",
          "She saw angels",
          "She raised a child",
        ],
        answer: "She was healed of a fever",
      },
    ],
    500: [
      {
        question: "What happened to the woman bent over for 18 years?",
        options: [
          "She stood up straight",
          "She was forgiven",
          "She had a vision",
          "She became a disciple",
        ],
        answer: "She stood up straight",
      },
      {
        question: "Who fell out of a window and was raised to life by Paul?",
        options: ["Eutychus", "Stephen", "Timothy", "Cornelius"],
        answer: "Eutychus",
      },
      {
        question: "What miracle happened when Paul was bitten by a snake?",
        options: [
          "He was unharmed",
          "He healed others",
          "He died and rose again",
          "The snake disappeared",
        ],
        answer: "He was unharmed",
      },
    ],
  },
  "Bible Heroes": {
    100: [
      {
        question: "Who defeated Goliath with a sling?",
        options: ["David", "Saul", "Jonathan", "Samuel"],
        answer: "David",
      },
      {
        question: "Who led the Israelites into the Promised Land?",
        options: ["Joshua", "Moses", "Aaron", "Caleb"],
        answer: "Joshua",
      },
      {
        question: "Who built an ark to survive a great flood?",
        options: ["Noah", "Abraham", "Enoch", "Isaiah"],
        answer: "Noah",
      },
    ],
    200: [
      {
        question: "Who interpreted dreams for Pharaoh in Egypt?",
        options: ["Joseph", "Daniel", "Moses", "Aaron"],
        answer: "Joseph",
      },
      {
        question: "Who saved her people by speaking to the king?",
        options: ["Esther", "Ruth", "Deborah", "Hannah"],
        answer: "Esther",
      },
      {
        question: "Who wrestled with an angel and got a new name?",
        options: ["Jacob", "Isaac", "Esau", "Reuben"],
        answer: "Jacob",
      },
    ],
    300: [
      {
        question: "Who prayed and shut the mouths of lions?",
        options: ["Daniel", "Joseph", "Elijah", "Mordecai"],
        answer: "Daniel",
      },
      {
        question:
          "Who had great strength from God but lost it when his hair was cut?",
        options: ["Samson", "Solomon", "Gideon", "David"],
        answer: "Samson",
      },
      {
        question: "Who fasted 40 days on Mount Sinai?",
        options: ["Moses", "Elijah", "Jesus", "Aaron"],
        answer: "Moses",
      },
    ],
    400: [
      {
        question: "Who led Israel as both a prophet and judge?",
        options: ["Samuel", "Eli", "Nathan", "Saul"],
        answer: "Samuel",
      },
      {
        question: "Who was known for his wisdom and wrote many proverbs?",
        options: ["Solomon", "David", "Isaiah", "Jeremiah"],
        answer: "Solomon",
      },
      {
        question: "Who stood in a fiery furnace and was not burned?",
        options: [
          "Shadrach, Meshach, and Abednego",
          "Daniel",
          "Elijah",
          "Ezekiel",
        ],
        answer: "Shadrach, Meshach, and Abednego",
      },
    ],
    500: [
      {
        question: "Who was taken to heaven in a chariot of fire?",
        options: ["Elijah", "Moses", "Isaiah", "Elisha"],
        answer: "Elijah",
      },
      {
        question: "Who was the mother of Samuel and dedicated him to God?",
        options: ["Hannah", "Rachel", "Leah", "Naomi"],
        answer: "Hannah",
      },
      {
        question: "Who was stoned for preaching about Jesus in Acts?",
        options: ["Stephen", "Paul", "Peter", "Barnabas"],
        answer: "Stephen",
      },
    ],
  },
  "Bible Villains": {
    100: [
      {
        question: "Who betrayed Jesus to the authorities?",
        options: ["Judas Iscariot", "Peter", "Pilate", "Herod"],
        answer: "Judas Iscariot",
      },
      {
        question: "Who lied to God about the price of land and died?",
        options: [
          "Ananias and Sapphira",
          "Cain and Abel",
          "Nadab and Abihu",
          "Ahab and Jezebel",
        ],
        answer: "Ananias and Sapphira",
      },
      {
        question: "Who killed his brother out of jealousy?",
        options: ["Cain", "Esau", "Ishmael", "Absalom"],
        answer: "Cain",
      },
    ],
    200: [
      {
        question: "Which king tried to kill baby Jesus?",
        options: ["Herod", "Caesar", "Pilate", "Nebuchadnezzar"],
        answer: "Herod",
      },
      {
        question: "Who had Naboth killed for his vineyard?",
        options: ["Ahab", "Jezebel", "Saul", "Solomon"],
        answer: "Ahab",
      },
      {
        question: "Who was the wife of Ahab and known for evil deeds?",
        options: ["Jezebel", "Delilah", "Herodias", "Athaliah"],
        answer: "Jezebel",
      },
    ],
    300: [
      {
        question: "Who tricked Samson and cut his hair?",
        options: ["Delilah", "Jezebel", "Herodias", "Athaliah"],
        answer: "Delilah",
      },
      {
        question: "Who ordered the beheading of John the Baptist?",
        options: ["Herod", "Pilate", "Jezebel", "Caiaphas"],
        answer: "Herod",
      },
      {
        question: "Who plotted to kill the Jews in the book of Esther?",
        options: ["Haman", "Pharaoh", "Nebuchadnezzar", "Herod"],
        answer: "Haman",
      },
    ],
    400: [
      {
        question: "Who threw Daniel into the lion's den?",
        options: ["King Darius", "Nebuchadnezzar", "Belshazzar", "Pharaoh"],
        answer: "King Darius",
      },
      {
        question: "Who laughed when God said she would have a child?",
        options: ["Sarah", "Jezebel", "Lot’s wife", "Michal"],
        answer: "Sarah",
      },
      {
        question: "Who ordered babies to be killed in Bethlehem?",
        options: ["Herod", "Pilate", "Caesar", "Caiaphas"],
        answer: "Herod",
      },
    ],
    500: [
      {
        question: "Who turned against David and tried to take his throne?",
        options: ["Absalom", "Saul", "Adonijah", "Joab"],
        answer: "Absalom",
      },
      {
        question: "Who mocked Jesus during His crucifixion?",
        options: ["Soldiers", "Pharisees", "Herod", "Pilate"],
        answer: "Soldiers",
      },
      {
        question: "Who betrayed Samson to the Philistines?",
        options: ["Delilah", "His mother", "A servant", "His brother"],
        answer: "Delilah",
      },
    ],
  },
  "Books & Verses": {
    100: [
      {
        question: "What is the first book of the Bible?",
        options: ["Genesis", "Exodus", "Leviticus", "Numbers"],
        answer: "Genesis",
      },
      {
        question: "What is the last book of the Bible?",
        options: ["Revelation", "Jude", "Hebrews", "Malachi"],
        answer: "Revelation",
      },
      {
        question: "Which book contains the Ten Commandments?",
        options: ["Exodus", "Genesis", "Leviticus", "Numbers"],
        answer: "Exodus",
      },
    ],
    200: [
      {
        question: "Which book is known as the book of songs and prayers?",
        options: ["Psalms", "Proverbs", "Ecclesiastes", "Job"],
        answer: "Psalms",
      },
      {
        question: "Which book comes right before Revelation?",
        options: ["Jude", "Hebrews", "James", "1 John"],
        answer: "Jude",
      },
      {
        question: "What book contains the story of creation?",
        options: ["Genesis", "Exodus", "Psalms", "Job"],
        answer: "Genesis",
      },
    ],
    300: [
      {
        question: "Which gospel is written by a doctor?",
        options: ["Luke", "Matthew", "John", "Mark"],
        answer: "Luke",
      },
      {
        question: "Which book tells the story of Paul’s missionary journeys?",
        options: ["Acts", "Romans", "Galatians", "Corinthians"],
        answer: "Acts",
      },
      {
        question: "Which book says, 'The Lord is my shepherd'?",
        options: ["Psalms", "Proverbs", "Isaiah", "Job"],
        answer: "Psalms",
      },
    ],
    400: [
      {
        question: "Which book is known for its wisdom sayings?",
        options: ["Proverbs", "Ecclesiastes", "James", "Job"],
        answer: "Proverbs",
      },
      {
        question: "Which book follows the Gospels in the New Testament?",
        options: ["Acts", "Romans", "1 Corinthians", "Hebrews"],
        answer: "Acts",
      },
      {
        question: "Which book says, 'For God so loved the world'?",
        options: ["John", "Matthew", "Luke", "Romans"],
        answer: "John",
      },
    ],
    500: [
      {
        question: "Which book contains the prophecy of dry bones?",
        options: ["Ezekiel", "Isaiah", "Jeremiah", "Daniel"],
        answer: "Ezekiel",
      },
      {
        question: "Which book ends with a vision of a new heaven and earth?",
        options: ["Revelation", "Isaiah", "Daniel", "Hebrews"],
        answer: "Revelation",
      },
      {
        question:
          "Which book contains the line 'To everything there is a season'?",
        options: ["Ecclesiastes", "Proverbs", "Psalms", "Job"],
        answer: "Ecclesiastes",
      },
    ],
  },
  "Who Said It?": {
    100: [
      {
        question: "Who said, 'Let my people go'?",
        options: ["Moses", "Pharaoh", "Aaron", "Joseph"],
        answer: "Moses",
      },
      {
        question: "Who said, 'I am the way and the truth and the life'?",
        options: ["Jesus", "John", "Paul", "Peter"],
        answer: "Jesus",
      },
      {
        question: "Who said, 'Am I my brother’s keeper?'",
        options: ["Cain", "Abel", "Noah", "Esau"],
        answer: "Cain",
      },
    ],
    200: [
      {
        question: "Who said, 'The Lord is my shepherd'?",
        options: ["David", "Moses", "Solomon", "Isaiah"],
        answer: "David",
      },
      {
        question: "Who said, 'Here I am. Send me!'?",
        options: ["Isaiah", "Elijah", "Samuel", "Jeremiah"],
        answer: "Isaiah",
      },
      {
        question: "Who said, 'I find no fault in this man'?",
        options: ["Pilate", "Herod", "Caiaphas", "Judas"],
        answer: "Pilate",
      },
    ],
    300: [
      {
        question: "Who said, 'As for me and my house, we will serve the Lord'?",
        options: ["Joshua", "Moses", "David", "Caleb"],
        answer: "Joshua",
      },
      {
        question: "Who said, 'Speak, Lord, for your servant is listening'?",
        options: ["Samuel", "Eli", "David", "Nathan"],
        answer: "Samuel",
      },
      {
        question: "Who said, 'What is truth?'",
        options: ["Pilate", "Peter", "Paul", "Herod"],
        answer: "Pilate",
      },
    ],
    400: [
      {
        question: "Who said, 'My soul magnifies the Lord'?",
        options: ["Mary", "Elizabeth", "Hannah", "Ruth"],
        answer: "Mary",
      },
      {
        question:
          "Who said, 'You intended to harm me, but God intended it for good'?",
        options: ["Joseph", "Daniel", "Job", "Jacob"],
        answer: "Joseph",
      },
      {
        question: "Who said, 'Though He slay me, yet will I trust Him'?",
        options: ["Job", "David", "Elijah", "Jeremiah"],
        answer: "Job",
      },
    ],
    500: [
      {
        question: "Who said, 'Create in me a clean heart, O God'?",
        options: ["David", "Solomon", "Isaiah", "Jeremiah"],
        answer: "David",
      },
      {
        question: "Who said, 'He must increase, but I must decrease'?",
        options: ["John the Baptist", "Jesus", "Paul", "Peter"],
        answer: "John the Baptist",
      },
      {
        question:
          "Who said, 'I have fought the good fight, I have finished the race'?",
        options: ["Paul", "Peter", "John", "Timothy"],
        answer: "Paul",
      },
    ],
  },
  "Numbers in the Bible": {
    100: [
      {
        question: "How many days did God take to create the world?",
        options: ["6", "7", "3", "10"],
        answer: "6",
      },
      {
        question: "How many disciples did Jesus have?",
        options: ["12", "10", "7", "14"],
        answer: "12",
      },
      {
        question: "How many of each animal did Noah take on the ark?",
        options: ["2", "4", "6", "12"],
        answer: "2",
      },
    ],
    200: [
      {
        question: "How many days and nights did it rain during the flood?",
        options: ["40", "7", "12", "3"],
        answer: "40",
      },
      {
        question: "How many plagues were sent to Egypt?",
        options: ["10", "7", "12", "3"],
        answer: "10",
      },
      {
        question: "How many commandments did God give Moses?",
        options: ["10", "12", "7", "5"],
        answer: "10",
      },
    ],
    300: [
      {
        question: "How many books are in the Bible?",
        options: ["66", "72", "60", "80"],
        answer: "66",
      },
      {
        question: "How many people were saved on Noah's Ark?",
        options: ["8", "2", "4", "10"],
        answer: "8",
      },
      {
        question: "How many days did Jesus fast in the wilderness?",
        options: ["40", "30", "21", "7"],
        answer: "40",
      },
    ],
    400: [
      {
        question: "How many years did the Israelites wander in the desert?",
        options: ["40", "20", "7", "10"],
        answer: "40",
      },
      {
        question: "How many loaves did Jesus use to feed 5,000?",
        options: ["5", "7", "12", "3"],
        answer: "5",
      },
      {
        question: "How many baskets were left after feeding 5,000?",
        options: ["12", "10", "7", "3"],
        answer: "12",
      },
    ],
    500: [
      {
        question: "How many Psalms are in the Book of Psalms?",
        options: ["150", "100", "120", "200"],
        answer: "150",
      },
      {
        question: "How many times did Peter deny Jesus?",
        options: ["3", "2", "4", "5"],
        answer: "3",
      },
      {
        question: "How many chapters are in the book of Isaiah?",
        options: ["66", "40", "52", "70"],
        answer: "66",
      },
    ],
  },
  "Apostles": {
  100: [
    {
      question: "How many apostles did Jesus originally choose?",
      options: ["10", "12", "11", "14"],
      answer: "12"
    },
    {
      question: "Who was the brother of Andrew?",
      options: ["Peter", "James", "John", "Thomas"],
      answer: "Peter"
    },
    {
      question: "What trade did Peter and Andrew have?",
      options: ["Fishermen", "Carpenters", "Tax collectors", "Tentmakers"],
      answer: "Fishermen"
    }
  ],
  200: [
    {
      question: "Who was known as the 'disciple whom Jesus loved'?",
      options: ["John", "James", "Peter", "Matthew"],
      answer: "John"
    },
    {
      question: "Which apostle doubted Jesus’ resurrection?",
      options: ["Thomas", "Philip", "James", "Bartholomew"],
      answer: "Thomas"
    },
    {
      question: "Which apostle was a tax collector?",
      options: ["Matthew", "Simon", "Thaddeus", "Andrew"],
      answer: "Matthew"
    }
  ],
  300: [
    {
      question: "Who replaced Judas Iscariot as an apostle?",
      options: ["Matthias", "Barnabas", "Stephen", "Silas"],
      answer: "Matthias"
    },
    {
      question: "Which apostle walked on water with Jesus?",
      options: ["Peter", "James", "John", "Philip"],
      answer: "Peter"
    },
    {
      question: "Who brought Nathanael to Jesus?",
      options: ["Philip", "Thomas", "Matthew", "Andrew"],
      answer: "Philip"
    }
  ],
  400: [
    {
      question: "Which apostle was called the 'Zealot'?",
      options: ["Simon", "Thaddeus", "Bartholomew", "James"],
      answer: "Simon"
    },
    {
      question: "Which apostle wrote two letters and likely helped Mark write a Gospel?",
      options: ["Peter", "John", "James", "Thomas"],
      answer: "Peter"
    },
    {
      question: "Who was present with Jesus at the Transfiguration?",
      options: ["Peter, James, and John", "Thomas, Philip, and Judas", "Andrew, James, and Matthew", "John, Simon, and Peter"],
      answer: "Peter, James, and John"
    }
  ],
  500: [
    {
      question: "Which apostle was exiled to the island of Patmos?",
      options: ["John", "Peter", "James", "Thomas"],
      answer: "John"
    },
    {
      question: "Who was the first apostle to be martyred?",
      options: ["James (son of Zebedee)", "Peter", "Andrew", "Bartholomew"],
      answer: "James (son of Zebedee)"
    },
    {
      question: "Which apostle was crucified upside down?",
      options: ["Peter", "Philip", "Simon", "John"],
      answer: "Peter"
    }
  ]
},
"Paul": {
  100: [
    {
      question: "What was Paul’s name before his conversion?",
      options: ["Saul", "Silas", "Stephen", "Simeon"],
      answer: "Saul"
    },
    {
      question: "Where was Paul when he encountered Jesus?",
      options: ["On the road to Damascus", "In Jerusalem", "At Antioch", "In prison"],
      answer: "On the road to Damascus"
    },
    {
      question: "Who was blinded for three days after meeting Jesus?",
      options: ["Paul", "Peter", "Stephen", "Barnabas"],
      answer: "Paul"
    }
  ],
  200: [
    {
      question: "Who baptized Paul after his conversion?",
      options: ["Ananias", "Peter", "Philip", "Timothy"],
      answer: "Ananias"
    },
    {
      question: "What did Paul do before following Jesus?",
      options: ["Persecuted Christians", "Built temples", "Preached in synagogues", "Was a fisherman"],
      answer: "Persecuted Christians"
    },
    {
      question: "Which city did Paul visit when he gave his 'Unknown God' speech?",
      options: ["Athens", "Rome", "Corinth", "Jerusalem"],
      answer: "Athens"
    }
  ],
  300: [
    {
      question: "Who was Paul’s frequent travel companion?",
      options: ["Barnabas", "Peter", "Silas", "Titus"],
      answer: "Barnabas"
    },
    {
      question: "How many missionary journeys did Paul take?",
      options: ["Three", "One", "Five", "Seven"],
      answer: "Three"
    },
    {
      question: "What was Paul's profession?",
      options: ["Tentmaker", "Carpenter", "Priest", "Scribe"],
      answer: "Tentmaker"
    }
  ],
  400: [
    {
      question: "Which book contains Paul’s ‘love’ chapter?",
      options: ["1 Corinthians", "Romans", "Philippians", "Galatians"],
      answer: "1 Corinthians"
    },
    {
      question: "In what city was Paul imprisoned with Silas and sang hymns at midnight?",
      options: ["Philippi", "Corinth", "Ephesus", "Jerusalem"],
      answer: "Philippi"
    },
    {
      question: "What did Paul call the ‘fruit of the Spirit’?",
      options: ["Love, joy, peace, etc.", "Good works", "Spiritual gifts", "Heavenly reward"],
      answer: "Love, joy, peace, etc."
    }
  ],
  500: [
    {
      question: "Where was Paul when he wrote many of his letters?",
      options: ["Prison", "Synagogue", "Desert", "Mountains"],
      answer: "Prison"
    },
    {
      question: "To which young leader did Paul write two personal letters?",
      options: ["Timothy", "Titus", "Silas", "Luke"],
      answer: "Timothy"
    },
    {
      question: "What Roman official said, 'You almost persuade me to become a Christian'?",
      options: ["Agrippa", "Felix", "Pilate", "Festus"],
      answer: "Agrippa"
    }
  ]
}


};
