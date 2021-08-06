function validateForm() {
    var gamename = document.getElementById("gamename").value;
    var devname = document.getElementById("devname").value;
    var reldate = document.getElementById("reldate").value;
    var desc = document.getElementById("desc").value;
    var price = document.getElementById("price").value;
    var rating = document.getElementById("rating").value;
    var genre = document.getElementById("genre").value;
    var platformname = document.getElementById("platformname").value;
    var pict = document.getElementById("pict").value;

    var gamenamespan = document.getElementById("gamenamespan");
    var devnamespan = document.getElementById("devnamespan");
    var reldatespan = document.getElementById("reldatespan");
    var descspan = document.getElementById("descspan");
    var pricespan = document.getElementById("pricespan");
    var ratingspan = document.getElementById("ratingspan");
    var genrespan = document.getElementById("genrespan");
    var platformspan = document.getElementById("platformspan");
    var pictspan = document.getElementById("pictspan");


    if ((gamename = "") || (devname == "") || (reldate == "") || (desc == "") || (price == "") || (rating == "") || (platformname == "") || (pict == "")) {
        if (gamename == "") {
            gamenamespan.innerHTML = "Please Enter Your Name";
            return false;
        } else {
            gamenamespan = "";
        } if (devname == "") {
            devnamespan.innerHTML = "Please Enter the Developer";
            return false;
        } else {
            devnamespan = "";
        } if (reldate == "") {
            reldatespan.innerHTML = "Please Enter the Correct Date";
            return false;
        } else {
            reldatespan = "";
        } if (desc == "") {
            descspan.innerHTML = "Please Enter a Small Description";
            return false;
        } else {
            descspan = "";
        } if (price == "") {
            pricespan.innerHTML = "Enter the Price for your Game";
            return false;
        } else {
            pricespan = "";
        } if (rating == "") {
            ratingspan.innerHTML = "Enter the rating";
            return false;
        } else {
            ratingspan = "";
        } if (genre == "") {
            genrespan.innerHTML = "Enter the Genre";
            return false;
        } else {
            genrespan = "";
        } if (platformname == "") {
            platformnamespan.innerHTML = "Enter the Platform for your Game";
            return false;
        } else {
            platformspan = "";
        } if (pict == "") {
            pictspan.innerHTML = "Enter the url of the image";
            return false;
        } else {
            pictspan = "";
        }


    }
    else {
        var newObj = {};
        newObj.title = document.getElementById("gamename").value; //newObj.title = game; from line 2
        //newObj.title = document.getElementById("gamename").value; //newObj.title = game; from line 2
        newObj.developer = document.getElementById("devname").value;
        newObj.releaseDate = document.getElementById("reldate").value;
        newObj.gameDescription = document.getElementById("desc").value;
        newObj.price = document.getElementById("price").value;
        if (document.getElementById("1").checked === true) {
            newObj.rating = document.getElementById("1").value;
        } else if (document.getElementById("2").checked === true) {
            newObj.rating = document.getElementById("2").value;

        } else if (document.getElementById("3").checked === true) {
            newObj.rating = document.getElementById("3").value;

        } else if (document.getElementById("4").checked === true) {
            newObj.rating = document.getElementById("4").value;

        } else if (document.getElementById("5").checked === true) {
            newObj.rating = document.getElementById("5").value;

        }

        if (document.getElementById("Action-Adventure").checked === true) {
            newObj.genre = document.getElementById("Action-Adventure").value;
        } else if (document.getElementById("Sports").checked === true) {
            newObj.genre = document.getElementById("Sports").value;

        } else if (document.getElementById("Platformer").checked === true) {
            newObj.genre = document.getElementById("Platformer").value;

        } else if (document.getElementById("RPG").checked === true) {
            newObj.genre = document.getElementById("RPG").value;

        } else if (document.getElementById("Simulation").checked === true) {
            newObj.genre = document.getElementById("Simulation").value;

        }







        if (document.getElementById("PS4").checked === true) {
            newObj.platform = document.getElementById("PS4").value;
        } else if (document.getElementById("Xbox").checked === true) {
            newObj.platform = document.getElementById("Xbox").value;

        } else if (document.getElementById("PC").checked === true) {
            newObj.platform = document.getElementById("PC").value;

        } else if (document.getElementById("Nintendo Switch").checked === true) {
            newObj.platform = document.getElementById("Nintendo Switch").value;
        }

        newObj.picture = document.getElementById("pict").value;

       
        console.log(newObj);  	// log to console for viewing the data
        alert("Your Awesome New Game Has Been Added to the House of Games!!!!");
        gamesList.push(newObj);

       //var div = document.getElementById("getDiv");
        //div.innerHTML = "Your new game is added to the House of Games! ";


        return true;
    }
    return false;
}

//Objects of games inside of an array
var gamesList = [
    /*Action-Adventure*/

    {
        title: "Assassins Creed Origins",
        developer: "Ubisoft",
        releaseDate: "October 27, 2017",
        gameDescription: "The story follows a Medjay named Bayek, and explores the origins of the centuries-long conflict between the Hidden Ones (forerunners to the Brotherhood of Assassins) who fight for peace by promoting liberty, and The Order of the Ancients (forerunners to the Templar Order) who desire peace through the forced imposition of order.",
        price: "$59.99",
        rating: "4.5 out of 5 ",
        genre: "Action-Adventure",
        platform: "PS4",
        picture: "images/acps4.jpg"
    },
    {
        title: "Assassins Creed Origins",
        developer: "Ubisoft",
        releaseDate: "October 27, 2017",
        gameDescription: "The story follows a Medjay named Bayek, and explores the origins of the centuries-long conflict between the Hidden Ones (forerunners to the Brotherhood of Assassins) who fight for peace by promoting liberty, and The Order of the Ancients (forerunners to the Templar Order) who desire peace through the forced imposition of order.",
        price: "$59.99",
        rating: "4.5 out of 5 ",
        genre: "Action-Adventure",
        platform: "Xbox",
        picture: "images/acxbox.jpg"
    },
    {
        title: "Assassins Creed Origins",
        developer: "Ubisoft",
        releaseDate: "October 27, 2017",
        gameDescription: "The story follows a Medjay named Bayek, and explores the origins of the centuries-long conflict between the Hidden Ones (forerunners to the Brotherhood of Assassins) who fight for peace by promoting liberty, and The Order of the Ancients (forerunners to the Templar Order) who desire peace through the forced imposition of order.",
        price: "$59.99",
        rating: "4.5 out of 5 ",
        genre: "Action-Adventure",
        platform: "PC",
        picture: "images/acpc.jpg"


    },
    {
        title: "Red Dead Redemption 2",
        developer: "Rockstar Games",
        releaseDate: "October 26, 2018",
        gameDescription: "Set in a fictional recreation of the American Old West in 1899, Red Dead Redemption 2 focuses on the life of Arthur Morgan and his position in the notorious Van der Linde gang. The game follows the gang's decline as they are pursued by lawmen, fellow gangs and Pinkerton agents.",
        price: "$59.99",
        rating: "5 out of 5 ",
        genre: "Action-Adventure",
        platform: "PS4",
        picture: "images/rdr2ps4.jpg"

    },
    {
        title: "Red Dead Redemption 2",
        developer: "Rockstar Games",
        releaseDate: "October 26, 2018",
        gameDescription: "Set in a fictional recreation of the American Old West in 1899, Red Dead Redemption 2 focuses on the life of Arthur Morgan and his position in the notorious Van der Linde gang. The game follows the gang's decline as they are pursued by lawmen, fellow gangs and Pinkerton agents.",
        price: "$59.99",
        rating: "5 out of 5 ",
        genre: "Action-Adventure",
        platform: "Xbox",
        picture: "images/rdr2xbox.jpg"

    },

    {
        title: "Red Dead Redemption 2",
        developer: "Rockstar Games",
        releaseDate: "October 26, 2018",
        gameDescription: "Set in a fictional recreation of the American Old West in 1899, Red Dead Redemption 2 focuses on the life of Arthur Morgan and his position in the notorious Van der Linde gang. The game follows the gang's decline as they are pursued by lawmen, fellow gangs and Pinkerton agents.",
        price: "$59.99",
        rating: "5 out of 5 ",
        genre: "Action-Adventure",
        platform: "PC",
        picture: "images/rdr2pc.jpg"

    },

    {
        title: "Batman Arkham Knight",
        developer: "Rocksteady Studios",
        releaseDate: "June 23, 2015",
        gameDescription: "The game's main storyline follows Batman as he confronts Scarecrow, who has launched an attack on Gotham City, causing a citywide evacuation. Scarecrow, with the help of the mysterious Arkham Knight, is also able to unite Batman's greatest foes in an attempt to finally destroy Batman.",
        price: "$20.00",
        rating: "4.4 out of 5 ",
        genre: "Action-Adventure",
        platform: "PS4",
        picture: "images/batmanps4.jpg"

    },

    {
        title: "Batman Arkham Knight",
        developer: "Ubisoft",
        releaseDate: "June 23, 2015",
        gameDescription: "Set in a fictional recreation of the American Old West in 1899, Red Dead Redemption 2 focuses on the life of Arthur Morgan and his position in the notorious Van der Linde gang. The game follows the gang's decline as they are pursued by lawmen, fellow gangs and Pinkerton agents.",
        price: "$20.00",
        rating: "4.4 out of 5 ",
        genre: "Action-Adventure",
        platform: "Xbox",
        picture: "images/batmanxbox.jpg"

    },

    {
        title: "Batman Arkham Knight",
        developer: "Rocksteady Studios",
        releaseDate: "June 23, 2015",
        gameDescription: "Set in a fictional recreation of the American Old West in 1899, Red Dead Redemption 2 focuses on the life of Arthur Morgan and his position in the notorious Van der Linde gang. The game follows the gang's decline as they are pursued by lawmen, fellow gangs and Pinkerton agents.",
        price: "$20.00",
        rating: "4 out of 5 ",
        genre: "Action-Adventure",
        platform: "PC",
        picture: "images/batmanpc.jpg"

    },
    {
        title: "Watch Dogs",
        developer: "Ubisoft",
        releaseDate: "May 27, 2014",
        gameDescription: "The single-player story follows hacker and vigilante Aiden Pearce's quest for revenge after the killing of his niece. ",
        price: "$20.00",
        rating: "4 out of 5 ",
        genre: "Action-Adventure",
        platform: "PS4",
        picture: "images/wdps4.jpg"

    },
    {
        title: "Watch Dogs",
        developer: "Ubisoft",
        releaseDate: "May 27, 2014",
        gameDescription: "The single-player story follows hacker and vigilante Aiden Pearce's quest for revenge after the killing of his niece. ",
        price: "$20.00",
        rating: "4 out of 5 ",
        genre: "Action-Adventure",
        platform: "Xbox",
        picture: "images/wdxbox.jpg"

    },
    {
        title: "Watch Dogs",
        developer: "Ubisoft",
        releaseDate: "May 27, 2014",
        gameDescription: "The single-player story follows hacker and vigilante Aiden Pearce's quest for revenge after the killing of his niece. ",
        price: "$20.00",
        rating: "4 out of 5 ",
        genre: "Action-Adventure",
        platform: "PC",
        picture: "images/wdpc.jpg"

    },
    {
        title: "Rise of the Tomb Raider",
        developer: "Crystal Dynamics",
        releaseDate: "November 10, 2015",
        gameDescription: "Its story follows Lara Croft as she ventures into Siberia in search of the legendary city of Kitezh while battling the paramilitary organization Trinity, which intends to uncover the city's promise of immortality. ",
        price: "$22.69",
        rating: "5 out of 5 ",
        genre: "Action-Adventure",
        platform: "PS4",
        picture: "images/raiderps4.jpg"

    },
    {
        title: "Rise of the Tomb Raider",
        developer: "Crystal Dynamics",
        releaseDate: "November 10, 2015",
        gameDescription: "Its story follows Lara Croft as she ventures into Siberia in search of the legendary city of Kitezh while battling the paramilitary organization Trinity, which intends to uncover the city's promise of immortality. ",
        price: "$22.69",
        rating: "5 out of 5 ",
        genre: "Action-Adventure",
        platform: "Xbox",
        picture: "images/raiderxbox.jpg"

    },
    {
        title: "Rise of the Tomb Raider",
        developer: "Crystal Dynamics",
        releaseDate: "November 10, 2015",
        gameDescription: "Its story follows Lara Croft as she ventures into Siberia in search of the legendary city of Kitezh while battling the paramilitary organization Trinity, which intends to uncover the city's promise of immortality. ",
        price: "$22.69",
        rating: "5 out of 5 ",
        genre: "Action-Adventure",
        platform: "PC",
        picture: "images/raiderpc.jpg"

    },
    /*Sports*/
    {
        title: "NBA 2K21",
        developer: "Visual Concepts",
        releaseDate: "September 4, 2020",
        gameDescription: "It is the 22nd installment in the NBA 2K franchise and the successor to NBA 2K20.  ",
        price: "$39.99",
        rating: "2.5 out of 5 ",
        genre: "Sports",
        platform: "PS4",
        picture: "images/nbaps4.jpg"

    },
    {
        title: "NBA 2K21",
        developer: "Visual Concepts",
        releaseDate: "September 4, 2020",
        gameDescription: "It is the 22nd installment in the NBA 2K franchise and the successor to NBA 2K20.  ",
        price: "$39.99",
        rating: "2.5 out of 5 ",
        genre: "Sports",
        platform: "Xbox",
        picture: "images/nbaxbox.jpg"

    },
    {
        title: "NBA 2K21",
        developer: "Visual Concepts",
        releaseDate: "September 4, 2020",
        gameDescription: "It is the 22nd installment in the NBA 2K franchise and the successor to NBA 2K20.  ",
        price: "$39.99",
        rating: "2.5 out of 5 ",
        genre: "Sports",
        platform: "PC",
        picture: "images/nbapc.jpg"

    },
    {
        title: "NBA 2K21",
        developer: "Visual Concepts",
        releaseDate: "September 4, 2020",
        gameDescription: "It is the 22nd installment in the NBA 2K franchise and the successor to NBA 2K20.  ",
        price: "$39.99",
        rating: "2.5 out of 5 ",
        genre: "Sports",
        platform: "Nintendo Switch",
        picture: "images/nbanintendo.jpg"

    },
    /*Madden*/
    {
        title: "Madden NFL 21",
        developer: "EA",
        releaseDate: "August 28, 2020",
        gameDescription: "Madden NFL 21 is an American football video game based on the National Football League (NFL), developed by EA Tiburon and published by Electronic Arts. It is an installment of the long-running Madden NFL series. ",
        price: "$39.99",
        rating: "3 out of 5 ",
        genre: "Sports",
        platform: "PS4",
        picture: "images/maddenps4.jpg"

    },
    {
        title: "Madden NFL 21",
        developer: "EA",
        releaseDate: "August 28, 2020",
        gameDescription: "Madden NFL 21 is an American football video game based on the National Football League (NFL), developed by EA Tiburon and published by Electronic Arts. It is an installment of the long-running Madden NFL series. ",
        price: "$39.99",
        rating: "3 out of 5 ",
        genre: "Sports",
        platform: "Xbox",
        picture: "images/maddenxbox.jpg"

    },
    {
        title: "Madden NFL 21",
        developer: "EA",
        releaseDate: "August 28, 2020",
        gameDescription: "Madden NFL 21 is an American football video game based on the National Football League (NFL), developed by EA Tiburon and published by Electronic Arts. It is an installment of the long-running Madden NFL series. ",
        price: "$59.99",
        rating: "3 out of 5 ",
        genre: "Sports",
        platform: "PC",
        picture: "images/maddenpc.jpg"

    },
    /*FIFA*/
    {
        title: "FIFA 21",
        developer: "EA",
        releaseDate: "October 6, 2020",
        gameDescription: "FIFA 21 is a football simulation video game published by Electronic Arts as part of the FIFA series. It is the 28th installment in the FIFA series ",
        price: "$59.99",
        rating: "3.5 out of 5 ",
        genre: "Sports",
        platform: "PS4",
        picture: "images/fifaps4.jpg"

    },

    {
        title: "FIFA 21",
        developer: "EA",
        releaseDate: "October 6, 2020",
        gameDescription: "FIFA 21 is a football simulation video game published by Electronic Arts as part of the FIFA series. It is the 28th installment in the FIFA series ",
        price: "$59.99",
        rating: "3.5 out of 5 ",
        genre: "Sports",
        platform: "Xbox",
        picture: "images/fifa xbox.jpg"


    },

    {
        title: "FIFA 21",
        developer: "EA",
        releaseDate: "October 6, 2020",
        gameDescription: "FIFA 21 is a football simulation video game published by Electronic Arts as part of the FIFA series. It is the 28th installment in the FIFA series ",
        price: "$59.99",
        rating: "3.5 out of 5 ",
        genre: "Sports",
        platform: "PC",
        picture: "images/fifapc.jpg"
    },

    {
        title: "FIFA 21",
        developer: "EA",
        releaseDate: "October 6, 2020",
        gameDescription: "FIFA 21 is a football simulation video game published by Electronic Arts as part of the FIFA series. It is the 28th installment in the FIFA series ",
        price: "$49.99",
        rating: "2.6 out of 5 ",
        genre: "Sports",
        platform: "Nintendo Switch",
        picture: "images/fifanintendo.jpg"

    },
    /*PGA*/
    {
        title: "PGA Tour 2K21",
        developer: "Unity",
        releaseDate: "August 21, 2020",
        gameDescription: "PGA Tour 2K21 is a sports video game developed by HB Studios and published by 2K Sports for Google Stadia, Microsoft Windows, Nintendo Switch, PlayStation 4 and Xbox One. It's a continuation of The Golf Club franchise integrated with 2K Sports and the second game in the franchise to include a PGA Tour license (effectively succeeding EA Sports' Tiger Woods PGA Tour franchise).",
        price: "$49.99",
        rating: "3 out of 5",
        genre: "Sports",
        platform: "PS4",
        picture: "images/pgaps4.jpg"

    },
    {
        title: "PGA Tour 2K21",
        developer: "Unity",
        releaseDate: "August 21, 2020",
        gameDescription: "PGA Tour 2K21 is a sports video game developed by HB Studios and published by 2K Sports for Google Stadia, Microsoft Windows, Nintendo Switch, PlayStation 4 and Xbox One. It's a continuation of The Golf Club franchise integrated with 2K Sports and the second game in the franchise to include a PGA Tour license (effectively succeeding EA Sports' Tiger Woods PGA Tour franchise).",
        price: "$49.99",
        rating: "3 out of 5",
        genre: "Sports",
        platform: "Xbox",
        picture: "images/pgaxbox.jpg"

    },
    {
        title: "PGA Tour 2K21",
        developer: "Unity",
        releaseDate: "August 21, 2020",
        gameDescription: "PGA Tour 2K21 is a sports video game developed by HB Studios and published by 2K Sports for Google Stadia, Microsoft Windows, Nintendo Switch, PlayStation 4 and Xbox One. It's a continuation of The Golf Club franchise integrated with 2K Sports and the second game in the franchise to include a PGA Tour license (effectively succeeding EA Sports' Tiger Woods PGA Tour franchise).",
        price: "$49.99",
        rating: "3 out of 5",
        genre: "Sports",
        platform: "PC",
        picture: "images/pgapc.jpg"

    },

    {
        title: "PGA Tour 2K21",
        developer: "Unity",
        releaseDate: "August 21, 2020",
        gameDescription: "PGA Tour 2K21 is a sports video game developed by HB Studios and published by 2K Sports for Google Stadia, Microsoft Windows, Nintendo Switch, PlayStation 4 and Xbox One. It's a continuation of The Golf Club franchise integrated with 2K Sports and the second game in the franchise to include a PGA Tour license (effectively succeeding EA Sports' Tiger Woods PGA Tour franchise).",
        price: "$49.99",
        rating: "3 out of 5",
        genre: "Sports",
        platform: "Nintendo Switch",
        picture: "images/pganintendo.jpg"

    },
    /*UFC*/
    {
        title: "EA Sports UFC 4 ",
        developer: "EA Vancouver",
        releaseDate: "August 14, 2020",
        gameDescription: "EA Sports UFC 4 is a mixed martial arts fighting video game developed by EA Vancouver and published by EA Sports. Serving as the sequel to EA Sports UFC 3 (2018)",
        price: "$59.99",
        rating: "4 out of 5",
        genre: "Sports",
        platform: "PS4",
        picture: "images/ufcps4.jpg"

    },
    {
        title: "EA Sports UFC 4 ",
        developer: "EA Vancouver",
        releaseDate: "August 14, 2020",
        gameDescription: "EA Sports UFC 4 is a mixed martial arts fighting video game developed by EA Vancouver and published by EA Sports. Serving as the sequel to EA Sports UFC 3 (2018)",
        price: "$59.99",
        rating: "4 out of 5",
        genre: "Sports",
        platform: "Xbox",
        picture: "images/ufcxbox.jpg"

    },

    /*Platformer*/
    {
        title: "Super Mario 64 ",
        developer: "Nintendo",
        releaseDate: "June 23, 1996",
        gameDescription: "Super Mario 64 is a 1996 platform game for the Nintendo 64 and the first in the Super Mario series to feature 3D gameplay. As Mario, the player explores Princess Peach's castle and must rescue her from Bowser",
        price: "$64.99",
        rating: "4.5 out of 5",
        genre: "Platformer",
        platform: "Nintendo Switch",
        picture: "images/supermarionintendo.jpg"

    },
    {
        title: "Terraria ",
        developer: "Re-Logic, Pipeworks Studio, 505 Mobile S.r.l, Codeglue, Engine Software",
        releaseDate: "May 16, 2011",
        gameDescription: "Terraria is a Platformer game developed by Re-Logic. The game features exploration, crafting, building, painting, and combat with a variety of creatures in a procedurally generated 2D world.",
        price: "$10.00",
        rating: "5 out of 5",
        genre: "Platformer",
        platform: "PS4",
        picture: "images/terrariaps4.jpg"

    },

    {
        title: "Terraria ",
        developer: "Re-Logic, Pipeworks Studio, 505 Mobile S.r.l, Codeglue, Engine Software",
        releaseDate: "May 16, 2011",
        gameDescription: "Terraria is a Platformer game developed by Re-Logic. The game features exploration, crafting, building, painting, and combat with a variety of creatures in a procedurally generated 2D world.",
        price: "$10.00",
        rating: "5 out of 5",
        genre: "Platformer",
        platform: "Xbox",
        picture: "images/terrariaxbox.jpg"

    },
    {
        title: "Terraria ",
        developer: "Re-Logic, Pipeworks Studio, 505 Mobile S.r.l, Codeglue, Engine Software",
        releaseDate: "May 16, 2011",
        gameDescription: "Terraria is a Platformer game developed by Re-Logic. The game features exploration, crafting, building, painting, and combat with a variety of creatures in a procedurally generated 2D world.",
        price: "$10.00",
        rating: "5 out of 5",
        genre: "Platformer",
        platform: "PC",
        picture: "images/terrariapc.jpg"

    },
    {
        title: "Terraria ",
        developer: "Re-Logic, Pipeworks Studio, 505 Mobile S.r.l, Codeglue, Engine Software",
        releaseDate: "May 16, 2011",
        gameDescription: "Terraria is a Platformer game developed by Re-Logic. The game features exploration, crafting, building, painting, and combat with a variety of creatures in a procedurally generated 2D world.",
        price: "$10.00",
        rating: "5 out of 5",
        genre: "Platformer",
        platform: "Nintendo Switch",
        picture: "images/terrarianintendo.jpg"

    },
    {
        title: "Yoshi's Island: Super Mario Advance 3 ",
        developer: "Nintendo",
        releaseDate: "September 20, 2002",
        gameDescription: "Yoshi's Island: Super Mario Advance 3 is the Game Boy Advance remake of Super Mario World 2: Yoshi's Island. This games was released in 2002 and is notable for its various changes.",
        price: "$15.00",
        rating: "4.7 out of 5",
        genre: "Platformer",
        platform: "Nintendo Switch",
        picture: "images/yoshinintendo.jpg"

    },
    /*Minecraft*/
    {
        title: "Minecraft ",
        developer: "Mojang Studios, Xbox Game Studios, Telltale Games, 4J Studios, Double Eleven, Other Ocean Interactive",
        releaseDate: "May 17, 2009",
        gameDescription: "In Minecraft, players explore a blocky, procedurally-generated 3D world with infinite terrain, and may discover and extract raw materials, craft tools and items, and build structures or earthworks.",
        price: "$20.00",
        rating: "5 out of 5",
        genre: "Platformer",
        platform: "PS4",
        picture: "images/minecraftps4.jpg"


    },
    {
        title: "Minecraft ",
        developer: "Mojang Studios, Xbox Game Studios, Telltale Games, 4J Studios, Double Eleven, Other Ocean Interactive",
        releaseDate: "May 17, 2009",
        gameDescription: "In Minecraft, players explore a blocky, procedurally-generated 3D world with infinite terrain, and may discover and extract raw materials, craft tools and items, and build structures or earthworks.",
        price: "$20.00",
        rating: "5 out of 5",
        genre: "Platformer",
        platform: "Xbox",
        picture: "images/minecraftxbox.jpg"

    },
    {
        title: "Minecraft ",
        developer: "Mojang Studios, Xbox Game Studios, Telltale Games, 4J Studios, Double Eleven, Other Ocean Interactive",
        releaseDate: "May 17, 2009",
        gameDescription: "In Minecraft, players explore a blocky, procedurally-generated 3D world with infinite terrain, and may discover and extract raw materials, craft tools and items, and build structures or earthworks.",
        price: "$20.00",
        rating: "5 out of 5",
        genre: "Platformer",
        platform: "PC",
        picture: "images/minecraftpc.jpg"

    },
    {
        title: "Minecraft ",
        developer: "Mojang Studios, Xbox Game Studios, Telltale Games, 4J Studios, Double Eleven, Other Ocean Interactive",
        releaseDate: "May 17, 2009",
        gameDescription: "In Minecraft, players explore a blocky, procedurally-generated 3D world with infinite terrain, and may discover and extract raw materials, craft tools and items, and build structures or earthworks.",
        price: "$20.00",
        rating: "5 out of 5",
        genre: "Platformer",
        platform: "Nintendo Switch",
        picture: "images/minecraftnintendo.jpg"

    },
    {
        title: "Super Mario Odyssey ",
        developer: "Nintendo EPD",
        releaseDate: "October 17, 2017",
        gameDescription: "An entry in the Super Mario series, it follows Mario and Cappy, a sentient hat that allows Mario to control other characters and objects, as they journey across various worlds to save Princess Peach from his nemesis Bowser,",
        price: "$25.00",
        rating: "4.5 out of 5",
        genre: "Platformer",
        platform: "Nintendo Switch",
        picture: "images/marioodysseynintendo.jpg"

    },

    /*RPG*/

    {
        title: "The Elder Scrolls V: Skyrim ",
        developer: "Bethesda Game Studios",
        releaseDate: "October 28, 2016",
        gameDescription: "The game's main story revolves around the player's character, the Dragonborn, on their quest to defeat Alduin the World-Eater, a dragon who is prophesied to destroy the world. The game is set 200 years after the events of Oblivion and takes place in Skyrim, the northernmost province of Tamriel. Over the course of the game, the player completes quests and develops the character by improving skills. The game continues the open-world tradition of its predecessors by allowing the player to travel anywhere in the game world at any time, and to ignore or postpone the main storyline indefinitely.",
        price: "$39.99",
        rating: "4 out of 5",
        genre: "RPG",
        platform: "PS4",
        picture: "images/skyrimps4.jpg"


    },
    {
        title: "The Elder Scrolls V: Skyrim ",
        developer: "Bethesda Game Studios",
        releaseDate: "October 28, 2016",
        gameDescription: "The game's main story revolves around the player's character, the Dragonborn, on their quest to defeat Alduin the World-Eater, a dragon who is prophesied to destroy the world. The game is set 200 years after the events of Oblivion and takes place in Skyrim, the northernmost province of Tamriel. Over the course of the game, the player completes quests and develops the character by improving skills. The game continues the open-world tradition of its predecessors by allowing the player to travel anywhere in the game world at any time, and to ignore or postpone the main storyline indefinitely.",
        price: "$39.99",
        rating: "4 out of 5",
        genre: "RPG",
        platform: "Xbox",
        picture: "images/skyrimxbox.jpg"

    },
    {
        title: "The Elder Scrolls V: Skyrim ",
        developer: "Bethesda Game Studios",
        releaseDate: "October 28, 2016",
        gameDescription: "The game's main story revolves around the player's character, the Dragonborn, on their quest to defeat Alduin the World-Eater, a dragon who is prophesied to destroy the world. The game is set 200 years after the events of Oblivion and takes place in Skyrim, the northernmost province of Tamriel. Over the course of the game, the player completes quests and develops the character by improving skills. The game continues the open-world tradition of its predecessors by allowing the player to travel anywhere in the game world at any time, and to ignore or postpone the main storyline indefinitely.",
        price: "$39.99",
        rating: "4 out of 5",
        genre: "RPG",
        platform: "PC",
        picture: "images/skyrimpc.jpg"

    },
    {
        title: "The Elder Scrolls V: Skyrim ",
        developer: "Bethesda Game Studios",
        releaseDate: "November 17, 2017",
        gameDescription: "The game's main story revolves around the player's character, the Dragonborn, on their quest to defeat Alduin the World-Eater, a dragon who is prophesied to destroy the world. The game is set 200 years after the events of Oblivion and takes place in Skyrim, the northernmost province of Tamriel. Over the course of the game, the player completes quests and develops the character by improving skills. The game continues the open-world tradition of its predecessors by allowing the player to travel anywhere in the game world at any time, and to ignore or postpone the main storyline indefinitely.",
        price: "$39.99",
        rating: "4 out of 5",
        genre: "RPG",
        platform: "Nintendo Switch",
        picture: "images/skyrimnintendo.jpg"

    },
    /*witcher 3*/
    {
        title: "Witcher 3",
        developer: "CD  Projekt, CD Projekt RED",
        releaseDate: "May 18, 2015",
        gameDescription: "The game takes place in a fictional fantasy world based on Slavonic mythology. Players control protagonist Geralt of Rivia, a monster slayer for hire known as a Witcher who is looking for his missing adopted daughter on the run from the Wild Hunt, an otherworldly force determined to capture her.",
        price: "$20.00",
        rating: "4.9 out of 5",
        genre: "RPG",
        platform: "PS4",
        picture: "images/witcherps4.jpg"

    },

    {
        title: "Witcher 3",
        developer: "CD  Projekt, CD Projekt RED",
        releaseDate: "May 18, 2015",
        gameDescription: "The game takes place in a fictional fantasy world based on Slavonic mythology. Players control protagonist Geralt of Rivia, a monster slayer for hire known as a Witcher who is looking for his missing adopted daughter on the run from the Wild Hunt, an otherworldly force determined to capture her.",
        price: "$20.00",
        rating: "4.9 out of 5",
        genre: "RPG",
        platform: "Xbox",
        picture: "images/witcherxbox.jpg"

    },
    {
        title: "Witcher 3",
        developer: "CD  Projekt, CD Projekt RED",
        releaseDate: "May 18, 2015",
        gameDescription: "The game takes place in a fictional fantasy world based on Slavonic mythology. Players control protagonist Geralt of Rivia, a monster slayer for hire known as a Witcher who is looking for his missing adopted daughter on the run from the Wild Hunt, an otherworldly force determined to capture her.",
        price: "$20.00",
        rating: "4.9 out of 5",
        genre: "RPG",
        platform: "PC",
        picture: "images/witcherpc.jpg"

    },
    {
        title: "Witcher 3",
        developer: "CD  Projekt, CD Projekt RED",
        releaseDate: "October 15, 2019",
        gameDescription: "The game takes place in a fictional fantasy world based on Slavonic mythology. Players control protagonist Geralt of Rivia, a monster slayer for hire known as a Witcher who is looking for his missing adopted daughter on the run from the Wild Hunt, an otherworldly force determined to capture her.",
        price: "$20.00",
        rating: "4.9 out of 5",
        genre: "RPG",
        platform: "Nintendo Switch",
        picture: "images/witchernintendo.jpg"

    },


    {
        title: "Dark Souls",
        developer: "fromSoftware",
        releaseDate: "September 22, 2011",
        gameDescription: "Dark Souls takes place in the fictional kingdom of Lordran, where players assume the role of a cursed undead character who begins a pilgrimage to discover the fate of their kind.",
        price: "$30.00",
        rating: "4.7 out of 5",
        genre: "RPG",
        platform: "PS4",
        picture: "images/darkps4.jpg"

    },

    {
        title: "Dark Souls",
        developer: "fromSoftware",
        releaseDate: "September 22, 2011",
        gameDescription: "Dark Souls takes place in the fictional kingdom of Lordran, where players assume the role of a cursed undead character who begins a pilgrimage to discover the fate of their kind.",
        price: "$30.00",
        rating: "4.7 out of 5",
        genre: "RPG",
        platform: "Xbox",
        picture: "images/darkxbox.jpg"

    },
    {
        title: "Dark Souls",
        developer: "fromSoftware",
        releaseDate: "September 22, 2011",
        gameDescription: "Dark Souls takes place in the fictional kingdom of Lordran, where players assume the role of a cursed undead character who begins a pilgrimage to discover the fate of their kind.",
        price: "$30.00",
        rating: "4.7 out of 5",
        genre: "RPG",
        platform: "PC",
        picture: "images/darkpc.jpg"

    },
    {
        title: "Dark Souls",
        developer: "fromSoftware",
        releaseDate: "September 22, 2011",
        gameDescription: "Dark Souls takes place in the fictional kingdom of Lordran, where players assume the role of a cursed undead character who begins a pilgrimage to discover the fate of their kind.",
        price: "$30.00",
        rating: "4.7 out of 5",
        genre: "RPG",
        platform: "Nintendo Switch",
        picture: "images/darknintendo.jpg"

    },


    {
        title: "World of Warcraft",
        developer: "Blizzard Entertainment",
        releaseDate: "November 23, 2004",
        gameDescription: "World of Warcraft (WoW) is a massively multiplayer online role-playing game (MMORPG) released in 2004 by Blizzard Entertainment. It is the fourth released game set in the Warcraft fantasy universe.",
        price: "$15.00",
        rating: "3.9 out of 5",
        genre: "RPG",
        platform: "PC",
        picture: "images/wowpc.jpg"


    },

    {
        title: "Fallout 76",
        developer: "Bethesda Game Studios",
        releaseDate: "November 14, 2018",
        gameDescription: "Fallout 76 is Bethesda Game Studios's first multiplayer game; players explore the open world, which has been torn apart by nuclear war, with others.  ",
        price: "$20.00",
        rating: "3 out of 5",
        genre: "RPG",
        platform: "PS4",
        picture: "images/falloutps4.jpg"
    },

    {
        title: "Fallout 76",
        developer: "Bethesda Game Studios",
        releaseDate: "November 14, 2018",
        gameDescription: "Fallout 76 is Bethesda Game Studios's first multiplayer game; players explore the open world, which has been torn apart by nuclear war, with others.  ",
        price: "$20.00",
        rating: "3 out of 5",
        genre: "RPG",
        platform: "Xbox",
        picture: "images/falloutxbox.jpg"

    },
    {
        title: "Fallout 76",
        developer: "Bethesda Game Studios",
        releaseDate: "November 14, 2018",
        gameDescription: "Fallout 76 is Bethesda Game Studios's first multiplayer game; players explore the open world, which has been torn apart by nuclear war, with others.  ",
        price: "$20.00",
        rating: "3 out of 5",
        genre: "RPG",
        platform: "PC",
        picture: "images/falloutpc.jpg"

    },

    /*Simulation*/

    {
        title: "Microsoft Flight Simulator",
        developer: "Asobo Studio",
        releaseDate: "August 18, 2018",
        gameDescription: "Microsoft Flight Simulator is the next generation of one of the most beloved simulation franchises. From light planes to wide-body jets, fly highly detailed and stunning aircraft in an incredibly realistic world. Create your flight plan and fly anywhere on the planet. Enjoy flying day or night and face realistic, challenging weather conditions.  ",
        price: "$59.99",
        rating: "3.5 out of 5",
        genre: "Simulation",
        platform: "PC",
        picture: "images/flightpc.jpg"

    },

    {
        title: "Microsoft Flight Simulator",
        developer: "Asobo Studio",
        releaseDate: "August 18, 2018",
        gameDescription: "Microsoft Flight Simulator is the next generation of one of the most beloved simulation franchises. From light planes to wide-body jets, fly highly detailed and stunning aircraft in an incredibly realistic world. Create your flight plan and fly anywhere on the planet. Enjoy flying day or night and face realistic, challenging weather conditions.  ",
        price: "$59.99",
        rating: "3.5 out of 5",
        genre: "Simulation",
        platform: "Xbox",
        picture: "images/flightxbox.jpg"

    },

    {
        title: "Sims 4",
        developer: "Macis, The Sims Studio",
        releaseDate: "November 14, 2017",
        gameDescription: "The Sims 4 is a life simulation game, similar to its predecessors. Players create a Sim character and control their life to explore different personalities which change the way the game plays out. Sims can multitask. Sims' moodlets change the gameplay by influencing the Sims' emotional state, introducing new interaction options.  ",
        price: "$9.99",
        rating: "4.5 out of 5",
        genre: "Simulation",
        platform: "PS4",
        picture: "images/sims4ps4.jpg"

    },


    {
        title: "Sims 4",
        developer: "Macis, The Sims Studio",
        releaseDate: "November 14, 2017",
        gameDescription: "The Sims 4 is a life simulation game, similar to its predecessors. Players create a Sim character and control their life to explore different personalities which change the way the game plays out. Sims can multitask. Sims' moodlets change the gameplay by influencing the Sims' emotional state, introducing new interaction options.  ",
        price: "$9.99",
        rating: "4.5 out of 5",
        genre: "Simulation",
        platform: "Xbox",
        picture: "images/sims4xbox.jpg"

    },
    {
        title: "Sims 4",
        developer: "Macis, The Sims Studio",
        releaseDate: "September 2, 2014",
        gameDescription: "The Sims 4 is a life simulation game, similar to its predecessors. Players create a Sim character and control their life to explore different personalities which change the way the game plays out. Sims can multitask. Sims' moodlets change the gameplay by influencing the Sims' emotional state, introducing new interaction options.  ",
        price: "$9.99",
        rating: "4.5 out of 5",
        genre: "Simulation",
        platform: "PC",
        picture: "images/sims4pc.jpg"

    },

    {
        title: "Farming Simulator 19",
        developer: "GIANTS Software",
        releaseDate: "November 19, 2018",
        gameDescription: "Farming Simulator 19 is the deepest, most complete farming simulator ever as the multimillion-selling franchise takes a giant leap forward with a complete overhaul of its graphics engine that provides the most striking and immersive visuals to date.  ",
        price: "$19.99",
        rating: "4.5 out of 5",
        genre: "Simulation",
        platform: "PS4",
        picture: "images/fs19ps4.jpg"

    },

    {
        title: "Farming Simulator 19",
        developer: "GIANTS Software",
        releaseDate: "November 19, 2018",
        gameDescription: "Farming Simulator 19 is the deepest, most complete farming simulator ever as the multimillion-selling franchise takes a giant leap forward with a complete overhaul of its graphics engine that provides the most striking and immersive visuals to date.  ",
        price: "$19.99",
        rating: "4.5 out of 5",
        genre: "Simulation",
        platform: "Xbox",
        picture: "images/fs19xbox.jpg"

    },

    {
        title: "Farming Simulator 19",
        developer: "GIANTS Software",
        releaseDate: "November 19, 2018",
        gameDescription: "Farming Simulator 19 is the deepest, most complete farming simulator ever as the multimillion-selling franchise takes a giant leap forward with a complete overhaul of its graphics engine that provides the most striking and immersive visuals to date.  ",
        price: "$19.99",
        rating: "4.5 out of 5",
        genre: "Simulation",
        platform: "PC",
        picture: "images/fs19pc.jpg"

    },

    {
        title: "Star Wars: Squadrons",
        developer: "Nintendo, Nintendo Entertainment Planning & Development",
        releaseDate: "October 2, 2020",
        gameDescription: "In New Horizons, the player assumes the role of a customizable character who moves to a deserted island after purchasing a package from Tom Nook, a tanuki character who has appeared in every entry in the Animal Crossing series. Taking place in real-time, the player can explore the island in a nonlinear fashion, gathering and crafting items, catching insects and fish, and developing the island into a community of anthropomorphic animals.  ",
        price: "$59.99",
        rating: "4 out of 5",
        genre: "Simulation",
        platform: "PS4",
        picture: "images/starwarsps4.jpg"

    },


    {
        title: "Star Wars: Squadrons",
        developer: "Nintendo, Nintendo Entertainment Planning & Development",
        releaseDate: "October 2, 2020",
        gameDescription: "In New Horizons, the player assumes the role of a customizable character who moves to a deserted island after purchasing a package from Tom Nook, a tanuki character who has appeared in every entry in the Animal Crossing series. Taking place in real-time, the player can explore the island in a nonlinear fashion, gathering and crafting items, catching insects and fish, and developing the island into a community of anthropomorphic animals.  ",
        price: "$59.99",
        rating: "4 out of 5",
        genre: "Simulation",
        platform: "Xbox",
        picture: "images/starwarsxbox.jpg"

    },
    {
        title: "Star Wars: Squadrons",
        developer: "Nintendo, Nintendo Entertainment Planning & Development",
        releaseDate: "October 2, 2020",
        gameDescription: "Star Wars: Squadrons is a space combat game, played from a first-person perspective. Players take control of starfighters from either the Galactic Empire and the New Republic navy. In these ships, they can utilise the movement of power between the ship's functions of weaponry, shields and engines to defeat their opponents in combat.  ",
        price: "$59.99",
        rating: "4 out of 5",
        genre: "Simulation",
        platform: "PC",
        picture: "images/starwarspc.jpg"

    }


];
//looked on youtube to see how the show/hide was done
//does the show/hide in the form
function showHide() {
    var checkbox = document.getElementById("hide");
    var form = document.getElementById('form');
    if (checkbox.checked) {
        form.style.display = "block";
    }
    else {
        form.style.display = "none";
    }
}

//looked on google especially w3schools
//change listner applied to console, genre and price
window.onload = function () {

    document.getElementById("pickConsole").onchange = changeListener;
    document.getElementById("pickGenre").onchange = changeListener;
    document.getElementById("gamePrice").onchange = changeListener;


    function changeListener() {
        var gamingConsole = document.getElementById("pickConsole").value;
        var gameGenre = document.getElementById("pickGenre").value;
        var gamePrice = document.getElementById("gamePrice").value;

        loadConsoleGames(gamingConsole, gameGenre, gamePrice);
    }


    //function for filtering platform, genre, price
    function loadConsoleGames(inputPlatform, gameGenre, gamePrice) {
        var displayArea = document.getElementById("displayArea");


        var gameSection = document.getElementById("gameSection");
        displayArea.innerHTML = "";
        gameSection.innerHTML = "";

        for (var i = 0; i < gamesList.length; i++) {
            //platform filter
            if (inputPlatform == "All" || gamesList[i].platform.indexOf(inputPlatform) != -1) {
                //genre filter
                if (gameGenre == "All" || gamesList[i].genre.indexOf(gameGenre) != -1) {
                    var low;
                    if (gamePrice != "All") {
                        //set up high and low
                        var comma = gamePrice.indexOf(",");
                        low = parseFloat(gamePrice.substring(0, comma));
                        high = parseFloat(gamePrice.substring(comma + 1));
                    }
                    //price filter
                    if (gamePrice == "All" || (parseFloat(gamesList[i].price.substring(1)) >= low && parseFloat(gamesList[i].price.substring(1)) <= high)) {


                        //adding the buttons
                        var Info = document.createElement("button");
                        Info.setAttribute("id", "btn" + i);
                        Info.setAttribute("name", "btn" + i);
                        Info.setAttribute("type", "button");
                        Info.textContent = "More Information";


                        //looked on w3schools and other resources to make an event where the user can click on the button where the game will be displayed sepecifally where the information was shown
                        Info.addEventListener("click", function () {
                            var info = this.id.replace("btn", "");
                            var gameSection = document.getElementById("gameSection");
                            gameSection.innerHTML = "";


                            //closing the button info
                            var infoClose = document.createElement("button");
                            infoClose.setAttribute("id", "btn" + i);
                            infoClose.setAttribute("name", "btn" + i);
                            infoClose.textContent = "Close Info";
                            infoClose.addEventListener("click", function () {
                                document.getElementById("gameSection").style.visibility = "hidden";
                                document.getElementById("displayArea").style.visibility = "visible";

                            });

                            //adding the more information 
                            document.getElementById("displayArea").style.visibility = "hidden";
                            document.getElementById("gameSection").style.visibility = "hidden";
                            text = document.createElement("x");
                            picGameSection = document.createElement("img");
                            picGameSection.setAttribute("src", gamesList[info].picture);
                            picGameSection.setAttribute("width", 175);
                            picGameSection.setAttribute("height", 200);
                            text.innerHTML = "<br><b>Title:  </b><br>" + gamesList[info].title + "<br><br><b>Price:  </b>" + gamesList[info].price + "<b><br><br><br>" + "<br><br><b>Developer:  </b>" + gamesList[info].developer + "<br><br><b>Release Date:  </b>" + gamesList[info].releaseDate + "<br><br><b>Description:  </b><br>" + gamesList[info].gameDescription;
                            document.getElementById("gameSection").style.visibility = "visible";
                            gameSection.appendChild(text);
                            gameSection.appendChild(picGameSection);

                            gameSection.appendChild(infoClose);

                            gameSection.appendChild(lineBreak);


                        });
                        //seperate the button from the image
                        lineBreak = document.createElement("p");
                        lineBreak.setAttribute("font-size", "85px");
                        lineBreak.setAttribute("float", "right");
                        lineBreak.innerHTML = "";

                        //image 
                        pic = document.createElement("img");
                        pic.setAttribute("src", gamesList[i].picture);
                        pic.setAttribute("width", 175);
                        pic.setAttribute("height", 200);

                        text1 = document.createElement("p");
                        text1.innerHTML = "<br><br><b>Title:  </b>" + gamesList[i].title + "<br><br><b>Price:  </b>" + gamesList[i].price + "<b><br><br><br>";

                        document.getElementById("displayArea").style.visibility = "visible";

                        displayArea.appendChild(text1);
                        displayArea.appendChild(Info);
                        displayArea.appendChild(lineBreak);
                        displayArea.appendChild(pic);


                    }
                }


            }


        }

    }

};






