# dublinbus-luas-api
api for real-time information for Dublin Bus and Luas written in nodejs using hapi. Reads data from real-time api's from Dublin bus and Luas and converts to a client friendly JSON format.

endpoints:

```
GET /bus/routes
GET /bus/route/{route_number}
GET /bus/stop/{stop_number}
GET /bus/stops/{route_number}/{direction}   

*{direction} has to be 'I' or 'O' (inbound, outbound) , case - insensitive.

GET /luas/stops
GET /luas/stop/{stop_id}
```

Supported luas:

```
STX, St. Stephen's Green
HIN, Heuston
HCT, Heuston
TPT, The Point
SDK, Spencer Dock
MYS, Mayor Square NCI
GDK, George's Dock
CON, Connolly
BUS, Busáras
ABB, Abbey Street
JER, Jervis
FOU, Four Courts
SMI, Smithfield
MUS, Museum
HEU, Heuston
JAM, James's
FAT, Fatima
RIA, Rialto
SUI, Suir Road
GOL, Goldenbridge
DRI, Drimnagh
BLA, Blackhorse
BLU, Bluebell
KYL, Kylemore
RED, Red Cow
KIN, Kingswood
BEL, Belgard
COO, Cookstown
HOS, Hospital
TAL, Tallaght
FET, Fettercairn
CVN, Cheeverstown
CIT, Citywest Campus
FOR, Fortunestown
SAG, Saggart
DEP, Depot
BRO, Broombridge
CAB, Cabra
PHI, Phibsborough
GRA, Grangegorman
BRD, Broadstone DIT
DOM, Dominick
PAR, Parnell
OUP, O'Connell Upper
OGP, O'Connell GPO
MAR, Marlborough
WES, Westmoreland
TRY, Trinity
DAW, Dawson
STS, St. Stephen's Green
HAR, Harcourt
CHA, Charlemont
RAN, Ranelagh
BEE, Beechwood
COW, Cowper
MIL, Milltown
WIN, Windy Arbour
DUN, Dundrum
BAL, Balally
KIL, Kilmacud
STI, Stillorgan
SAN, Sandyford
CPK, Central Park
GLE, Glencairn
GAL, The Gallops
LEO, Leopardstown Valley
BAW, Ballyogan Wood
RCC, Racecourse
CCK, Carrickmines
BRE, Brennanstown
LAU, Laughanstown
CHE, Cherrywood
BRI, Bride's Glen
```

### Requires

* nodejs v8 +

### To run

```
npm install
npm start
```