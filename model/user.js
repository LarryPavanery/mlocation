"strict";

/*
ip (Visitor IP address, or IP address specified as parameter)
country_code (Two-letter ISO 3166-1 alpha-2 country code)
country_code3 (Three-letter ISO 3166-1 alpha-3 country code)
country (Name of the country)
region_code (Two-letter ISO-3166-2 state / region code)
region (Name of the region)
city (Name of the city)
postal_code (Postal code / Zip code)
continent_code (Two-letter continent code)
latitude (Latitude)
longitude (Longitude)
dma_code (DMA Code)
area_code (Area Code)
asn (Autonomous System Number)
isp (Internet service provider)
timezone (Time Zone)

{ longitude: abc,
  latitude: abc,
  asn: 'abc',
  offset: 'abc',
  ip: 'abc',
  area_code: 'abc',
  continent_code: 'abc',
  dma_code: 'abc',
  city: 'abc',
  timezone: 'abc',
  region: 'abc',
  country_code: 'abc',
  isp: 'abc',
  country: 'abc',
  country_code3: 'abc',
  region_code: 'abc' 
}
*/

exports.User = function User (params) {
	this.longitude = params.longitude;
	this.latitude = params.latitude;
	this.asn = params.asn;
	this.offset = params.offset;
	this.ip = params.ip;
	this.area_code = params.area_code;
	this.continent_code = params.continent_code;
	this.dma_code = params.dma_code;
	this.city = params.city;
	this.timezone = params.timezone;
	this.region = params.region;
	this.country_code = params.country_code;
	this.isp = params.isp;
	this.country = params.country;
	this.country_code3 = params.country_code3;
	this.region_code = params.region_code;
	this.last_register = new Date().toLocaleString();
	
}