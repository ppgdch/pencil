var verbs, nouns, adjectives, adverbs, preposition;
            nouns = ["I", "You", "We", "They"];
            verbs = ["like",
            "love",
            "enjoy",
            "dislike",
            "hate",
            "prefer",
            "can’t stand"];

            adjectives = ["adorable",
            "agreeable",
            "amused",
            "annoying",
            "ashamed",
            "awful",
            "better",
            "bloody",
            "blushing",
            "brave",
            "busy",
            "cautious",
            "clean",
            "cloudy",
            "combative",
            "condemned",
            "courageous",
            "crowded",
            "cute",
            "dead",
            "delightful",
            "different",
            "distinct",
            "doubtful",
            "adventurous",
            "alert",
            "angry",
            "anxious",
            "attractive",
            "bad",
            "bewildered",
            "blue",
            "bored",
            "breakable",
            "calm",
            "charming",
            "clear",
            "clumsy",
            "comfortable",
            "confused",
            "crazy",
            "cruel",
            "dangerous",
            "defeated",
            "depressed",
            "difficult",
            "disturbed",
            "drab",
            "aggressive",
            "alive",
            "annoyed",
            "arrogant",
            "average",
            "beautiful",
            "black",
            "blue-eyed",
            "brainy",
            "bright",
            "careful",
            "cheerful",
            "clever",
            "colorful",
            "concerned",
            "cooperative",
            "creepy",
            "curious",
            "dark",
            "defiant",
            "determined",
            "disgusted",
            "dizzy",
            "dull",
            "eager",
            "elegant",
            "encouraging",
            "envious",
            "expensive",
            "faithful",
            "fantastic",
            "fine",
            "frail",
            "frightened",
            "gifted",
            "glorious",
            "graceful",
            "grumpy",
            "healthy",
            "hilarious",
            "horrible",
            "ill",
            "inexpensive",
            "itchy",
            "jolly",
            "easy",
            "embarrassed",
            "energetic",
            "evil",
            "exuberant",
            "famous",
            "fierce",
            "foolish",
            "frantic",
            "funny",
            "glamorous",
            "good",
            "grieving",
            "handsome",
            "helpful",
            "homeless",
            "hungry",
            "important",
            "innocent",
            "jealous",
            "joyous",
            "elated",
            "enchanting",
            "enthusiastic",
            "excited",
            "fair",
            "fancy",
            "filthy",
            "fragile",
            "friendly",
            "gentle",
            "gleaming",
            "gorgeous",
            "grotesque",
            "happy",
            "helpless",
            "homely",
            "hurt",
            "impossible",
            "inquisitive",
            "jittery",
            "kind",
            "lazy",
            "lonely",
            "lucky",
            "modern",
            "mushy",
            "naughty",
            "nutty",
            "odd",
            "outrageous",
            "perfect",
            "poised",
            "precious",
            "putrid",
            "real",
            "rich",
            "shiny",
            "sleepy",
            "sore",
            "spotless",
            "stupid",
            "light",
            "long",
            "magnificent",
            "motionless",
            "mysterious",
            "nervous",
            "obedient",
            "old-fashioned",
            "outstanding",
            "plain",
            "poor",
            "prickly",
            "puzzled",
            "relieved",
            "scary",
            "shy",
            "smiling",
            "sparkling",
            "stormy",
            "successful",
            "lively",
            "lovely",
            "misty",
            "muddy",
            "nasty",
            "nice",
            "obnoxious",
            "open",
            "panicky",
            "pleasant",
            "powerful",
            "proud",
            "quaint",
            "repulsive",
            "selfish",
            "silly",
            "smoggy",
            "splendid",
            "strange",
            "super",
            "talented",
            "tender",
            "thankful",
            "tired",
            "ugliest",
            "unsightly",
            "uptight",
            "vivacious",
            "wicked",
            "witty",
            "wrong",
            "tame",
            "tense",
            "thoughtful",
            "tough",
            "ugly",
            "unusual",
            "vast",
            "wandering",
            "wide-eyed",
            "worried",
            "zany",
            "tasty",
            "terrible",
            "thoughtless",
            "troubled",
            "uninterested",
            "upset",
            "victorious",
            "weary",
            "wild",
            "worrisome",
            "zealous"];

            
            adverbs = ["my",
            "your",
            "his",
            "her",
            "its",
            "our",
            "their",
            "Barack Obama’s",
            "Miley Cyrus’s",
            "Kim Kardashian’s",
            "Margaret Thatcher’s",
            "Nelson Mandela’s ",
            "Lady Gaga’s ",
            "Katy Perry’s ",
            "Justin Timberlake’s ",
            "Jay Leno’s ",
            "David Letterman’s ",
            "Jennifer Aniston’s ",
            "Pluto’s ",
            "Goofy’s ",
            "Johnny Depp’s ",
            "Brittney Spears’s ",
            "Paris Hilton’s ",
            "Hugh Jackman’s ",
            "Daniel Radcliffe’s ",
            "David Beckham’s ",
            "Eminem’s ",
            "Matt Damon’s ",
            "Jack Nicholson’s ",
            "Kevin Spacey’s ",
            "Kylie Minogue’s ",
            "Roger Federer’s ",
            "Brad Pitt’s ",
            "Mickey Mouse’s ",
            "Simon Cowell’s ",
            "Ludwig Beethoven’s ",
            "Warren Buffett’s ",
            "Bill Gates’s ",
            "Steve Jobs’s ",
            "Vincent van Gogh’s ",
            "Kurt Cobain’s ",
            "Sir Isaac Newton’s ",
            "Andy Warhol’s ",
            "Leonardo Da Vinci’s ",
            "Elvis Presley’s ",
            "John Lennon’s ",
            "Bill Clinton’s ",
            "Tom Cruise’s ",
            "Clint Eastwood’s ",
            "Beyonce’s ",
            "Hilary Clinton’s ",
            "Alfred Hitchcock’s ",
            "Ray Charles’s ",
            "Julia Roberts’s ",
            "Pele’s ",
            "Stephen Hawking’s ",
            "Robin Williams’s ",
            "Tom Hanks’s ",
            "Elizabeth Taylor’s ",
            "Homer Simpson’s ",
            "Mae West’s ",
            "Snoopy’s ",
            "Jim Carrey’s ",
            "Kayne West’s ",
            "Michael J Fox’s ",
            "Pamela Anderson’s ",
            "Steve Martin’s ",
            "Michael Jordan’s ",
            "JK Rowling’s ",
            " Mohammad Ali’s ",
            "Marilyn Monroe’s ",
            "Pablo Picasso’s ",
            "Charles Dickens’s ",
            "Cleopatra’s ",
            "Walt Disney’s ",
            "Abraham Lincoln’s ",
            "William Shakespeare’s ",
            "Martin Luther King’s ",
            "John F Kennedy’s ",
            "Princess Diana’s ",
            "Mother Teresa’s",
            "Thomas Edison’s ",
            "Benjamin Franklin’s ",
            "Neil Armstrong’s ",
            "Napoleon’s ",
            "Michelangelo’s ",
            "Amadeus Mozart’s ",
            "Adolf Hitler’s ",
            "Stanley Kubrik’s ",
            "Queen Elizabeth II’s ",
            "Charles Darwin’s ",
            "Albert Einstein’s ",
            "Henry Ford’s ",
            "Novak Djokovic’s ",
            "Serena Williams’s ",
            "Madonna’s ",
            "Vladimir Putin’s ",
            "Christopher Columbus’s  ",
            "Justin Beiber’s ",
            "George Washington’s  ",
            "Ghandi’s ",
            "Donald Duck’s "
          ];
            preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

            function randGen() {
              return Math.floor(Math.random() * 5);
            }

            function sentence() {
              var rand1 = Math.floor(Math.random() * 4);
              var rand2 = Math.floor(Math.random() * 7);
              var rand3 = Math.floor(Math.random() * 102);
              var rand4 = Math.floor(Math.random() * 228);
              var rand5 = Math.floor(Math.random() * 10);
              var rand6 = Math.floor(Math.random() * 10);
              //                var randCol = [rand1,rand2,rand3,rand4,rand5];
              //                var i = randGen();
              var content = " I " + " " + verbs[rand2] + " " + adverbs[rand3] + " " + adjectives[rand4] + " pencil " ;

              document.getElementById("sentence").innerHTML = content;
            };
            sentence()
            requestAnimationFrame(loop)
            function loop(){

              requestAnimationFrame(loop)
              if (pressed) {
                sentence()
              }
            }

            let pressed = false
            document.addEventListener('mousedown', function(){
              pressed = true
            })
            document.addEventListener('mouseup', function(){
              pressed = false
            })


            document.addEventListener('keydown', function(){
              pressed = true
            })
            document.addEventListener('keyup', function(){
              pressed = false
            })

            document.addEventListener('touchstart', function(){
              pressed = true
            })
            document.addEventListener('touchend', function(){
              pressed = false
            })
