**Link to the app:

https://vocab-cards-frontend.herokuapp.com/

**Description:

This app is designed to help Chinese learners to master beginning level vocabularies through memorization and self-checking by viewing the vocab cards.

**Technologies used:

Backend: postgresql, flask, python

Frontend: react, javascript, node js, bootstrap, css

**A list of installation steps for the app itself and any dependencies:

Backend:
install all packages in this file: python3 -m pip3 install -r requirements.txt

Frontend:
run below commands in the terminal:
 `npm i` 
 `npm i react-router-dom`


**User Story:

as a user, I want to be able to register/login so I will only see the cards&card status for me

as a user, I want to be able to delete or add new cards based on my current language skill

as a user, I want to be able to restore the card status just in case I want to review the cards multiple times

**Initial Wireframes:

landing page

![2022-11-01_20-13-23](https://user-images.githubusercontent.com/105821806/204661800-bd07e434-47fe-4bc6-9ec8-a3f9b2da87ab.png)

login/register

![2022-11-01_20-22-07](https://user-images.githubusercontent.com/105821806/204661840-c9d3dd86-f829-4987-a13c-a953f2a8fe2f.png)

Main page once login

User can select any number (which indicates # of cards in the set) and click on 'Check', it will direct them to cards; Once you are done with a set of cards, the number will indicate how many of the cards you don't remember. Restore will erase your record.
![2022-11-01_20-28-48](https://user-images.githubusercontent.com/105821806/204661878-7fcf8101-cc9e-41f3-a5fd-9166db35f77c.png)

Cards page: each card will be displayed and user will be asked if they remember them or not; they can also delete the card permanently if they think they already mastered the word
![2022-11-01_20-34-44](https://user-images.githubusercontent.com/105821806/204661902-3270f579-0ee7-451b-9fd8-59304e88a1d1.png)


Add a new card:
![2022-11-01_20-37-56](https://user-images.githubusercontent.com/105821806/204661923-ea6dacb1-a3f2-446c-8a3e-d8e469058018.png)



**Data Model

User Model:

user_id: INTEGER PRIMARY KEY

email: VARCHAR

password: VARCHAR

first_name: VARCHAR

last_name: VARCHAR

Vocabulary Model:

vocab_id: INTEGER PRIMARY KEY

vocab_chinese: VARCHAR

vocab_english: VARCHAR

category: VARCHAR



**Future Improvements:

include API connection and levels of difficulties. 
