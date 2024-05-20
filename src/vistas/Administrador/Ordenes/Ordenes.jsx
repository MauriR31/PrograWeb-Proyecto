import React, { useState } from 'react';
import { Link } from "react-router-dom"
import BarraCuenta from '../../../componentes/BarraCuenta'
import BarraPaginacion from '../../../componentes/BarraPaginacion';
/** @type {import('tailwindcss').Config} */

function Ordenes() {
  // Ejemplo de array de usuarios
  const ordenes = [
    { id: 1, nombre: 'Marcy', apellido: 'ukbhans', fechaOrden: '04-05-2024', total: '$232.88', correo: 'msukbhans0@youtube.com', estado: 'Pendiente' },
    { id: 2, nombre: 'Osborn', apellido: 'Massinger', fechaOrden: '13-05-2024', total: '$146.71', correo: 'omassinger1@cnet.com', estado: 'Entregado' },
    { id: 3, nombre: 'Everard', apellido: 'Brickhill', fechaOrden: '30-04-2024', total: '$243.51', correo: 'ebrickhill2@networkadvertising.org', estado: 'Pendiente' },
    { id: 4, nombre: 'Leslie', apellido: 'Aloshikin', fechaOrden: '12-05-2024', total: '$160.08', correo: 'laloshikin3@taobao.com', estado: 'Pendiente' },
    { id: 5, nombre: 'Elsworth', apellido: 'Jeppe', fechaOrden: '02-05-2024', total: '$220.89', correo: 'ejeppe4@exblog.jp', estado: 'Entregado' },
    { id: 6, nombre: 'Darren', apellido: 'Aucourte', fechaOrden: '05-05-2024', total: '$250.40', correo: 'daucourte5@photobucket.com', estado: 'Pendiente' },
    { id: 7, nombre: 'Raviv', apellido: 'Heliet', fechaOrden: '09-05-2024', total: '$145.18', correo: 'rheliet6@washington.edu', estado: 'Por Enviar' },
    { id: 8, nombre: 'Tan', apellido: 'Dyne', fechaOrden: '11-05-2024', total: '$62.32', correo: 'tdyne7@wunderground.com', estado: 'Pendiente' },
    { id: 9, nombre: 'Hymie', apellido: 'Provost', fechaOrden: '05-05-2024', total: '$274.11', correo: 'hprovost8@nasa.gov', estado: 'Por Enviar' },
    { id: 10, nombre: 'Baily', apellido: 'Tomblings', fechaOrden: '11-05-2024', total: '$226.43', correo: 'btomblings9@is.gd', estado: 'Pendiente' },
    { id: 11, nombre: 'Wilbur', apellido: 'Lowndesbrough', fechaOrden: '09-05-2024', total: '$21.45', correo: 'wlowndesbrougha@4shared.com', estado: 'Por Enviar' },
    { id: 12, nombre: 'Tyler', apellido: 'Storm', fechaOrden: '29-04-2024', total: '$218.83', correo: 'tstormb@fastcompany.com', estado: 'Entregado' },
    { id: 13, nombre: 'Em', apellido: 'Matantsev', fechaOrden: '09-05-2024', total: '$253.67', correo: 'ematantsevc@ow.ly', estado: 'Pendiente' },
    { id: 14, nombre: 'Brocky', apellido: 'Hamlin', fechaOrden: '30-04-2024', total: '$266.12', correo: 'bhamlind@hostgator.com', estado: 'Por Enviar' },
    { id: 15, nombre: 'Roxy', apellido: 'Janu', fechaOrden: '29-04-2024', total: '$124.55', correo: 'rjanue@infoseek.co.jp', estado: 'Entregado' },
    { id: 16, nombre: 'Constancy', apellido: 'Antoniewski', fechaOrden: '13-05-2024', total: '$37.88', correo: 'cantoniewskif@tripod.com', estado: 'Entregado' },
    { id: 17, nombre: 'Trixie', apellido: 'Meenan', fechaOrden: '05-05-2024', total: '$96.68', correo: 'tmeenang@g.co', estado: 'Pendiente' },
    { id: 18, nombre: 'Theda', apellido: 'Bryden', fechaOrden: '04-05-2024', total: '$129.53', correo: 'tbrydenh@360.cn', estado: 'Pendiente' },
    { id: 19, nombre: 'Milicent', apellido: 'Johnsson', fechaOrden: '02-05-2024', total: '$278.07', correo: 'mjohnssoni@bravesites.com', estado: 'Pendiente' },
    { id: 20, nombre: 'Efrem', apellido: 'Sellstrom', fechaOrden: '11-05-2024', total: '$292.86', correo: 'esellstromj@ask.com', estado: 'Pendiente' },
    { id: 21, nombre: 'Penn', apellido: 'Couth', fechaOrden: '04-05-2024', total: '$151.28', correo: 'pcouthk@icq.com', estado: 'Por Enviar' },
    { id: 22, nombre: 'Curr', apellido: 'De Meyer', fechaOrden: '03-05-2024', total: '$126.05', correo: 'cdel@usatoday.com', estado: 'Entregado' },
    { id: 23, nombre: 'Ethelred', apellido: 'Thorley', fechaOrden: '11-05-2024', total: '$236.94', correo: 'ethorleym@qq.com', estado: 'Pendiente' },
    { id: 24, nombre: 'Fonzie', apellido: 'Quarterman', fechaOrden: '09-05-2024', total: '$169.88', correo: 'fquartermann@ebay.com', estado: 'Por Enviar' },
    { id: 25, nombre: 'Ralph', apellido: 'Standall', fechaOrden: '01-05-2024', total: '$285.43', correo: 'rstandallo@japanpost.jp', estado: 'Pendiente' },
    { id: 26, nombre: 'Amil', apellido: 'Humes', fechaOrden: '11-05-2024', total: '$274.60', correo: 'ahumesp@blogspot.com', estado: 'Por Enviar' },
    { id: 27, nombre: 'Ignazio', apellido: 'Wadsworth', fechaOrden: '13-05-2024', total: '$193.87', correo: 'iwadsworthq@liveinternet.ru', estado: 'Por Enviar' },
    { id: 28, nombre: 'Rich', apellido: 'Thripp', fechaOrden: '04-05-2024', total: '$91.29', correo: 'rthrippr@1688.com', estado: 'Pendiente' },
    { id: 29, nombre: 'Durand', apellido: 'Appleby', fechaOrden: '09-05-2024', total: '$259.92', correo: 'dapplebys@netlog.com', estado: 'Pendiente' },
    { id: 30, nombre: 'Llywellyn', apellido: 'Hassan', fechaOrden: '02-05-2024', total: '$215.02', correo: 'lhassant@cmu.edu', estado: 'Por Enviar' },
    { id: 31, nombre: 'Burnard', apellido: 'Stredwick', fechaOrden: '11-05-2024', total: '$79.20', correo: 'bstredwicku@youku.com', estado: 'Pendiente' },
    { id: 32, nombre: 'Elfrieda', apellido: 'Gumley', fechaOrden: '28-04-2024', total: '$120.05', correo: 'egumleyv@mozilla.org', estado: 'Por Enviar' },
    { id: 33, nombre: 'Micheil', apellido: 'Huison', fechaOrden: '09-05-2024', total: '$46.49', correo: 'mhuisonw@ifeng.com', estado: 'Entregado' },
    { id: 34, nombre: 'Freddy', apellido: 'Davidow', fechaOrden: '30-04-2024', total: '$145.66', correo: 'fdavidowx@t-online.de', estado: 'Por Enviar' },
    { id: 35, nombre: 'Ora', apellido: 'Statton', fechaOrden: '02-05-2024', total: '$10.45', correo: 'ostattony@pcworld.com', estado: 'Por Enviar' },
    { id: 36, nombre: 'Oralee', apellido: 'Nickoll', fechaOrden: '28-04-2024', total: '$13.11', correo: 'onickollz@craigslist.org', estado: 'Entregado' },
    { id: 37, nombre: 'Cinda', apellido: 'Wixey', fechaOrden: '03-05-2024', total: '$126.69', correo: 'cwixey10@chicagotribune.com', estado: 'Entregado' },
    { id: 38, nombre: 'Rik', apellido: 'Cosans', fechaOrden: '01-05-2024', total: '$201.09', correo: 'rcosans11@flickr.com', estado: 'Por Enviar' },
    { id: 39, nombre: 'Arabella', apellido: 'Castaignet', fechaOrden: '13-05-2024', total: '$186.07', correo: 'acastaignet12@oracle.com', estado: 'Por Enviar' },
    { id: 40, nombre: 'Gaylord', apellido: 'Coton', fechaOrden: '04-05-2024', total: '$258.52', correo: 'gcoton13@opensource.org', estado: 'Entregado' },
    { id: 41, nombre: 'Arleta', apellido: 'Wride', fechaOrden: '29-04-2024', total: '$60.70', correo: 'awride14@toplist.cz', estado: 'Por Enviar' },
    { id: 42, nombre: 'Shaylyn', apellido: 'McClurg', fechaOrden: '02-05-2024', total: '$248.30', correo: 'smcclurg15@ebay.co.uk', estado: 'Entregado' },
    { id: 43, nombre: 'Joyann', apellido: 'Megainey', fechaOrden: '10-05-2024', total: '$186.71', correo: 'jmegainey16@github.com', estado: 'Por Enviar' },
    { id: 44, nombre: 'Bunni', apellido: 'Rumming', fechaOrden: '12-05-2024', total: '$185.66', correo: 'brumming17@wunderground.com', estado: 'Pendiente' },
    { id: 45, nombre: 'Corinne', apellido: 'Valek', fechaOrden: '03-05-2024', total: '$76.08', correo: 'cvalek18@europa.eu', estado: 'Entregado' },
    { id: 46, nombre: 'Evey', apellido: 'Klamman', fechaOrden: '07-05-2024', total: '$137.01', correo: 'eklamman19@csmonitor.com', estado: 'Pendiente' },
    { id: 47, nombre: 'Bernardina', apellido: 'Dugald', fechaOrden: '03-05-2024', total: '$219.88', correo: 'bdugald1a@imgur.com', estado: 'Entregado' },
    { id: 48, nombre: 'Natasha', apellido: 'Sirette', fechaOrden: '10-05-2024', total: '$28.04', correo: 'nsirette1b@java.com', estado: 'Pendiente' },
    { id: 49, nombre: 'Simonette', apellido: 'Finnie', fechaOrden: '03-05-2024', total: '$111.58', correo: 'sfinnie1c@gnu.org', estado: 'Entregado' },
    { id: 50, nombre: 'Nicky', apellido: 'Wallach', fechaOrden: '03-05-2024', total: '$22.53', correo: 'nwallach1d@xing.com', estado: 'Por Enviar' },
    { id: 51, nombre: 'Powell', apellido: 'Crackett', fechaOrden: '12-05-2024', total: '$20.43', correo: 'pcrackett1e@theglobeandmail.com', estado: 'Entregado' },
    { id: 52, nombre: 'Catherin', apellido: 'Flori', fechaOrden: '01-05-2024', total: '$11.75', correo: 'cflori1f@engadget.com', estado: 'Por Enviar' },
    { id: 53, nombre: 'Meade', apellido: 'Gerasch', fechaOrden: '05-05-2024', total: '$45.16', correo: 'mgerasch1g@goo.gl', estado: 'Por Enviar' },
    { id: 54, nombre: 'Amalle', apellido: 'Ebsworth', fechaOrden: '29-04-2024', total: '$173.34', correo: 'aebsworth1h@arizona.edu', estado: 'Entregado' },
    { id: 55, nombre: 'Cicely', apellido: 'Isaksen', fechaOrden: '01-05-2024', total: '$48.22', correo: 'cisaksen1i@fema.gov', estado: 'Por Enviar' },
    { id: 56, nombre: 'Ian', apellido: 'Gemeau', fechaOrden: '04-05-2024', total: '$258.93', correo: 'igemeau1j@photobucket.com', estado: 'Pendiente' },
    { id: 57, nombre: 'Susie', apellido: 'Kitching', fechaOrden: '30-04-2024', total: '$44.26', correo: 'skitching1k@google.com.au', estado: 'Por Enviar' },
    { id: 58, nombre: 'Chaddie', apellido: 'Esslemont', fechaOrden: '13-05-2024', total: '$35.87', correo: 'cesslemont1l@google.co.uk', estado: 'Entregado' },
    { id: 59, nombre: 'Cecilia', apellido: 'Chisman', fechaOrden: '08-05-2024', total: '$154.06', correo: 'cchisman1m@sina.com.cn', estado: 'Por Enviar' },
    { id: 60, nombre: 'Brendon', apellido: 'Seyffert', fechaOrden: '09-05-2024', total: '$224.90', correo: 'bseyffert1n@tiny.cc', estado: 'Por Enviar' },
    { id: 61, nombre: 'Val', apellido: 'Kyteley', fechaOrden: '05-05-2024', total: '$283.97', correo: 'vkyteley1o@naver.com', estado: 'Entregado' },
    { id: 62, nombre: 'Elden', apellido: 'Balcombe', fechaOrden: '29-04-2024', total: '$63.74', correo: 'ebalcombe1p@xrea.com', estado: 'Entregado' },
    { id: 63, nombre: 'Jackson', apellido: 'Goodfield', fechaOrden: '30-04-2024', total: '$239.40', correo: 'jgoodfield1q@barnesandnoble.com', estado: 'Por Enviar' },
    { id: 64, nombre: 'Dulci', apellido: 'Kinnaird', fechaOrden: '07-05-2024', total: '$104.91', correo: 'dkinnaird1r@pbs.org', estado: 'Pendiente' },
    { id: 65, nombre: 'Carissa', apellido: 'Galliford', fechaOrden: '01-05-2024', total: '$292.66', correo: 'cgalliford1s@addtoany.com', estado: 'Pendiente' },
    { id: 66, nombre: 'Vito', apellido: 'Kebell', fechaOrden: '06-05-2024', total: '$44.46', correo: 'vkebell1t@businessinsider.com', estado: 'Entregado' },
    { id: 67, nombre: 'Shae', apellido: 'Coping', fechaOrden: '29-04-2024', total: '$269.39', correo: 'scoping1u@fastcompany.com', estado: 'Pendiente' },
    { id: 68, nombre: 'Frank', apellido: 'Duckers', fechaOrden: '08-05-2024', total: '$236.90', correo: 'fduckers1v@desdev.cn', estado: 'Por Enviar' },
    { id: 69, nombre: 'Barclay', apellido: 'Gallant', fechaOrden: '05-05-2024', total: '$30.53', correo: 'bgallant1w@skyrock.com', estado: 'Por Enviar' },
    { id: 70, nombre: 'Paulo', apellido: 'Magnus', fechaOrden: '04-05-2024', total: '$284.48', correo: 'pmagnus1x@hugedomains.com', estado: 'Entregado' },
    { id: 71, nombre: 'Johnna', apellido: 'Wakeford', fechaOrden: '28-04-2024', total: '$109.23', correo: 'jwakeford1y@columbia.edu', estado: 'Entregado' },
    { id: 72, nombre: 'Kirby', apellido: 'McBrearty', fechaOrden: '11-05-2024', total: '$197.00', correo: 'kmcbrearty1z@icio.us', estado: 'Entregado' },
    { id: 73, nombre: 'Haskel', apellido: 'O`Neil', fechaOrden: '05-05-2024', total: '$178.27', correo: 'honeil20@list-manage.com', estado: 'Entregado' },
    { id: 74, nombre: 'Sampson', apellido: 'Branton', fechaOrden: '04-05-2024', total: '$192.07', correo: 'sbranton21@ask.com', estado: 'Por Enviar' },
    { id: 75, nombre: 'Pierre', apellido: 'Bolzen', fechaOrden: '02-05-2024', total: '$168.73', correo: 'pbolzen22@sakura.ne.jp', estado: 'Pendiente' },
    { id: 76, nombre: 'Dorene', apellido: 'Raiston', fechaOrden: '11-05-2024', total: '$295.73', correo: 'draiston23@cargocollective.com', estado: 'Entregado' },
    { id: 77, nombre: 'Tobye', apellido: 'Bettenson', fechaOrden: '12-05-2024', total: '$14.39', correo: 'tbettenson24@google.fr', estado: 'Entregado' },
    { id: 78, nombre: 'Glennis', apellido: 'Cervantes', fechaOrden: '30-04-2024', total: '$250.52', correo: 'gcervantes25@ebay.co.uk', estado: 'Pendiente' },
    { id: 79, nombre: 'Gaelan', apellido: 'Rudgard', fechaOrden: '13-05-2024', total: '$175.86', correo: 'grudgard26@jalbum.net', estado: 'Pendiente' },
    { id: 80, nombre: 'Antonia', apellido: 'Esselen', fechaOrden: '29-04-2024', total: '$58.52', correo: 'aesselen27@icq.com', estado: 'Por Enviar' },
    { id: 81, nombre: 'Thomasine', apellido: 'Blues', fechaOrden: '30-04-2024', total: '$271.83', correo: 'tblues28@fotki.com', estado: 'Pendiente' },
    { id: 82, nombre: 'Lee', apellido: 'Sempill', fechaOrden: '02-05-2024', total: '$260.83', correo: 'lsempill29@blinklist.com', estado: 'Pendiente' },
    { id: 83, nombre: 'Yevette', apellido: 'Glanester', fechaOrden: '09-05-2024', total: '$61.82', correo: 'yglanester2a@loc.gov', estado: 'Por Enviar' },
    { id: 84, nombre: 'Cecily', apellido: 'Beardsell', fechaOrden: '12-05-2024', total: '$242.38', correo: 'cbeardsell2b@sogou.com', estado: 'Por Enviar' },
    { id: 85, nombre: 'Alejandra', apellido: 'Rauprich', fechaOrden: '13-05-2024', total: '$44.01', correo: 'arauprich2c@prweb.com', estado: 'Pendiente' },
    { id: 86, nombre: 'Dan', apellido: 'Gosnoll', fechaOrden: '07-05-2024', total: '$161.66', correo: 'dgosnoll2d@spiegel.de', estado: 'Entregado' },
    { id: 87, nombre: 'Selia', apellido: 'Brogiotti', fechaOrden: '10-05-2024', total: '$184.80', correo: 'sbrogiotti2e@gizmodo.com', estado: 'Por Enviar' },
    { id: 88, nombre: 'Greg', apellido: 'Densey', fechaOrden: '29-04-2024', total: '$200.34', correo: 'gdensey2f@hexun.com', estado: 'Entregado' },
    { id: 89, nombre: 'Felita', apellido: 'Vedeniktov', fechaOrden: '11-05-2024', total: '$191.08', correo: 'fvedeniktov2g@icq.com', estado: 'Entregado' },
    { id: 90, nombre: 'Karlotte', apellido: 'Dunkley', fechaOrden: '11-05-2024', total: '$65.24', correo: 'kdunkley2h@homestead.com', estado: 'Entregado' },
    { id: 91, nombre: 'Marshall', apellido: 'Arrol', fechaOrden: '03-05-2024', total: '$227.44', correo: 'marrol2i@cyberchimps.com', estado: 'Entregado' },
    { id: 92, nombre: 'Lindie', apellido: 'Farrier', fechaOrden: '04-05-2024', total: '$269.87', correo: 'lfarrier2j@arizona.edu', estado: 'Entregado' },
    { id: 93, nombre: 'Barbaraanne', apellido: 'Perkinson', fechaOrden: '10-05-2024', total: '$163.95', correo: 'bperkinson2k@typepad.com', estado: 'Pendiente' },
    { id: 94, nombre: 'Eleanora', apellido: 'Ollie', fechaOrden: '07-05-2024', total: '$80.55', correo: 'eollie2l@drupal.org', estado: 'Entregado' },
    { id: 95, nombre: 'Claudie', apellido: 'Filasov', fechaOrden: '09-05-2024', total: '$192.76', correo: 'cfilasov2m@nih.gov', estado: 'Entregado' },
    { id: 96, nombre: 'Revkah', apellido: 'Heilds', fechaOrden: '30-04-2024', total: '$25.05', correo: 'rheilds2n@fc2.com', estado: 'Por Enviar' },
    { id: 97, nombre: 'Jennine', apellido: 'Beggi', fechaOrden: '10-05-2024', total: '$209.99', correo: 'jbeggi2o@baidu.com', estado: 'Pendiente' },
    { id: 98, nombre: 'Lorilyn', apellido: 'Cornall', fechaOrden: '08-05-2024', total: '$47.00', correo: 'lcornall2p@huffingtonpost.com', estado: 'Por Enviar' },
    { id: 99, nombre: 'Dana', apellido: 'Eilert', fechaOrden: '05-05-2024', total: '$223.16', correo: 'deilert2q@aol.com', estado: 'Por Enviar' },
    { id: 100, nombre: 'Maryjane', apellido: 'Danbye', fechaOrden: '07-05-2024', total: '$169.42', correo: 'mdanbye2r@squidoo.com', estado: 'Por Enviar' },
    { id: 101, nombre: 'Baily', apellido: 'Tomblings', fechaOrden: '11-05-2024', total: '$226.43', correo: 'btomblings9@is.gd', estado: 'Pendiente' },
    { id: 102, nombre: 'Wilbur', apellido: 'Lowndesbrough', fechaOrden: '09-05-2024', total: '$21.45', correo: 'wlowndesbrougha@4shared.com', estado: 'Por Enviar' },
    { id: 103, nombre: 'Tyler', apellido: 'Storm', fechaOrden: '29-04-2024', total: '$218.83', correo: 'tstormb@fastcompany.com', estado: 'Entregado' },
    { id: 104, nombre: 'Em', apellido: 'Matantsev', fechaOrden: '09-05-2024', total: '$253.67', correo: 'ematantsevc@ow.ly', estado: 'Pendiente' },
    { id: 105, nombre: 'Brocky', apellido: 'Hamlin', fechaOrden: '30-04-2024', total: '$266.12', correo: 'bhamlind@hostgator.com', estado: 'Por Enviar' },
    { id: 106, nombre: 'Roxy', apellido: 'Janu', fechaOrden: '29-04-2024', total: '$124.55', correo: 'rjanue@infoseek.co.jp', estado: 'Entregado' },
    { id: 107, nombre: 'Constancy', apellido: 'Antoniewski', fechaOrden: '13-05-2024', total: '$37.88', correo: 'cantoniewskif@tripod.com', estado: 'Entregado' },
    { id: 108, nombre: 'Trixie', apellido: 'Meenan', fechaOrden: '05-05-2024', total: '$96.68', correo: 'tmeenang@g.co', estado: 'Pendiente' },
    { id: 109, nombre: 'Theda', apellido: 'Bryden', fechaOrden: '04-05-2024', total: '$129.53', correo: 'tbrydenh@360.cn', estado: 'Pendiente' },
    { id: 110, nombre: 'Milicent', apellido: 'Johnsson', fechaOrden: '02-05-2024', total: '$278.07', correo: 'mjohnssoni@bravesites.com', estado: 'Pendiente' },
    { id: 111, nombre: 'Penn', apellido: 'Couth', fechaOrden: '04-05-2024', total: '$151.28', correo: 'pcouthk@icq.com', estado: 'Por Enviar' },
    { id: 112, nombre: 'Curr', apellido: 'De Meyer', fechaOrden: '03-05-2024', total: '$126.05', correo: 'cdel@usatoday.com', estado: 'Entregado' },
    { id: 113, nombre: 'Ethelred', apellido: 'Thorley', fechaOrden: '11-05-2024', total: '$236.94', correo: 'ethorleym@qq.com', estado: 'Pendiente' },
    { id: 114, nombre: 'Fonzie', apellido: 'Quarterman', fechaOrden: '09-05-2024', total: '$169.88', correo: 'fquartermann@ebay.com', estado: 'Por Enviar' },
    { id: 115, nombre: 'Ralph', apellido: 'Standall', fechaOrden: '01-05-2024', total: '$285.43', correo: 'rstandallo@japanpost.jp', estado: 'Pendiente' },
    { id: 116, nombre: 'Amil', apellido: 'Humes', fechaOrden: '11-05-2024', total: '$274.60', correo: 'ahumesp@blogspot.com', estado: 'Por Enviar' },
    { id: 117, nombre: 'Ignazio', apellido: 'Wadsworth', fechaOrden: '13-05-2024', total: '$193.87', correo: 'iwadsworthq@liveinternet.ru', estado: 'Por Enviar' },
    { id: 118, nombre: 'Rich', apellido: 'Thripp', fechaOrden: '04-05-2024', total: '$91.29', correo: 'rthrippr@1688.com', estado: 'Pendiente' },
    { id: 119, nombre: 'Durand', apellido: 'Appleby', fechaOrden: '09-05-2024', total: '$259.92', correo: 'dapplebys@netlog.com', estado: 'Pendiente' },
    { id: 120, nombre: 'Baily', apellido: 'Tomblings', fechaOrden: '11-05-2024', total: '$226.43', correo: 'btomblings9@is.gd', estado: 'Pendiente' },
    { id: 121, nombre: 'Wilbur', apellido: 'Lowndesbrough', fechaOrden: '09-05-2024', total: '$21.45', correo: 'wlowndesbrougha@4shared.com', estado: 'Por Enviar' },
    { id: 122, nombre: 'Tyler', apellido: 'Storm', fechaOrden: '29-04-2024', total: '$218.83', correo: 'tstormb@fastcompany.com', estado: 'Entregado' },
    { id: 123, nombre: 'Em', apellido: 'Matantsev', fechaOrden: '09-05-2024', total: '$253.67', correo: 'ematantsevc@ow.ly', estado: 'Pendiente' },
    { id: 124, nombre: 'Brocky', apellido: 'Hamlin', fechaOrden: '30-04-2024', total: '$266.12', correo: 'bhamlind@hostgator.com', estado: 'Por Enviar' },
    { id: 125, nombre: 'Roxy', apellido: 'Janu', fechaOrden: '29-04-2024', total: '$124.55', correo: 'rjanue@infoseek.co.jp', estado: 'Entregado' },
    { id: 126, nombre: 'Constancy', apellido: 'Antoniewski', fechaOrden: '13-05-2024', total: '$37.88', correo: 'cantoniewskif@tripod.com', estado: 'Entregado' },
    { id: 127, nombre: 'Trixie', apellido: 'Meenan', fechaOrden: '05-05-2024', total: '$96.68', correo: 'tmeenang@g.co', estado: 'Pendiente' },
    { id: 128, nombre: 'Theda', apellido: 'Bryden', fechaOrden: '04-05-2024', total: '$129.53', correo: 'tbrydenh@360.cn', estado: 'Pendiente' },
    { id: 129, nombre: 'Milicent', apellido: 'Johnsson', fechaOrden: '02-05-2024', total: '$278.07', correo: 'mjohnssoni@bravesites.com', estado: 'Pendiente' },
    { id: 130, nombre: 'Efrem', apellido: 'Sellstrom', fechaOrden: '11-05-2024', total: '$292.86', correo: 'esellstromj@ask.com', estado: 'Pendiente' },
    { id: 131, nombre: 'Penn', apellido: 'Couth', fechaOrden: '04-05-2024', total: '$151.28', correo: 'pcouthk@icq.com', estado: 'Por Enviar' },
    { id: 132, nombre: 'Curr', apellido: 'De Meyer', fechaOrden: '03-05-2024', total: '$126.05', correo: 'cdel@usatoday.com', estado: 'Entregado' },
    { id: 133, nombre: 'Ethelred', apellido: 'Thorley', fechaOrden: '11-05-2024', total: '$236.94', correo: 'ethorleym@qq.com', estado: 'Pendiente' },
    { id: 134, nombre: 'Fonzie', apellido: 'Quarterman', fechaOrden: '09-05-2024', total: '$169.88', correo: 'fquartermann@ebay.com', estado: 'Por Enviar' },
    { id: 135, nombre: 'Ralph', apellido: 'Standall', fechaOrden: '01-05-2024', total: '$285.43', correo: 'rstandallo@japanpost.jp', estado: 'Pendiente' },
    { id: 136, nombre: 'Amil', apellido: 'Humes', fechaOrden: '11-05-2024', total: '$274.60', correo: 'ahumesp@blogspot.com', estado: 'Por Enviar' },
    { id: 137, nombre: 'Ignazio', apellido: 'Wadsworth', fechaOrden: '13-05-2024', total: '$193.87', correo: 'iwadsworthq@liveinternet.ru', estado: 'Por Enviar' },
    { id: 138, nombre: 'Rich', apellido: 'Thripp', fechaOrden: '04-05-2024', total: '$91.29', correo: 'rthrippr@1688.com', estado: 'Pendiente' },
    { id: 139, nombre: 'Durand', apellido: 'Appleby', fechaOrden: '09-05-2024', total: '$259.92', correo: 'dapplebys@netlog.com', estado: 'Pendiente' },
    { id: 140, nombre: 'Llywellyn', apellido: 'Hassan', fechaOrden: '02-05-2024', total: '$215.02', correo: 'lhassant@cmu.edu', estado: 'Por Enviar' },
  ];

  // Establecimiento la separacion de los usuarios en base a una cantidad y la obtencion de parametros de paginacion
  // Estado para el índice de la página actual
  const [paginaActual, setPaginaActual] = useState(1);
  // Cantidad de usuarios a mostrar por página
  const ordenesPorPagina = 10;

    const [buscarOrden, setbuscarOrden] = useState('');
    const handleSearchChange = (e) => {
      setbuscarOrden(e.target.value);
      setPaginaActual(1); // Cuando se realiza una nueva búsqueda, volvemos a la primera página
    };

    // Filtrar ordenes basados en el término de búsqueda
    const filtrarOrdenes = ordenes.filter((orden) => {
      // Convertir el id a string porque asi trabaja el buscarOrden
      let idString = orden.id.toString();

      // Verificar la igual de ids
      const idMatch = idString.toLowerCase() === buscarOrden.toLowerCase();

      // Verificar si el término de búsqueda está incluido en el nombre o apellido
      const nameMatch = orden.nombre.toLowerCase().includes(buscarOrden.toLowerCase()) ||
        orden.apellido.toLowerCase().includes(buscarOrden.toLowerCase());
        // En caso de que se requiera la inclusion
        // || idString.includes(buscarOrden.toLowerCase())

      // Retornar verdadero si se cumple alguna de las condiciones
      return idMatch || nameMatch;
    });

    // Informacion necesaria para el listado de los ordenes registrados
    // Índice del primer orden en la página actual
    const indiceInicio = (paginaActual - 1) * ordenesPorPagina;
    // Índice del último orden en la página actual
    const indiceFin = paginaActual * ordenesPorPagina;
    // ordenes a mostrar en la página actual, con o sin busqueda
    const ordenesEnPagina = filtrarOrdenes.slice(indiceInicio, indiceFin);


    // Informacion necesaria para la barra de navegacion
    // Cantidad total de páginas, con o sin busqueda
    const totalPaginas = Math.ceil(filtrarOrdenes.length / ordenesPorPagina);
    // Función para cambiar a una página específica
    const irAPagina = (pagina) => {
      setPaginaActual(pagina);
    };


    return (
      <>
        <div className="flex">
          <BarraCuenta />
          <main className="flex flex-col w-5/6">
            <section className="p-4">
              <p className="text-xl font-bold">Órdenes</p>
            </section>
            <section className="p-4">
              <input
                type="text"
                name="BuscarN-A-NO"
                id="BuscarN-A-NO"
                placeholder="Buscar por nombre o apellido de usuario o nro de orden..."
                className="w-full px-4 py-2 rounded-md bg-gray-200 text-gray-800 focus:outline-none focus:bg-white"
                value={buscarOrden}
                onChange={handleSearchChange}
              />
            </section>
            <section className="p-3.5 text-sm">
              {/* Cabecera de la lista de ordenes */}
              <article className="flex bg-gray-300 p-2">
                <p className="flex-none w-28">ID</p>
                <p className="flex-auto w-96">Usuario</p>
                <p className="flex-none w-24">Fecha Orden</p>
                <p className="flex-none w-20">Total</p>
                <p className="flex-auto w-96">Correo</p>
                <p className="flex-none w-24">Estado</p>
                <p className="flex-none w-20 text-center">Acciones</p>
              </article>
              {/* Cuerpo de la lista de ordenes */}
              {ordenesEnPagina.map(orden => (
                <article key={orden.id} className="flex bg-white p-2">
                  <p className="flex-none w-28">{orden.id}</p>
                  <p className="flex-auto w-96">{orden.nombre + " " + orden.apellido}</p>
                  <p className="flex-none w-24">{orden.fechaOrden}</p>
                  <p className="flex-none w-20">{orden.total}</p>
                  <p className="flex-auto w-96">{orden.correo}</p>
                  <p className="flex-none w-24">{orden.estado}</p>
                  {/* Columna de Acciones */}
                  <p className="flex-none w-20 grid justify-center">
                    <Link to={`/Admin/OrdenLog/Detail/${orden.id}`} className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2">Ver</Link>
                  </p>
                </article>
              ))}
            </section>

            {/* Barra de paginación */}
            <section>
              <BarraPaginacion
                paginaActual={paginaActual}
                totalPaginas={totalPaginas}
                onChangePagina={irAPagina}
              />
            </section>
          </main>
        </div>
      </>
    );
  }

  export default Ordenes;