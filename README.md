![](ui/public/Loginpage.PNG)

# GroupProject-FoodBook

Website Name: FoodBook


Objective: An interactive food recipe website where users can document their own recipe with total calories consumption counts. 

Targeted Audience: People who would like to keep track of their custom food recipe and are interested in learning how to cook healthy meals with lower calories and more nutritious ingredients

Main features: 

A calorie Calculator which can estimate a user’s calorie & ingredient intake based on user input (e.g. 100g egg + 100g beef = 400Kcal).

User registration function. Registered users can make daily records and unlock community functions.

Post functions: Allow users to post custom recipes in form of text or photos with total calories auto generated.

User comment function: Allow users to  like and  comment on the recipes shared by other users.

Members: 

Yuqing Yang 

Shangjun Jiang 

Shirali Husan 


# itor 1:

# API 
our mong db mongo "mongodb+srv://shirali:Parishta@foodbook.nuxxm.mongodb.net/User?retryWrites=true&w=majority" conncection is here.
DB is established and ready to go.
The URL for the food calries API: https://developer.edamam.com/food-database-api-docs. 
ready to be viewed. 

*member contribution:* 

Yuqing Yang:   debuged the api server where it was not starting due to the incompatible schemaql and 
the resolvers.

ShangJun Jiang: was able to pin-point the design and how we going forward with our api to the database.


Shirali Husan: reformed and resumed the code from the completed mern stack API to test it in the graphql playground to
test the exiting data from the mongodb. Setting atlas and also connecting to the api and the end result is the api 
was able to function and looking forward to connecting with the ui. 

![Ch02](/readme_images/Ch02.png)


The API was able to start and 

# UI
Starting with the template from the create react app, we had designed two pages for the UI. One sign in page with rount 
functions connections and another page with search bar plus table for calculation. Sign on page has been integrated into
the main page and fully developed.

ShangJun Jiang and Yuqing Yang worked together on the UI component and developed the sign-in page and implemeted some 
webpages that will be updated more in the following iteration.

![Ch03](/readme_images/Ch03.png)

The ui was also functional at the end .

# itor 2:

For this iteration, all the members has participated the work and collaborated if needed for all the functionalities. The work can be only roughly divided into two parts: UI and API.

ShangJun Jiang and Shirali Husan was working on the CURD function of api, deployment of Heroku
Yuqing Yang and ShangJun Jiang was working on the UI main page, including all the functionalities behind such as routers, design, calculations etc.



# API 

We had designed the CRUD function via DAO with basic table structure. The data will persist after user input. and had revamped the API to better suit the data that were coming from the UI.

* The API has gone through a revamp based on the UI data structure. 

* The schema was tailored based on user name email and id. There was also added a subfield as a data table for the food kcal and the quantity. 

* The book API bit difficult to work with therefore, we researched and deployed a newer API which now has connected to the current application.

* Tested API in the local environment and make sure it is working as expected.


* IMPORTANT_NOTE * :

Team has two API right one one from the atlas DB to save user data to make changes. Another is fetched from the  open source API that gives us acurate kcal count based on the food that were passed in. 


*Demo: AS YOU CANN SEE THE BEEF KCAL IS AUTOMATICLLY BEING CALCULATED * 
![Ch04](/readme_images/Ch04.png)
![Ch05](/readme_images/Ch05.png)



# UI

In this iteration, we focused mainly on the main fucntionality of the app. The key achievements are:

* Successfully connected to the external api data source to a search bar, the user will be able to search the ingredients they would like to add and the get the detailed calories of the specific food.

* Functionality of the main table, after the search, the user will be able to add the information retrived from the api to a main table. The table has been designed in a flexsible way, the user can have custome inputs and put the quantitly they would like to input. 

* Calculation function. The user can get the view of the total calories of their input.

* Visual designing. The styling of the main page has been finalized. We designed a navigation bar, search bar and a table using material ui styling. Also we moved the logout button on the right top corner for users to navigete more easily.

![](ui/public/mainpage.PNG)
![Ch06](/readme_images/Ch06.png)
![Ch07](/readme_images/Ch07.png)



Shirali Husan ShangJun Jian : Revamped the API and working with each other to depoy newly innovated API and data strcuter.  Intagreting two API one that ones gives the correct kcal data based on food input and anther api saves user dat to save it on the table.

Yang Yuqing: UI has also been reworked by our team member to compate with API reworked authentification and adding search cabablity. 

# Depoly

We deployed partal function on the heroku site since we had the change the framework of the app. Temporarily we removed the sign in page and will add it back for the next iteration.

