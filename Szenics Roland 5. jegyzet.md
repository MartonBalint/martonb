# 5. Jegyzet | Zentyal telepítése és konfigurulása

## Zentyal telepítése
A virtuális gépünkhöz adjunk hozzá két hálókártyát, az egyik NatNetwork, a másik Internal legyen!  
A telepítése ugyanaz mint az **Ubuntu** rendszeré. Miután végzett a telepítő, indítsuk újra a virtuális gépet majd nyissuk meg a **Zentyal Administration**-t.   
![Zentyal Administration](https://gist.github.com/user-attachments/assets/672b4b03-11e6-494b-befe-72879d7d31ad)

Ha mindent jól csináltunk egy ilyen oldal fogad minket:  
![security risk](https://gist.github.com/user-attachments/assets/bb9bd195-9141-4946-afdc-3268d77be4da)
Itt menjünk rá az "Accept the Risk and Continue"-ra!  

Majd jelentkezzünk be!  
![Zentyal oldala](https://gist.github.com/user-attachments/assets/fde25a9d-5e27-4640-9592-55a815e4868f)

Adjuk meg a felhasználónevünket és jelszavunkat amit a telepítésnél megadtunk.

## Zentyal Konfigurálása
Válasszuk ki az alábbi ábrán lévő elemeket!
![csomagok](https://gist.github.com/user-attachments/assets/24d3730f-9745-4c43-841a-283b77f598d6) 
Menjünk az **Install**-ra és várjuk meg amíg letölt.  
Ha sikkerrel jártunk, akkor csak kövessük a képen látható uttasításokat!  
![hálozat](https://gist.github.com/user-attachments/assets/0f37300e-3254-4f15-8b94-e1485015a8db)  
![ipk](https://gist.github.com/user-attachments/assets/2fa1d7ed-460c-459d-a520-7c18650f8113)  
![szerver tipusa](https://gist.github.com/user-attachments/assets/534559ee-e9e3-46a8-9313-1d6c92a11d8a)  

Miután betöltött menjünk a **Module Status**-ba és kapcsoljuk be a DHCP-t!  
![DHCP enable](https://gist.github.com/user-attachments/assets/cbc20230-0499-4e69-bc69-6efe8eb8fcec)

Majd menjünk a DHCP beállításokba és konfiguráljuk az alábbi módon:
![dhcp](https://gist.github.com/user-attachments/assets/4e631b8f-fd7f-45fd-a16a-5d635be319d3)  
Konfiguráljuk az **eth1**-es interface-t és adjuk hozzá a tartományhoz az alábbit:
![eth1](https://gist.github.com/user-attachments/assets/fca6e562-fae3-43b3-89b2-be1b12bdc18f)  
Majd jobb felül **SAVE CHANGES**

## Tartományba léptetés
Keressük ki az oldalsó sávban a **Users and Computers** menüt és végezzük el az alábbiakat:
![Users and computers](https://gist.github.com/user-attachments/assets/f108e5ff-e54e-42a0-b10c-647c7128f07a)  
Adjunk hozzá egy új admin felhasználót:  
![admin](https://gist.github.com/user-attachments/assets/e5a59aeb-83eb-489b-8bcc-78c03f3676b0)

Illetve hozzunk létre még csoportot és felhasználókat:  
![csoportok es felhasznalok](https://gist.github.com/user-attachments/assets/98eb7ee1-0edf-4f8a-8990-04e6dd58fe7d)

a kliens gépet léptessük tartományba a szokott módon:  
![tartomanyba lepes](https://gist.github.com/user-attachments/assets/16a1b775-22c6-4cdb-8bc0-ccf3cfdfd53b)  
![siker](https://gist.github.com/user-attachments/assets/a89d0bfa-8a66-4d84-be19-12e3689113f8)  

## Hálózati meghajtók csatolása
Kapcsoljuk be a Roaming profilt:  
![roaming](https://gist.github.com/user-attachments/assets/d0d03bb2-9910-47ab-96c5-3e9c19ef7707)  

Kliensbe lépjünk be egy általunk létrehozott tartományi felhasználóval és ellenőrízzük a meghajtót:  
![meghajto](https://gist.github.com/user-attachments/assets/341f3865-2b42-4c30-9245-195800e8cace) 

Most adjunk hozzá egy közös mappát a felhasználókhoz:  
![közös mappa](https://gist.github.com/user-attachments/assets/0403fdb2-edc5-4786-9255-be50aab4d6ca)
![access control](https://gist.github.com/user-attachments/assets/2c54979d-3df1-4b3e-9456-da5593a7f225)

Majd nyissuk egy CMD-t és írjuk be a következőt: `net use k: \\zentyal\kozos`

Mindkét meghajtó jól látszik (home és közös):  
![ell](https://gist.github.com/user-attachments/assets/d8159e88-7fe4-418c-b07a-3a780527b2c3)
<hr>

###### © Szenics Roland