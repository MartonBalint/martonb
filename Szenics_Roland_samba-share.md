# Samba megosztás és beállításai | Szenics Roland
# Tartalomjegyzék
- [samba és szükséges csomagok telepítése](#samba-és-szükséges-csomagok-telepítése)
- [felhasználók és csoportok beállítása](#felhasználók-és-csoportok-beállítása)
- ["beado" és "kiado" mappa létrehozása és beállítása](#beado-és-kiado-mappa-létrehozása-és-beállítása)
- [fájlrendszer jogosultság kezelése](#fájlrendszer-jogosultság-kezelése)
- [samba felhasználók kezelése](#samba-felhasználók-kezelése)
- [megosztott mappa csatolása Windows és Linux rendszeren](#megosztott-mappa-csatolása-windows-és-linux-rendszeren)
    - [Windowson:](#windowson)
    - [Linuxon:](#linuxon)
- [FSTAB használata (credentials fájl segítségével)](#fstab-használata-credentials-fájl-segítségével)
    - [credentials fájl létrehozása](#credentials-fájl-létrehozása)
    - [mountolás](#mountolás)
- [Sources.list használata tükrök keresése és beállítása](#sourceslist-használata-tükrök-keresése-és-beállítása)


## samba és szükséges csomagok telepítése
kezdésnek írjuk át az `/etc/hosts` fájlt
```
...
szerver_ip_cime     szerver_hosztneve
```
pl: 
```
192.168.0.103      debianszr
```
telepitsuk a szükséges csomagokat
```
apt install samba cifs-utils -y
```

## felhasználók és csoportok beállítása
hozzunk létre `sambauser` és `sambaadmin` felhasználókat
```
sudo adduser sambauser
sudo adduser sambaadmin
```
a `sambaadmin`-t adjuk hozzá a `sambauser` csoporthoz:
```
sudo usermod -aG sambauser sambaadmin
```

## "beado" és "kiado" mappa létrehozása és beállítása
```
sudo mkdir /beado
sudo mkdir /kiado
```

## fájlrendszer jogosultság kezelése
állítsuk át a tulajdonost `sambaadmin`-ra és adjuk hozzá a `sambauser` csoportot a mappákhoz
```
sudo chown sambaadmin:sambauser /kiado
sudo chown sambaadmin:sambauser /beado
```
adjuk jogot a `kiado` és `beado` mappáknak
```
sudo chmod 755 /kiado
sudo chmod 733 /beado
```
`755`: tulaj tud mindent, csoport csak olvasni és futtatni, mindenki más csak olvasni és futtatni  
`733`: tulaj tud mindent, csoport csak írni és futtatni, mindenki más csak írni és futtatni

majd módosítsuk az `/etc/samba/smb.conf` fájlt, és a legvégére írjuk be ezt:
```
[kiado]
comment = Kiado
path = /kiado
read only = no
browsable = yes
valid user = @sambauser

[beado]
comment = Beado
path = /beado
read only = no
browsable = no
valid users = @sambauser
```

## samba felhasználók kezelése
adjuk hozzá a sambahoz a felhasználóinkat
```
sudo smbpasswd -a sambauser
sudo smbpasswd -a sambaadmin
```
indítsuk újra a Samba-t
```
sudo systemctl restart smbd.service
```
## megosztott mappa csatolása Windows és Linux rendszeren
#### Windowson:
Windows számítógépen nyissunk egy fájlkezelőt és az "Ez a gép"-et kikeresve kattintsunk rá jobb klikkel, majd "Hálózati meghajtó csatlakoztatása..." gombra kattintsunk rá:<br><br>

![image](https://gist.github.com/user-attachments/assets/1b21dc29-79b7-4b1b-b540-074525f241fb)  
majd írjuk be az ábrán látható módon az elérési útvonalat (`\\szerver-ip-cime\megadott-nev`)
![image-1](https://gist.github.com/user-attachments/assets/e1b2601d-2a0c-4bd6-9a9b-35ce427a14b7)  
írjuk be a hitelesítő adataink (sambauser / sambaadmin) és teszteljük le mindkét felhasználót  
ha mindent jól csináltunk `sambaadmin` felhasználóval tudnunk kéne olvasni, módosítani és futtatni is a `kiado` mappába, míg `sambauser`-nél csak olvasni és futtatni

#### Linuxon:
```
sudo mount -t cifs -o vers=3.0,username=sambauser,password=Passw0rd //192.168.0.103/beado /mnt/beado
sudo mount -t cifs -o vers=3.0,username=sambauser,password=Passw0rd //192.168.0.103/beado /mnt/kiado
```

## FSTAB használata (credentials fájl segítségével)
#### credentials fájl létrehozása
hozzunk létre egy `credentials` fájlt valahova
```
sudo nano /etc/samba/credentials
```
és írjuk bele ezt:
```
username=sambaadmin
password=Passw0rd
```
mentsük le és lépjünk ki  
majd adjunk jogosultságot neki:
```
sudo chmod 600 /etc/samba/credentials
```
#### mountolás
első lépésnek hozzunk létre két mappát a `/mnt/` -ban:
```
sudo mkdir /mnt/kiado
sudo mkdir /mnt/beado
```
változtassuk meg a tulajdonost és adjunk neki minden jogot:
```
sudo chown sambaadmin:sambaadmin /mnt/kiado
sudo chown sambaadmin:sambaadmin /mnt/beado

sudo chmod 770 /mnt/kiado
sudo chmod 770 /mnt/beado
```
nyissuk meg az `/etc/fstab` fájlt és adjuk hozzá ezt a két sort:
```
//192.168.0.103/beado /mnt/beado cifs vers=3.0,crendentials=/etc/samba/credentials,_netdev 0 0
//192.168.0.103/kiado /mnt/kiado cifs vers=3.0,credentials=/etc/samba/credentials,_netdev 0 0
```
`_netdev` -re azért van szükség, hogy miután internetet kapott a gépünk, azután csatolja fel a két meghajtót

## Sources.list használata tükrök keresése és beállítása
tükröket az [alábbi linken](https://wiki.debian.org/SourcesList) lehet találni  
ha megvan melyiket szeretnék használni akkor csak másoljuk bele `sources.list` -et fájlba
```
sudo nano /etc/apt/sources.list
```
<hr>
© Szenics Roland