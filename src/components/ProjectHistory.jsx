import { Icon } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import LocationIcon from '../../public/assets/location.png'
import "leaflet/dist/leaflet.css";
import "./leaflet.css";

const ProjectHistory = () => {
    const customIcon = new Icon({
        iconUrl: LocationIcon,
        iconSize: [38, 41],
      });

  const cikarang = [-6.311641605597943, 107.15554396729084];
  const garut = [-7.223550074653369, 107.90895768657481];
  const luwuk = [-1.2510480595499018, 122.5878458531579];
  const duriRiau = [1.2614560060147388, 101.21315092244336];
  const dumaiRiau = [1.6906702325872334, 101.44012005981412];
  const lautNatuna = [4.819254177591354, 107.97974802700037];
  const balikpapan = [-1.2493510522882323, 116.85129606115505];
  const aceh = [4.958834646867297, 97.00863418962632];
  const riau = [0.29909235899008896, 101.72517617513557];
  const gresik = [-7.1571736057261734, 112.65740287738636];
  const cilegon = [-5.914067493156875, 106.06044366706233];
  const medan = [3.6093855382131856, 98.69156749328344];
  const endeNTT = [-8.820279924245764, 121.64462036516024];
  const kepulauanRiau = [1.0029279144213892, 103.87037637623926];
  const tuban = [-6.890553228517576, 112.04938870985946];
  const handil = [-0.7499846765818581, 117.2669163254967];
  const batam = [1.1759581495548208, 104.08651655028298];
  const jambi = [-1.6138664038420845, 103.6071196980109];
  const lautMadura = [-7.220444118300422, 113.1381792186182];
  const lampung = [-4.782819098375164, 105.33213564211161];
  const konaweUtara = [-3.436157946549953, 122.21692249588595];
  const telukBetuni = [-2.190976724376349, 133.44836522679154];

  return (
    <div style={{ height: `calc(100vh - 4rem)` }}>
      <MapContainer center={[-2.0090779812289976, 115.54282896518868]} zoom={5.4}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
        <Marker  position={cikarang}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2010-2011: JCF HWT DEMO <br /><span className="text-orange-500"> Pilot plant for asphalt maker with Stardom PLC </span> <br />
          2022: OKI-2 <br /><span className="text-orange-500"> MAC for OKI-2 Plant </span> <br />
          2023-Current: Indak Kiat Krawang FBB-1 <br /><span className="text-orange-500"> DCS, MCS, QCS for Folding Box Board Machine-1 </span> <br />
          </Popup>
        </Marker>

        <Marker  position={garut}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2011-2012: Chevron Darajat Welhead CIS, WMU, WHU, APD, PAD-SF <br /><span className="text-orange-500"> Geothermal welhead monitoring with modbus integration to DCS with Stardom PLC </span>
          </Popup>
        </Marker>

        <Marker  position={luwuk}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2012: Donggi Senoro LNG <br /><span className="text-orange-500"> Commissioning support, exaquantum historian, plant performance test </span> <br />
          2011-2014: Donggi Senoro LNG <br /><span className="text-orange-500"> MAC for Total Plant with Centum DCS and Prosafe SIS, BMS, FGS </span> 
          2014: Condensate Export Facility phase 1 <br /><span className="text-orange-500"> mist cooling package commissioning </span> <br />
          2015: Condensate Export Facility phase 2 <br /><span className="text-orange-500"> Automatic Tank Gauging system, DCS/SIS/FGS installation & commissiong </span> <br />
          2016: Donggi Senoro LNG  <br /><span className="text-orange-500"> LIMS Development and data automation </span> <br />
          2014-now: Donggi Senoro LNG <br /><span className="text-orange-500"> Plant operation & maintenance </span> <br />
          </Popup>
        </Marker>

        <Marker  position={duriRiau}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2004: Area-10 Refrofit Project <br /><span className="text-orange-500"> Instrument/control retrofit & commissioning </span> <br />
          2005: Area-11 Refrofit Project <br /><span className="text-orange-500"> Instrument/control retrofit & commissioning </span> <br />
          2006: Central Gathering Station 10 <br /><span className="text-orange-500"> DCS Replacement </span> <br />
          2006: Automatic Well Test <br /><span className="text-orange-500"> Develop portable truck for automatic well test </span> <br />
          2013-2015: Chevron Pacific Indonesia, NDD Area-13 <br /><span className="text-orange-500"> Automatic Wel Test with Stardom and Allen Bradley PLC </span>
          </Popup>
        </Marker>

        <Marker  position={dumaiRiau}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2014-2016: Reinstrumentation PLC HCC <br /><span className="text-orange-500"> Retrofit SIS for Compressor HCC </span>
          </Popup>
        </Marker>

        <Marker  position={lautNatuna}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2011: Supply of Gas Metering System for South Belut (Custody Gas Meter) <br /><span className="text-orange-500"> Ultrasonic installation, commissioning & training, SKK Migas & Ditjen MIGAS technical approval </span> <br />
          2013-2014: Premier Oil Naga-Pelikan Tie-In <br /><span className="text-orange-500"> MAC for Total Plant with Centum DCS and Prosafe SIS, FGS </span> <br />
          2015-2016: CS-3000 DCS Upgrade  <br /><span className="text-orange-500"> Upgrade DCS System </span> <br />
          2017-2018: Premier Oil Upgrade   <br /><span className="text-orange-500"> Upgrade MAC System </span>
          </Popup>
        </Marker>

        <Marker  position={balikpapan}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2012: Pertamina RU V Balikpapan-LPG Skid PDN (Custody Liquid Meter) <br /><span className="text-orange-500"> Turbine meter installation, commissioning & training, SKK Migas & Ditjen MIGAS technical approval </span> <br />
          2016-2018: Reinstrumentation BMS-V & VI <br /><span className="text-orange-500"> Retrofit from relay to PLC in BMS </span> <br />
          2018-2019: Reinstrumentation ESD BPP-I <br /><span className="text-orange-500"> Replacement SIS ICS Triplex to SIS Prosafe </span> <br />
          2018-2019: Upgrade DCS BPP-I <br /><span className="text-orange-500"> Upgrade DCS System </span> <br />
          2019-2022: Reinstrumentation ESD BPP-II <br /><span className="text-orange-500"> Reconfiguration plant with online execution for replacement SIS ICS Triplex to SIS Prosafe </span> <br />
          2020-2022: TSC and ODS modification for K301A/B & K302 <br /><span className="text-orange-500"> Modification for Turbines speed control and Overspeed detection for 3 Main Compressor </span> <br />
          </Popup>
        </Marker>

        <Marker  position={aceh}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2016-2017: Medco Block-A Gas Metering <br /><span className="text-orange-500"> Metering System </span>
          </Popup>
        </Marker>

        <Marker  position={riau}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2017: RAPP O2 DCS Replacment <br /><span className="text-orange-500"> DCS Replacement with 1x24 hours time execution </span>
          </Popup>
        </Marker>

        <Marker  position={gresik}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2017-2018: Smelting ACID Modification <br /><span className="text-orange-500"> DCS modification for merging station </span>
          </Popup>
        </Marker>

        <Marker  position={cilegon}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2021-2022: FEED CAP-2 <br /><span className="text-orange-500"> FEED for MAC CAP-2 </span>
          </Popup>
        </Marker>

        <Marker  position={medan}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2006-2008: Rehabilitasi dan Pengadaan SCADA Sistem Sumut-Aceh <br /><span className="text-orange-500"> SCADA system replacement (turn key project) </span> <br />
          2009: Musim Mas DCS Installation <br /><span className="text-orange-500"> New DCS installation for Fatty Acid & Ester-2 Plant, commissioning and training </span> <br />
          </Popup>
        </Marker>

        <Marker  position={endeNTT}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2009: PLTU 2x7 MW Ende <br /><span className="text-orange-500"> Control system & commissioning </span>
          </Popup>
        </Marker>

        <Marker  position={kepulauanRiau}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2009: PLTU 2x7 MW Kepulauan Riau <br /><span className="text-orange-500"> Control system & commissioning </span>
          </Popup>
        </Marker>

        <Marker  position={tuban}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2010: TPPI DCS/SIS/FGS installation <br /><span className="text-orange-500"> New DCS installation Plant, commissioning and training </span>
          </Popup>
        </Marker>

        <Marker  position={handil}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2010: Pearl Oil Ruby Tie In Total EP Gas & Condensate Custody Sales Metering Package <br /><span className="text-orange-500"> Ultrasonic & Turbine meter installation & commissioning, SKK Migas & Ditjen MIGAS technical approval </span> <br />
          2011: Pearl Oil Ruby Development Project– Gas & Condensate Meter (Allocation Gas Meter) <br /><span className="text-orange-500"> Ultrasonic & Turbine meter installation & commissioning, SKK Migas & Ditjen MIGAS technical approval </span> <br />
          </Popup>
        </Marker>

        <Marker  position={batam}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2011: Inti Daya Latu Prima Ultrasonic Meter <br /><span className="text-orange-500"> Ultrasonic installation, commissioning & training, SKK Migas & Ditjen MIGAS technical approval </span>
          </Popup>
        </Marker>

        <Marker  position={jambi}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2011: Petrochina Jabung Ultrasonic Meter <br /><span className="text-orange-500"> Ultrasonic installation, commissioning & training, SKK Migas & Ditjen MIGAS technical approval </span>
          </Popup>
        </Marker>

        <Marker  position={lautMadura}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2012: Santos 90, 100 &amp; 110 (Custody Allocation Gas Meter) <br /><span className="text-orange-500"> Turbine meter installation, commissioning & training, SKK Migas & Ditjen MIGAS technical approval </span>
          </Popup>
        </Marker>

        <Marker  position={lampung}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2013: PLTU Keban Agung 2x135 MW <br /><span className="text-orange-500"> DCS/SIS/FGS/BMS installation, package integtation </span>
          </Popup>
        </Marker>

        <Marker  position={konaweUtara}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2016: Stargate Pacific Resources <br /><span className="text-orange-500"> LIMS Development and data automation </span>
          </Popup>
        </Marker>

        <Marker  position={telukBetuni}  icon={customIcon}eventHandlers={{mouseover: (e) => {e.target.openPopup()}}}>
          <Popup>
          2013: Tangguh LNG <br /><span className="text-orange-500"> Establisment of LIMS design and concept  </span>
          </Popup>
        </Marker>



      </MapContainer>
    </div>
  );
};

export default ProjectHistory;
