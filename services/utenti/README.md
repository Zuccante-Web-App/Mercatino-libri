# User Microservices

User info:
- Nome
- Cognome
- Username
- Password
- Scuola
- Data di nascita (???)
- Classe
- Indirizzo (facoltativo)

POST /addUser

Request 

{  
    'nome' : < nome >,  
    'congome' : < cognome >,
    .  
    .  
    .  
 }

Response 

{  
    'id' : < new user id >  
}


DELETE /deleteUser:id

Request
{}

Response

{  
    'status' : < 'OK' se con successo , 'NO' se con errori >  
}

PUT /updateUser/:id


Request
{
    '< infomazione da aggiornare >' : < info nuova>
}

Response  
{  
    'status' : < 'OK' se con successo , 'NO' se con errori >  
}

GET /getUserInfo/:id

Request  
{}

Response

{}

porta: 3000