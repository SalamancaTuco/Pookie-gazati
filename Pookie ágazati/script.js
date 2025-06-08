// Kérdések, válaszok, helyes válasz indexe
const kerdesek = [
  // 1
  {
    kerdes: "A BIOS önellenőrzésének mi a mozaikszava?",
    valaszok: ["POST", "BOOT", "CMOS"],
    helyes: 0,
  },
  // 2
  {
    kerdes:
      "A cég bővíti üzleteit más országokban. Minden fiókiroda csatlakozik a központhoz. Melyik hálózati technológia támogatása szükséges ehhez a feladathoz?",
    valaszok: ["VPN", "WAN", "VLAN"],
    helyes: 0,
  },
  // 4
  {
    kerdes:
      "A fejlesztés egy adott commit eredményéből származó, önálló névvel ellátott eleme.",
    valaszok: ["Branch", "Tag", "Release"],
    helyes: 0,
  },
  // 6
  {
    kerdes: "A hibaelhárítás során mi a probléma azonosítását követő lépés?",
    valaszok: ["Feladás", "Lehetséges okok elemzése", "Tesztelés"],
    helyes: 1,
  },
  // 7
  {
    kerdes: "A Hub milyen üzeneteket küld ki?",
    valaszok: ["Minden portra", "Csak a célportnak", "Csak a forrásportnak"],
    helyes: 0,
  },
  // 9
  {
    kerdes:
      "A repositoryk elhelyezkedése szerint a következő típusúak lehetnek.",
    valaszok: ["Helyi", "Távoli", "Mindkettő"],
    helyes: 2,
  },
  // 10
  {
    kerdes: "A Switch tanuló fázisa során melyik címet veszi fel a táblájába?",
    valaszok: ["MAC", "IP", "Port"],
    helyes: 0,
  },
  // 11
  {
    kerdes: "A támadások elszenvedésének mi a leggyakoribb okozója?",
    valaszok: ["Gyenge jelszó", "Elavult szoftver", "Nyitott portok"],
    helyes: 0,
  },
  // 12
  {
    kerdes:
      "A Windows Biztonság konfigurálásakor melyik kifejezést használják az egy objektumhoz társított szabályra?",
    valaszok: ["ACL", "GPO", "NTFS Permission"],
    helyes: 0,
  },
  // 13
  {
    kerdes:
      "Az egy vezető anyag keresztmetszetén időegység alatt áthaladó töltésmennyiség.",
    valaszok: ["Áramerősség", "Feszültség", "Töltés"],
    helyes: 0,
  },
  // 14
  {
    kerdes: "Az alábbiak közül melyiknek van felhőalapú alkalmazása?",
    valaszok: ["Google Drive", "Dropbox", "OneDrive"],
    helyes: 0,
  },
  // 15
  {
    kerdes: "Az alábbiak közül melyik a Microsoft virtualizációs környezete?",
    valaszok: ["Hyper-V", "VMware", "VirtualBox"],
    helyes: 0,
  },
  // 16
  {
    kerdes:
      "Az alábbiak közül melyik a platform mint szolgáltatás mozaikszava?",
    valaszok: ["PaaS", "SaaS", "IaaS"],
    helyes: 0,
  },
  // 17
  {
    kerdes:
      "Az alábbiak közül melyik a Windows 10 alapértelmezett fájlrendszere?",
    valaszok: ["NTFS", "FAT32", "exFAT"],
    helyes: 0,
  },
  // 18
  {
    kerdes: "Az alábbiak közül melyik nem közvetítő eszköz?",
    valaszok: ["Monitor", "Switch", "Repeater"],
    helyes: 0,
  },
  // 19
  {
    kerdes: "Az alábbiak közül melyik nem rézalapú megoldás?",
    valaszok: ["Optikai kábel", "UTP kábel", "Koaxiális kábel"],
    helyes: 0,
  },
  // 20
  {
    kerdes: "Az alábbiak közül melyik nem tápegység formátum?",
    valaszok: ["Monitor", "ATX", "SFX"],
    helyes: 0,
  },
  // 21
  {
    kerdes: "Az alábbiak közül melyik passzív támadás?",
    valaszok: [
      "Adatok lehallgatása",
      "Adatmódosítás",
      "Szolgáltatás megtagadás",
    ],
    helyes: 0,
  },
  // 22
  {
    kerdes:
      "Az eszközök elporosodása leginkább az alábbi eszközt veszélyezteti.",
    valaszok: ["Ventilátor", "Processzor", "Tápegység"],
    helyes: 0,
  },
  // 23
  {
    kerdes:
      "Egy felhasználó azt észlelte, hogy számítógépének órája nem a helyes időt mutatja. Mi a legvalószínűbb oka a problémának?",
    valaszok: [
      "CMOS elem lemerülése",
      "BIOS frissítés hiánya",
      "Hibás alaplap",
    ],
    helyes: 0,
  },
  // 24
  {
    kerdes:
      "Egy hálózati problémát elhárító technikus CLI-parancsokkal állapítja meg, hogy a számítógép kap-e megfelelő IP-címet a DHCP-kiszolgálótól. Melyik parancsot használhatja Windows kliensen?",
    valaszok: ["ipconfig", "netstat", "arp"],
    helyes: 0,
  },
  // 25
  {
    kerdes: "Egy mobil eszköz mely összetevőjének legnagyobb a fogyasztása?",
    valaszok: ["Kijelző", "CPU", "Wi-Fi modul"],
    helyes: 0,
  },
  // 26
  {
    kerdes:
      "Egy számítógéphez a 169.254.x.x IP cím lett hozzárendelve. Melyik parancs kezdeményezi egy új IP-cím kérésének folyamatát?",
    valaszok: ["ipconfig /renew", "ipconfig /release", "ipconfig /flushdns"],
    helyes: 0,
  },
  // 27
  {
    kerdes:
      "Hálózati forgalom melyik jellemzőit kell megfigyelni, ha a rendszergazda a cég tűzfalát csomagszűréssel konfigurálja?",
    valaszok: [
      "Forrás- és cél IP-cím",
      "Forrás- és cél port",
      "Protokoll típusa",
    ],
    helyes: 0,
  },
  // 28
  {
    kerdes: "Hány bitből áll egy IPv6-cím?",
    valaszok: ["128", "32", "64"],
    helyes: 0,
  },
  // 29
  {
    kerdes:
      "Hány bites egy hálózati kártya MAC-címében az OUI-rész (gyártó azonosító)?",
    valaszok: ["24", "8", "16"],
    helyes: 0,
  },
  // 30
  {
    kerdes: "Hány bites lehet egy Windows 10 operációs rendszer?",
    valaszok: ["64", "32", "Mindkettő"],
    helyes: 2,
  },
  // 31
  {
    kerdes: "Hány portja van egy IP telefonban?",
    valaszok: ["2", "1", "8"],
    helyes: 0,
  },
  // 32
  {
    kerdes: "Hány story lehet in-development Kanbanban egyszerre?",
    valaszok: ["A csapat WIP korlátjától függ", "1", "10"],
    helyes: 0,
  },
  // 33
  {
    kerdes: "Hány story lehet in-testing Kanbanban egyszerre?",
    valaszok: ["A csapat WIP korlátjától függ", "2", "5"],
    helyes: 0,
  },
  // 34
  {
    kerdes: "Hogy hívják az elemi módosítást a verziókövető rendszerben?",
    valaszok: ["Commit", "Delete", "Save"],
    helyes: 0,
  },
  // 35
  {
    kerdes:
      "Hogyan nevezik a fájlok és a mappák tartalmát egy adott pillanatban?",
    valaszok: ["Snapshot", "Screenshot", "Backup"],
    helyes: 0,
  },
  // 36
  {
    kerdes: "Hogyan számoljuk ki az ellenállások soros eredőjét?",
    valaszok: ["Összeadjuk őket", "Kivonjuk őket", "Szorozzuk őket"],
    helyes: 0,
  },
  // 37
  {
    kerdes: "Jelölje a hardveres hálózatbiztonsági eszközöket!",
    valaszok: ["Tűzfal", "Monitor", "Billentyűzet"],
    helyes: 0,
  },
  // 38
  {
    kerdes: "Ki a stackeholder?",
    valaszok: ["Érintett fél", "Programozó", "Gépsorvezető"],
    helyes: 0,
  },
  // 39
  {
    kerdes: "Linux rendszerekben hogy nevezik a rendszergazdai fiókot?",
    valaszok: ["root", "admin", "user"],
    helyes: 0,
  },
  // 40
  {
    kerdes: "Mekkora feszültségszintet igényel a processzor a működéshez?",
    valaszok: ["1–1,5 V", "220 V", "12 V"],
    helyes: 0,
  },
  // 41
  {
    kerdes:
      "Melyik a HTTP alkalmazási protokollnak az alapértelmezett portszáma?",
    valaszok: ["80", "443", "21"],
    helyes: 0,
  },
  // 42
  {
    kerdes:
      "Melyik a HTTPS alkalmazási protokollnak az alapértelmezett portszáma?",
    valaszok: ["443", "80", "22"],
    helyes: 0,
  },
  // 43
  {
    kerdes: "Melyik adattároló adatait tudjuk visszaállítani?",
    valaszok: ["SSD", "Monitor", "Billentyűzet"],
    helyes: 0,
  },
  // 44
  {
    kerdes: "Melyik alkalmazás felel a háttértárak felosztásának kezeléséért?",
    valaszok: ["Disk Management", "Word", "Paint"],
    helyes: 0,
  },
  // 45
  {
    kerdes:
      "Melyik alkatrész a leginkább gyanús, ha égett elektronika szaga érződik?",
    valaszok: ["Tápegység", "Monitor", "Billentyűzet"],
    helyes: 0,
  },
  // 46
  {
    kerdes:
      "Melyik az a szolgáltatás amelyiknél a felhőszolgáltató kezeli a hálózatot, és hozzáférést biztosít a szervezeteknek a hálózati eszközökhöz, a virtualizált hálózati szolgáltatásokhoz, a tárhelyhez, a szoftverekhez és a támogató hálózati infrastruktúrához?",
    valaszok: ["IaaS", "SaaS", "PaaS"],
    helyes: 0,
  },
  // 47
  {
    kerdes:
      "Melyik az a lépés a hibaelhárítás folyamatában, amely segít az ánnadóan ismétlődő javítási folyamatok elkerülésében?",
    valaszok: ["Dokumentálás", "Kikapcsolás", "Újraindítás"],
    helyes: 0,
  },
  // 48
  {
    kerdes: "Melyik az a támadás ami szolgáltatás megtagadást használ?",
    valaszok: ["DoS", "Phishing", "Vírus"],
    helyes: 0,
  },
  // 49
  {
    kerdes: "Melyik az a vírus amelyik rendszergazdai jogokat ad a támadónak?",
    valaszok: ["Rootkit", "Phishing", "DoS"],
    helyes: 0,
  },
  // 50
  {
    kerdes:
      "Melyik CLI paranccsal alkalmazzuk a módosításokat a Repository-ban?",
    valaszok: ["git commit", "git push", "git pull"],
    helyes: 0,
  },
  // 51
  {
    kerdes:
      "Melyik CLI paranccsal lehetséges a Repository állapotát lekérdezni?",
    valaszok: ["git status", "git push", "git pull"],
    helyes: 0,
  },
  // 52
  {
    kerdes: "Melyik elem vándorol egyik testről a másikra a felsoroltak közül?",
    valaszok: ["Elektron", "Proton", "Neutron"],
    helyes: 0,
  },
  // 53
  {
    kerdes:
      "Melyik eszköz elsődleges feladata vezeték nélküli kapcsolat biztosítása felhasználók számára?",
    valaszok: ["Wi-Fi hozzáférési pont", "Switch", "Router"],
    helyes: 0,
  },
  // 54
  {
    kerdes: "Melyik évben jelent meg az 5G Magyarországon?",
    valaszok: ["2020", "2010", "2015"],
    helyes: 0,
  },
  // 55
  {
    kerdes: "Melyik fájlstátusz jelzi, hogy a változások nincsenek követve?",
    valaszok: ["Untracked", "Tracked", "Modified"],
    helyes: 0,
  },
  // 56
  {
    kerdes: "Melyik feladat része egy hardverkarbantartási eljárásnak?",
    valaszok: ["Por eltávolítása", "Szoftver frissítés", "Jelszó cseréje"],
    helyes: 0,
  },
  // 57
  {
    kerdes:
      "Melyik hálózati szolgáltatás rendeli automatikusan az IP-címeket a hálózat eszközeihez?",
    valaszok: ["DHCP", "DNS", "FTP"],
    helyes: 0,
  },
  // 58
  {
    kerdes: "Melyik helyszínen használnak ma is V-modellt?",
    valaszok: [
      "Szoftverfejlesztési projektekben",
      "Építőiparban",
      "Kereskedelemben",
    ],
    helyes: 0,
  },
  // 59
  {
    kerdes: "Melyik Kirchhoff egyik törvénye?",
    valaszok: ["Csomóponti törvény", "Ohm-törvény", "Coulomb-törvény"],
    helyes: 0,
  },
  // 60
  {
    kerdes: "Melyik nem aktív eszköz?",
    valaszok: ["Kábel", "Switch", "Router"],
    helyes: 0,
  },
  // 61
  {
    kerdes: "Melyik nem áramforrás?",
    valaszok: ["Ellenállás", "Akkumulátor", "Generátor"],
    helyes: 0,
  },
  // 62
  {
    kerdes: "Melyik nem egy Scrum szerepkör a felsoroltak közül?",
    valaszok: ["Product Owner", "Scrum Master", "Ügyfél"],
    helyes: 2,
  },
  // 63
  {
    kerdes: "Melyik nem feladata a projektmenedzsernek?",
    valaszok: [
      "Projektterv készítése",
      "Fejlesztői munka elvégzése",
      "Erőforrások kezelése",
    ],
    helyes: 1,
  },
  // 64
  {
    kerdes: "Melyik nem megjelenítő kimenet?",
    valaszok: ["Monitor", "Nyomtató", "Projektor"],
    helyes: 1,
  },
  // 65
  {
    kerdes: "Melyik online kollaborációs eszköz az alábbiak közül?",
    valaszok: ["Microsoft Teams", "Word", "Paint"],
    helyes: 0,
  },
  // 66
  {
    kerdes: "Melyik operációs rendszer családba tartozik a Suse Linux?",
    valaszok: ["Linux", "Windows", "macOS"],
    helyes: 0,
  },
  // 67
  {
    kerdes:
      "Melyik összetevőket cseréljük ki általában egy új alaplap beszerelésekor?",
    valaszok: ["Processzor, RAM", "Billentyűzet, egér", "Monitor, hangszóró"],
    helyes: 0,
  },
  // 68
  {
    kerdes: "Melyik parancs ad hozzá egy távoli repositoryt a rendszerhez?",
    valaszok: ["git remote add", "git commit", "git push"],
    helyes: 0,
  },
  // 69
  {
    kerdes:
      "Melyik parancs feladata az összeállított változtatáslista elküldése a szerver felé?",
    valaszok: ["git push", "git pull", "git commit"],
    helyes: 0,
  },
  // 70
  {
    kerdes:
      "Melyik paranccsal kerül egy fájl untracked stáruszból unmodified státuszba?",
    valaszok: ["git add", "git commit", "git rm"],
    helyes: 0,
  },
  // 71
  {
    kerdes: "Melyik paranccsal törlünk fájlokat az adott Branch-ből?",
    valaszok: ["git rm", "git push", "git pull"],
    helyes: 0,
  },
  // 72
  {
    kerdes:
      "Melyik parancsot kell kiadni az IPv6 forgalomirányítás bekapcsolásához a routeren?",
    valaszok: ["ipv6 unicast-routing", "ipconfig", "ping"],
    helyes: 0,
  },
  // 73
  {
    kerdes: "Melyik RAID technológiát hívják tükrözésnek?",
    valaszok: ["RAID 1", "RAID 0", "RAID 5"],
    helyes: 0,
  },
  // 74
  {
    kerdes: "Melyik résztvevő nincs jelen a Sprint Retrospective folyamatban?",
    valaszok: ["Fejlesztőcsapat", "Scrum Master", "Külső megfigyelő"],
    helyes: 2,
  },
  // 75
  {
    kerdes:
      "Melyik ROM memóriatípusra igaz az alábbi: Erős UV fénnyel törölhető, de a sok törlés tönkreteszi.",
    valaszok: ["EPROM", "PROM", "EEPROM"],
    helyes: 0,
  },
  // 76
  {
    kerdes:
      "Melyik szoftveralkalmazás segít a merevlemez élettartamának növelésében?",
    valaszok: ["SMART monitoring", "Word", "Paint"],
    helyes: 0,
  },
  // 77
  {
    kerdes: "Az alaplap melyik része az északi híd?",
    valaszok: [
      "Processzor, memória és grafikus kártya közötti kapcsolat",
      "Déli híd (southbridge)",
      "Tápegység",
    ],
    helyes: 0,
  },
  // 78
  {
    kerdes:
      "Melyik technológia használja a meglévő elektromos vezetékeket az eszközök hálózatra történő csatlakoztatásához?",
    valaszok: ["PLC", "Wi-Fi", "Bluetooth"],
    helyes: 0,
  },
  // 79
  {
    kerdes:
      "Melyik technológiával lehet megakadályozni, hogy egy háttértárat illetéktelen személyek is tudják megtekinteni, ha az eltávolításra kerül a számítógépből?",
    valaszok: ["Titkosítás", "Törlés", "Lemezformázás"],
    helyes: 0,
  },
  // 80
  {
    kerdes:
      "Melyik tisztítóeszközt kell használni a számítógépházban az alkatrészekre rakódott por eltávolításához?",
    valaszok: ["Sűrített levegős porfújó", "Nedves kendő", "Fémkefe"],
    helyes: 0,
  },
  // 81
  {
    kerdes: "Melyik tulajdonság nem igaz a Windows 10 operációs rendszerre?",
    valaszok: [
      "Nem támogatja a 64 bites processzorokat",
      "Többfelhasználós rendszer",
      "Támogatja a 64 bites processzorokat",
    ],
    helyes: 0,
  },
  // 82
  {
    kerdes: "Melyik vezeték nélküli protokoll?",
    valaszok: ["Wi-Fi", "Ethernet", "USB"],
    helyes: 0,
  },
  // 83
  {
    kerdes:
      "Melyiket nem kell figyelembe venni egy asztali számítógép operációs rendszerének kiválasztásakor?",
    valaszok: [
      "Monitor típusa",
      "Hardverkompatibilitás",
      "Felhasználói igények",
    ],
    helyes: 0,
  },
  // 84
  {
    kerdes:
      "Mellyik két protokoll működik a TCP/IP modell szállítási rétegében?",
    valaszok: ["TCP és UDP", "HTTP és FTP", "IP és ICMP"],
    helyes: 0,
  },
  // 85
  {
    kerdes: "Mi a célja a verziókövető rendszernek?",
    valaszok: [
      "Kódváltozások követése",
      "Jelszó generálás",
      "Monitor kalibrálása",
    ],
    helyes: 0,
  },
  // 86
  {
    kerdes: "Mi a GND?",
    valaszok: ["Földelés", "Feszültség", "Áram"],
    helyes: 0,
  },
  // 87
  {
    kerdes: "Mi a hátránya a waterfall model-nek?",
    valaszok: ["Nehéz visszafordulni", "Gyors", "Rugalmas"],
    helyes: 0,
  },
  // 88
  {
    kerdes: "Mi a kapacitás mértékegysége?",
    valaszok: ["Farad", "Ohm", "Watt"],
    helyes: 0,
  },
  // 89
  {
    kerdes: "Mi a kiterjesztett valóság technológiának a rövidítése?",
    valaszok: ["AR", "VR", "MR"],
    helyes: 0,
  },
  // 90
  {
    kerdes:
      "Mi a leghatékonyabb módja a vezeték nélküli forgalom biztonságossá tételének?",
    valaszok: ["WPA2", "Nyílt hálózat", "Ethernet"],
    helyes: 0,
  },
  // 91
  {
    kerdes: "Mi a legmagasabb rang a fejlesztők közül?",
    valaszok: ["Senior fejlesztő", "Junior fejlesztő", "Trainee"],
    helyes: 0,
  },
  // 92
  {
    kerdes: "Mi a legnagyobb különbség a Kanban és a Scrum között?",
    valaszok: [
      "Scrumban vannak fix időkeretek (sprint), Kanbanban folyamatos áramlás van",
      "Kanbanban vannak fix időkeretek, Scrumban folyamatos áramlás van",
      "Mindkettő ugyanaz",
    ],
    helyes: 0,
  },
  // 93
  {
    kerdes: "Mi a PCM?",
    valaszok: [
      "Pulse Code Modulation",
      "Power Control Module",
      "Personal Computer Manager",
    ],
    helyes: 0,
  },
  // 94
  {
    kerdes: "Mi a tápegység feladata?",
    valaszok: [
      "Stabil tápfeszültség biztosítása",
      "Monitor melegítése",
      "Hangszóró működtetése",
    ],
    helyes: 0,
  },
  // 95
  {
    kerdes: "Mi a TCP/IP modell rétegeinek sorrendje felülről lefelé?",
    valaszok: [
      "Alkalmazási, szállítási, hálózati, hozzáférési",
      "Szállítási, hálózati, alkalmazási, fizikai",
      "Hálózati, alkalmazási, szállítási, fizikai",
    ],
    helyes: 0,
  },
  // 96
  {
    kerdes: "Mi a teljesítmény mértékegysége?",
    valaszok: ["Watt", "Ohm", "Volt"],
    helyes: 0,
  },
  // 97
  {
    kerdes: "Mi az ellenállás mértékegysége?",
    valaszok: ["Ohm", "Watt", "Volt"],
    helyes: 0,
  },
  // 98
  {
    kerdes: "Mi az Ohm törvény?",
    valaszok: ["S = I / T", "P = U × I", "R = U / I"],
    helyes: 2,
  },
  // 99
  {
    kerdes: "Mi az operációs rendszer feladata?",
    valaszok: [
      "Hardver és szoftver közötti kapcsolat biztosítása",
      "Monitor tisztítása",
      "Billentyűzet javítása",
    ],
    helyes: 0,
  },
  // 100
  {
    kerdes: "Mi az optimális páratartalom a gépek számára %-ban?",
    valaszok: ["40–60%", "10–20%", "80–90%"],
    helyes: 0,
  },
  // 101
  {
    kerdes: "Mi jelzi a tápegység meghibásodását?",
    valaszok: [
      "Nem indul a számítógép, égett szag",
      "Monitor kikapcsol",
      "Billentyűzet nem működik",
    ],
    helyes: 0,
  },
  // 102
  {
    kerdes: "Miben határozzák meg a merevlemezek sebességét?",
    valaszok: ["Fordulatszám (RPM)", "Szín", "Méret"],
    helyes: 0,
  },
  // 103
  {
    kerdes: "Mikor fordul elő az erőforrások elpazarlása?",
    valaszok: [
      "Rossz az alkatrész",
      "Minden működik rendesen",
      "Az erőforrások nincsenek kihasználva",
    ],
    helyes: 2,
  },
  // 104
  {
    kerdes: "Milyen adatokat tárol a CMOS memóriachip?",
    valaszok: [
      "BIOS beállítások, rendszeridő",
      "Felhasználói adatok",
      "Játékok",
    ],
    helyes: 0,
  },
  // 105
  {
    kerdes: "Milyen formában lehet beszerezni Ubuntu operációs rendszert?",
    valaszok: ["ISO képfájl", "Papír formában", "Hangfájlként"],
    helyes: 0,
  },
  // 106
  {
    kerdes:
      "Milyen platformról szerezhető be hivatalos szoftver Android készülékre?",
    valaszok: ["Google Play Áruház", "App Store", "Microsoft Store"],
    helyes: 0,
  },
  // 107
  {
    kerdes:
      "Milyen típusú biztonsági fenyegetés használ e-mailt, ami úgy tűnik mintha legitim felhasználótól származna?",
    valaszok: ["Phishing", "Vírus", "Adatbázis hiba"],
    helyes: 0,
  },
  // 108
  {
    kerdes:
      "Milyen típusú hypervisor működéséhez elengedhetetlen a host operációs rendszer?",
    valaszok: ["Type 2", "Type 1", "Type 3"],
    helyes: 0,
  },
  // 109
  {
    kerdes: "Minek nevezik a grafikus megjelenését az operációs rendszereknek?",
    valaszok: ["GUI", "CLI", "API"],
    helyes: 0,
  },
  // 110
  {
    kerdes: "Minimum hány giga RAM szükséges Windows 10 virtualizálásához?",
    valaszok: ["8 GB", "2 GB", "16 GB"],
    helyes: 0,
  },
  // 111
  {
    kerdes:
      "Mire nincs szükség, hogy a kitűzött projekt célokat megfelelő minőségben az adott időkeretben el tudjuk végezni?",
    valaszok: [
      "Minden erőforrás",
      "Megfelelő szervezés",
      "Hatékony csapatmunka",
    ],
    helyes: 0,
  },
  // 112
  {
    kerdes: "Mit jelent a Big Data?",
    valaszok: [
      "Nagyon nagy mennyiségű, gyorsan változó adat",
      "Kis adatbázis",
      "Egyetlen fájl",
    ],
    helyes: 0,
  },
  // 113
  {
    kerdes:
      "Mit kell tennie egy technikusnak, mielőtt bármilyen hibaelhárítási lépést megkezdne egy ügyfél számítógépén?",
    valaszok: [
      "Az ügyfél adatainak biztonsági mentése",
      "Számítógép újraindítása",
      "Monitor kikapcsolása",
    ],
    helyes: 0,
  },
  // 114
  {
    kerdes: "Mit okozhat egy meglazult csavar?",
    valaszok: [
      "Rázkódás, alkatrész meghibásodása",
      "Hangosabb működés",
      "Gyorsabb internet",
    ],
    helyes: 0,
  },
  // 115
  {
    kerdes: "Mivel lehet eltávolítani a régi hővezető pasztát?",
    valaszok: ["Popsi törlő", "Izopropil-alkohol", "Aceton"],
    helyes: 1,
  },
  // 116
  {
    kerdes: "Válassza ki a Unix alapú operációs rendszereket!",
    valaszok: [
      "Linux, BSD, macOS",
      "Solaris, AIX, HP-UX",
      "Windows, Linux, Android",
    ],
    helyes: 0,
  },
];

let tesztKerdesek = [];
let aktualisKerdes = 0;
let valaszolt = false;
let helyesValaszok = 0;
let pontszam = 0;
const TESZT_KERDES_SZAM = 15;
const PONT_EGY_KERDES = 2;

// Új: felhasznált kérdések indexei
let felhasznaltKerdesek = [];

// A randomizált válaszok és az aktuális helyes index
let aktualisValaszok = [];
let aktualisHelyesIndex = 0;

// Véletlenszerűen kiválaszt N db kérdést a kerdesek tömbből
function randomKerdesek(szam) {
  // Csak a fel nem használt kérdésekből válasszunk
  const elerhetoKerdesek = kerdesek
    .map((k, idx) => ({ ...k, idx }))
    .filter((k) => !felhasznaltKerdesek.includes(k.idx));
  const masolat = [...elerhetoKerdesek];
  const valogatott = [];
  for (let i = 0; i < szam && masolat.length > 0; i++) {
    const idx = Math.floor(Math.random() * masolat.length);
    valogatott.push(masolat.splice(idx, 1)[0]);
  }
  return valogatott;
}

// Teszt indítása
function tesztIndit() {
  // Ellenőrizzük, hogy van-e elég kérdés
  const elerheto = kerdesek.length - felhasznaltKerdesek.length;
  if (elerheto < TESZT_KERDES_SZAM) {
    const kerdesElem = document.getElementById("kerdes");
    const valaszokElem = document.getElementById("valaszok");
    const eredmenyElem = document.getElementById("eredmeny");
    kerdesElem.textContent = "Nincs elég új kérdés a teszthez!";
    valaszokElem.innerHTML = "";
    eredmenyElem.innerHTML = "Újraindításhoz kattints az alábbi gombra!";
    document.getElementById("helyes-valaszok").textContent = "";
    document.getElementById("teszt-indit-gomb").style.display = "none";
    let ujraBtn = document.getElementById("ujraindit-gomb");
    if (!ujraBtn) {
      ujraBtn = document.createElement("button");
      ujraBtn.id = "ujraindit-gomb";
      ujraBtn.textContent = "Kérdéshalmaz újragenerálása";
      ujraBtn.className = "valasz-gomb";
      ujraBtn.style.display = "block";
      ujraBtn.onclick = function () {
        felhasznaltKerdesek = [];
        document.getElementById("ujraindit-gomb").remove();
        document.getElementById("teszt-indit-gomb").style.display = "block";
        document.getElementById("eredmeny").textContent = "";
        document.getElementById("kerdes").textContent = "";
        document.getElementById("valaszok").innerHTML = "";
        document.getElementById("helyes-valaszok").textContent = "";
      };
      document.getElementById("kerdes-container").appendChild(ujraBtn);
    }
    return;
  }
  tesztKerdesek = randomKerdesek(TESZT_KERDES_SZAM);
  // Mentsük el a most kiválasztott kérdések indexeit
  felhasznaltKerdesek.push(...tesztKerdesek.map(k => k.idx));
  aktualisKerdes = 0;
  helyesValaszok = 0;
  pontszam = 0;
  document.getElementById("eredmeny").textContent = "";
  document.getElementById("helyes-valaszok").textContent = "";
  document.getElementById("teszt-indit-gomb").style.display = "none";
  // Töröljük az újraindító gombot, ha van
  const ujraBtn = document.getElementById("ujraindit-gomb");
  if (ujraBtn) ujraBtn.remove();
  betoltKerdes();
}

// Kérdés és válaszok betöltése
function betoltKerdes() {
  valaszolt = false;
  const kerdesElem = document.getElementById("kerdes");
  const valaszokElem = document.getElementById("valaszok");
  const eredmenyElem = document.getElementById("eredmeny");
  const kovetkezoGomb = document.getElementById("kovetkezo-gomb");

  if (aktualisKerdes >= tesztKerdesek.length) {
    // Teszt vége, eredmény kiírása
    kerdesElem.textContent = "Teszt vége!";
    valaszokElem.innerHTML = "";
    const maxPont = TESZT_KERDES_SZAM * PONT_EGY_KERDES;
    const jegy = jegySzamitas(pontszam, maxPont);
    eredmenyElem.innerHTML =
      "Pontszámod: <b>" + pontszam + " / " + maxPont + "</b><br>" +
      "Jegyed: <b>" + jegy + "</b>";
    document.getElementById("helyes-valaszok").textContent = "";
    kovetkezoGomb.style.display = "none";
    document.getElementById("teszt-indit-gomb").style.display = "block";
    if (jegy === "5") {
      inditKonfetti();
    }
    return;
  }

  kerdesElem.textContent = tesztKerdesek[aktualisKerdes].kerdes;
  valaszokElem.innerHTML = "";

  // Válaszok random sorrendben, és az új helyes index meghatározása
  const eredetiValaszok = tesztKerdesek[aktualisKerdes].valaszok;
  const helyesIndex = tesztKerdesek[aktualisKerdes].helyes;
  const valaszokObj = eredetiValaszok.map((v, i) => ({ v, eredetiIndex: i }));
  for (let i = valaszokObj.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [valaszokObj[i], valaszokObj[j]] = [valaszokObj[j], valaszokObj[i]];
  }
  aktualisValaszok = valaszokObj;
  aktualisHelyesIndex = valaszokObj.findIndex(obj => obj.eredetiIndex === helyesIndex);

  aktualisValaszok.forEach(({ v }, i) => {
    const gomb = document.createElement("button");
    gomb.className = "valasz-gomb";
    gomb.textContent = v;
    gomb.onclick = () => valasztas(i);
    valaszokElem.appendChild(gomb);
  });

  eredmenyElem.textContent = "";
  kovetkezoGomb.style.display = "none";
}

// Választás feldolgozása
function valasztas(index) {
  if (valaszolt) return;
  valaszolt = true;

  const gombok = document.querySelectorAll(".valasz-gomb");
  gombok.forEach((gomb, i) => {
    if (i === aktualisHelyesIndex) {
      gomb.classList.add("helyes");
    } else if (i === index) {
      gomb.classList.add("helytelen");
    }
  });

  const eredmenyElem = document.getElementById("eredmeny");
  if (index === aktualisHelyesIndex) {
    eredmenyElem.textContent = "nyogert plusz 1 ember utalja, ugyes vagy!";
    eredmenyElem.style.color = "green";
    helyesValaszok++;
    pontszam += PONT_EGY_KERDES;
  } else {
    eredmenyElem.textContent = "nemjo, nyoger megmenekul :c";
    eredmenyElem.style.color = "red";
  }

  document.getElementById("helyes-valaszok").textContent =
    "Helyes válaszok: " + helyesValaszok + " / " + TESZT_KERDES_SZAM +
    " | Pontszám: " + pontszam;

  document.getElementById("kovetkezo-gomb").style.display = "block";
}

// Következő kérdés
document.getElementById("kovetkezo-gomb").onclick = function () {
  aktualisKerdes++;
  betoltKerdes();
};

// Jegy számítása százalék alapján
function jegySzamitas(pont, maxPont) {
  const szazalek = (pont / maxPont) * 100;
  if (szazalek <= 20) return "1";
  if (szazalek <= 40) return "2";
  if (szazalek <= 60) return "3";
  if (szazalek <= 80) return "4";
  return "5";
}

// Teszt indító gomb eseménykezelő oldal betöltésekor
window.onload = function () {
  document.getElementById("teszt-indit-gomb").onclick = tesztIndit;
  document.getElementById("kovetkezo-gomb").style.display = "none";
};

// Konfetti effekt (egyszerű, canvas alapú)
function inditKonfetti() {
  if (document.getElementById("konfetti-canvas")) return; // ne legyen többször
  const canvas = document.createElement("canvas");
  canvas.id = "konfetti-canvas";
  canvas.style.position = "fixed";
  canvas.style.left = 0;
  canvas.style.top = 0;
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = 9999;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  let W = window.innerWidth;
  let H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  const confettiCount = 120;
  const confetti = [];
  const colors = ["#ff69b4", "#ffd1dc", "#a0e0a0", "#ffb6c1", "#ff1493", "#fff"];

  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      x: Math.random() * W,
      y: Math.random() * -H,
      r: Math.random() * 6 + 4,
      d: Math.random() * confettiCount,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 10,
      tiltAngleIncremental: (Math.random() * 0.07) + .05,
      tiltAngle: 0
    });
  }

  let angle = 0;
  let tiltAngle = 0;
  let animationFrame;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < confettiCount; i++) {
      let c = confetti[i];
      ctx.beginPath();
      ctx.lineWidth = c.r;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x + c.tilt + (c.r / 3), c.y);
      ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r);
      ctx.stroke();
    }
    update();
    animationFrame = requestAnimationFrame(draw);
  }

  function update() {
    angle += 0.01;
    tiltAngle += 0.1;
    for (let i = 0; i < confettiCount; i++) {
      let c = confetti[i];
      c.y += (Math.cos(angle + c.d) + 3 + c.r / 2) / 2;
      c.x += Math.sin(angle);
      c.tiltAngle += c.tiltAngleIncremental;
      c.tilt = Math.sin(c.tiltAngle) * 15;

      if (c.y > H) {
        c.x = Math.random() * W;
        c.y = -10;
        c.tilt = Math.random() * 10 - 10;
      }
    }
  }

  draw();

  // 10 másodperc után eltávolítjuk a konfettit
  setTimeout(() => {
    cancelAnimationFrame(animationFrame);
    if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
  }, 6000);

  // Ha átméretezik az ablakot, igazítsuk a canvas méretét
  window.addEventListener("resize", () => {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
  });
}
