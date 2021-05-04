# Charlie-Arboleda-Project2

Day 1
I decided to create most of the pages like index show edit new and just have plain h1 with the heading title.

Day 2
After more thought i decided i wanted to include user Authentication. I decided to make a controller folder and make a controller for the user and to item controller.

Day 3
Create items and make them appear on my index page. Once i did that i began to work on users and making them appear in the database after i attempted to sign up and then login.
I ran into several issues. One of my biggest error was currentUser undefined. After a few times of checking my users/new.ejs i saw that i misspelled the word action in forms. in all my pages i mispelled action. Once i corrected that it wasa smooth sailing.

Day 4
I then decided to make that page so that you cannot access the site without signing up or signing in. The page is also designed to only show the items that are currently assigned to that user that is logged in. Issues i began running into was figuring out how i can get the items created to only display on that user created.

Day 5
i began to remember that in the tweet markdown we did in class we used a find method to find all tweets by location california. So i said to myself i need to make it so that when you are creating an item i can give it a id by the username. Originally i had createdby: in my schema. The createdby also in my item.find i had to define my code there to make it so that req.session.currentUsername.username.
The problem i had ran into was i orignially made my schema for createdby unique and created two items. By doing that and making it unique when ever i then try to create a item and add the username into the createdby it was being blocked by the first itme i made manually with the schema. I had to remove the data and then create items again. It worked really well.

Day 6
Create items and css style.
