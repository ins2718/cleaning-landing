const cities = ["Álava", "Albacete", "Alicante", "Almería", "Ávila", "Badajoz", "Islas Baleares",
    "Barcelona", "Burgos", "Cáceres", "Cádiz", "Castellón", "Ciudad Real", "Córdoba",
    "La Coruña", "Cuenca", "Gerona", "Granada", "Guadalajara", "Guipúzcoa", "Huelva", "Huesca",
    "Jaén", "León", "Lérida", "La Rioja", "Lugo", "Madrid", "Málaga",
    "Murcia", "Navarra", "Orense", "Asturias", "Palencia", "Las Palmas", "Pontevedra", "Salamanca",
    "Santa Cruz de Tenerife", "Cantabria", "Segovia", "Sevilla", "Soria", "Tarragona", "Teruel",
    "Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora", "Zaragoza", "Ceuta", "Melilla"];

export default class CitiesService {
    static getCityByZip = (zip: string = "") => {
        const codeString = zip.trim();
        if (codeString.length < 2 || codeString.length > 5) {
            return "";
        }
        const code = codeString.match(/^\d+$/) ? +codeString.substring(0, 2) : 0;
        return code > 0 && code <= cities.length ? cities[code - 1] : "";
    }
}