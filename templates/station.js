$(document).ready(function() {
$dp_line = $("select[name='dp_line']");
$depart = $("select[name='depart']");
$ar_line = $("select[name='ar_line']");
$arrive = $("select[name='arrive']");

$dp_line.change(function() {

if ($(this).val() == "Please select a line"){
$("select[name='depart'] option").remove();
$("<option> Please select a station</option>").appendTo($depart);
}

if ($(this).val() == "Red Line") {
$("select[name='depart'] option").remove();
$("<option value='A11'> Bethesda </option>").appendTo($depart);
$("<option value='B05'> Brookland-CUA </option>").appendTo($depart);
$("<option value='A05'> Clevland Park </option>").appendTo($depart);
$("<option value='A03'> Dupont Circle </option>").appendTo($depart);
$("<option value='A02'> Farragut North </option>").appendTo($depart);
$("<option value='B09'> Forest Glen </option>").appendTo($depart);
$("<option value='B06'> Fort Totten </option>").appendTo($depart);
$("<option value='A08'> Friendship Heights </option>").appendTo($depart);
$("<option value='B01'> Gallery Pl-Chinatown </option>").appendTo($depart);
$("<option value='B11'> Glenmont </option>").appendTo($depart);
$("<option value='A11'> Grosvenor-Strathmore </option>").appendTo($depart);
$("<option value='B02'> Judiciary Square </option>").appendTo($depart);
$("<option value='A10'> Medical Center </option>").appendTo($depart);
$("<option value='A01'> Metro Center </option>").appendTo($depart);
$("<option value='B35'> NoMa-Gallaudet U </option>").appendTo($depart);
$("<option value='B04'> Rhode Island Ave-Brentwood </option>").appendTo($depart);
$("<option value='A14'> Rockville </option>").appendTo($depart);
$("<option value='A15'> Shady Grove </option>").appendTo($depart);
$("<option value='B08'> Silver Spring </option>").appendTo($depart);
$("<option value='B07'> Takoma </option>").appendTo($depart);
$("<option value='A07'> Tenleytown-AU </option>").appendTo($depart);
$("<option value='A13'> Twinbrook </option>").appendTo($depart);
$("<option value='B03'> Union Station </option>").appendTo($depart);
$("<option value='A06'> Van Ness-UDC </option>").appendTo($depart);
$("<option value='B10'> Wheaton </option>").appendTo($depart);
$("<option value='A12'> White Flint </option>").appendTo($depart);
$("<option value='A04'> Woodley Park-Zoo/Adams Morgan </option>").appendTo($depart);
}

if ($(this).val() == "Yellow Line") {
$("select[name='depart'] option").remove();
$("<option value='F02'>Archives-Navy Memorial-Penn Quarter</option>").appendTo($depart);
$("<option value='C12'>Braddock Road</option>").appendTo($depart);
$("<option value='E04'>Columbia Heights</option>").appendTo($depart);
$("<option value='C09'>Crystal City</option>").appendTo($depart);
$("<option value='C14'>Eisenhower Avenue</option>").appendTo($depart);
$("<option value='E06'>Fort Totten</option>").appendTo($depart);
$("<option value='F01'>Gallery Pl-Chinatown</option>").appendTo($depart);
$("<option value='E05'>Georgia Ave-Petworth</option>").appendTo($depart);
$("<option value='C15'>Huntington</option>").appendTo($depart);
$("<option value='C13'>King St-Old Town</option>").appendTo($depart);
$("<option value='F03'>L'Enfant Plaza</option>").appendTo($depart);
$("<option value='E01'>Mt Vernon Sq 7th St-Convention Center</option>").appendTo($depart);
$("<option value='C07'>Pentagon</option>").appendTo($depart);
$("<option value='C08'>Pentagon City</option>").appendTo($depart);
$("<option value='C10'>Ronald Reagan Washington National Airport</option>").appendTo($depart);
$("<option value='E02'>Shaw-Howard U</option>").appendTo($depart);
$("<option value='E03'>U Street/African-Amer Civil War Memorial/Cardozo</option>").appendTo($depart);

}

if ($(this).val() == "Green Line") {
$("select[name='depart'] option").remove();
$("<option value='F06'>Anacostia</option>").appendTo($depart);
$("<option value='F02'>Archives-Navy Memorial-Penn Quarter</option>").appendTo($depart);
$("<option value='F11'>Branch Ave</option>").appendTo($depart);
$("<option value='E09'>College Park-U of Md</option>").appendTo($depart);
$("<option value='E04'>Columbia Heights</option>").appendTo($depart);
$("<option value='F07'>Congress Heights</option>").appendTo($depart);
$("<option value='E06'>Fort Totten</option>").appendTo($depart);
$("<option value='F01'>Gallery Pl-Chinatown</option>").appendTo($depart);
$("<option value='E05'>Georgia Ave-Petworth</option>").appendTo($depart);
$("<option value='E10'>Greenbelt</option>").appendTo($depart);
$("<option value='F03'>L'Enfant Plaza</option>").appendTo($depart);
$("<option value='E01'>Mt Vernon Sq 7th St-Convention Center</option>").appendTo($depart);
$("<option value='F05'>Navy Yard-Ballpark</option>").appendTo($depart);
$("<option value='F09'>Naylor Road</option>").appendTo($depart);
$("<option value='E08'>Prince George's Plaza</option>").appendTo($depart);
$("<option value='E02'>Shaw-Howard U</option>").appendTo($depart);
$("<option value='F08'>Southern Avenue</option>").appendTo($depart);
$("<option value='F10'>Suitland</option>").appendTo($depart);
$("<option value='E03'>U Street/African-Amer Civil War Memorial/Cardozo</option>").appendTo($depart);
$("<option value='F04'>Waterfront</option>").appendTo($depart);
$("<option value='E07'>West Hyattsville</option>").appendTo($depart);

}

if ($(this).val() == "Blue Line") {
$("select[name='depart'] option").remove();
$("<option value='G03'>Addison Road-Seat Pleasant</option>").appendTo($depart);
$("<option value='C06'>Arlington Cemetery</option>").appendTo($depart);
$("<option value='G01'>Benning Road</option>").appendTo($depart);
$("<option value='C12'>Braddock Road</option>").appendTo($depart);
$("<option value='G02'>Capitol Heights</option>").appendTo($depart);
$("<option value='D05'>Capitol South</option>").appendTo($depart);
$("<option value='C09'>Crystal City</option>").appendTo($depart);
$("<option value='D06'>Eastern Market</option>").appendTo($depart);
$("<option value='C03'>Farragut West</option>").appendTo($depart);
$("<option value='D04'>Federal Center SW</option>").appendTo($depart);
$("<option value='D01'>Federal Triangle</option>").appendTo($depart);
$("<option value='C04'>Foggy Bottom-GWU</option>").appendTo($depart);
$("<option value='J03'>Franconia-Springfield</option>").appendTo($depart);
$("<option value='C13'>King St-Old Town</option>").appendTo($depart);
$("<option value='D03'>L'Enfant Plaza</option>").appendTo($depart);
$("<option value='G05'>Largo Town Center</option>").appendTo($depart);
$("<option value='C02'>McPherson Square</option>").appendTo($depart);
$("<option value='C01'>Metro Center</option>").appendTo($depart);
$("<option value='G04'>Morgan Boulevard</option>").appendTo($depart);
$("<option value='C07'>Pentagon</option>").appendTo($depart);
$("<option value='C08'>Pentagon City</option>").appendTo($depart);
$("<option value='D07'>Potomac Ave</option>").appendTo($depart);
$("<option value='C10'>Ronald Reagan Washington National Airport</option>").appendTo($depart);
$("<option value='C05'>Rosslyn</option>").appendTo($depart);
$("<option value='D02'>Smithsonian</option>").appendTo($depart);
$("<option value='D08'>Stadium-Armory</option>").appendTo($depart);
$("<option value='J02'>Van Dorn Street</option>").appendTo($depart);

}

if ($(this).val() == "Orange Line") {
$("select[name='depart'] option").remove();
$("<option value='K04'>Ballston-MU</option>").appendTo($depart);
$("<option value='D05'>Capitol South</option>").appendTo($depart);
$("<option value='D11'>Cheverly</option>").appendTo($depart);
$("<option value='K02'>Clarendon</option>").appendTo($depart);
$("<option value='K01'>Court House</option>").appendTo($depart);
$("<option value='D10'>Deanwood</option>").appendTo($depart);
$("<option value='K07'>Dunn Loring-Merrifield</option>").appendTo($depart);
$("<option value='K05'>East Falls Church</option>").appendTo($depart);
$("<option value='D06'>Eastern Market</option>").appendTo($depart);
$("<option value='C03'>Farragut West</option>").appendTo($depart);
$("<option value='D04'>Federal Center SW</option>").appendTo($depart);
$("<option value='D01'>Federal Triangle</option>").appendTo($depart);
$("<option value='C04'>Foggy Bottom-GWU</option>").appendTo($depart);
$("<option value='D03'>L'Enfant Plaza</option>").appendTo($depart);
$("<option value='D12'>Landover</option>").appendTo($depart);
$("<option value='C02'>McPherson Square</option>").appendTo($depart);
$("<option value='C01'>Metro Center</option>").appendTo($depart);
$("<option value='D09'>Minnesota Ave</option>").appendTo($depart);
$("<option value='D13'>New Carrollton</option>").appendTo($depart);
$("<option value='D07'>Potomac Ave</option>").appendTo($depart);
$("<option value='C05'>Rosslyn</option>").appendTo($depart);
$("<option value='D02'>Smithsonian</option>").appendTo($depart);
$("<option value='D08'>Stadium-Armory</option>").appendTo($depart);
$("<option value='K08'>Vienna/Fairfax-GMU</option>").appendTo($depart);
$("<option value='K03'>Virginia Square-GMU</option>").appendTo($depart);
$("<option value='K06'>West Falls Church-VT/UVA</option>").appendTo($depart);

}

if ($(this).val() == "Silver Line") {
$("select[name='depart'] option").remove();
$("<option value='G03'>Addison Road-Seat Pleasant</option>").appendTo($depart);
$("<option value='K04'>Ballston-MU</option>").appendTo($depart);
$("<option value='G01'>Benning Road</option>").appendTo($depart);
$("<option value='G02'>Capitol Heights</option>").appendTo($depart);
$("<option value='D05'>Capitol South</option>").appendTo($depart);
$("<option value='K02'>Clarendon</option>").appendTo($depart);
$("<option value='K01'>Court House</option>").appendTo($depart);
$("<option value='K05'>East Falls Church</option>").appendTo($depart);
$("<option value='D06'>Eastern Market</option>").appendTo($depart);
$("<option value='C03'>Farragut West</option>").appendTo($depart);
$("<option value='D04'>Federal Center SW</option>").appendTo($depart);
$("<option value='D01'>Federal Triangle</option>").appendTo($depart);
$("<option value='C04'>Foggy Bottom-GWU</option>").appendTo($depart);
$("<option value='N03'>Greensboro</option>").appendTo($depart);
$("<option value='D03'>L'Enfant Plaza</option>").appendTo($depart);
$("<option value='G05'>Largo Town Center</option>").appendTo($depart);
$("<option value='N01'>McLean</option>").appendTo($depart);
$("<option value='C02'>McPherson Square</option>").appendTo($depart);
$("<option value='C01'>Metro Center</option>").appendTo($depart);
$("<option value='G04'>Morgan Boulevard</option>").appendTo($depart);
$("<option value='D07'>Potomac Ave</option>").appendTo($depart);
$("<option value='C05'>Rosslyn</option>").appendTo($depart);
$("<option value='D02'>Smithsonian</option>").appendTo($depart);
$("<option value='N04'>Spring Hill</option>").appendTo($depart);
$("<option value='D08'>Stadium-Armory</option>").appendTo($depart);
$("<option value='N02'>Tysons Corner</option>").appendTo($depart);
$("<option value='K03'>Virginia Square-GMU</option>").appendTo($depart);
$("<option value='N06'>Wiehle-Reston East</option>").appendTo($depart);

}



});

$ar_line.change(function() {

if ($(this).val() == "Please select a line"){
$("select[name='arrive'] option").remove();
$("<option> Please select a station</option>").appendTo($arrive);
}

if ($(this).val() == "Red Line") {
$("select[name='arrive'] option").remove();
$("<option value='A11'> Bethesda </option>").appendTo($arrive);
$("<option value='B05'> Brookland-CUA </option>").appendTo($arrive);
$("<option value='A05'> Clevland Park </option>").appendTo($arrive);
$("<option value='A03'> Dupont Circle </option>").appendTo($arrive);
$("<option value='A02'> Farragut North </option>").appendTo($arrive);
$("<option value='B09'> Forest Glen </option>").appendTo($arrive);
$("<option value='B06'> Fort Totten </option>").appendTo($arrive);
$("<option value='A08'> Friendship Heights </option>").appendTo($arrive);
$("<option value='B01'> Gallery Pl-Chinatown </option>").appendTo($arrive);
$("<option value='B11'> Glenmont </option>").appendTo($arrive);
$("<option value='A11'> Grosvenor-Strathmore </option>").appendTo($arrive);
$("<option value='B02'> Judiciary Square </option>").appendTo($arrive);
$("<option value='A10'> Medical Center </option>").appendTo($arrive);
$("<option value='A01'> Metro Center </option>").appendTo($arrive);
$("<option value='B35'> NoMa-Gallaudet U </option>").appendTo($arrive);
$("<option value='B04'> Rhode Island Ave-Brentwood </option>").appendTo($arrive);
$("<option value='A14'> Rockville </option>").appendTo($arrive);
$("<option value='A15'> Shady Grove </option>").appendTo($arrive);
$("<option value='B08'> Silver Spring </option>").appendTo($arrive);
$("<option value='B07'> Takoma </option>").appendTo($arrive);
$("<option value='A07'> Tenleytown-AU </option>").appendTo($arrive);
$("<option value='A13'> Twinbrook </option>").appendTo($arrive);
$("<option value='B03'> Union Station </option>").appendTo($arrive);
$("<option value='A06'> Van Ness-UDC </option>").appendTo($arrive);
$("<option value='B10'> Wheaton </option>").appendTo($arrive);
$("<option value='A12'> White Flint </option>").appendTo($arrive);
$("<option value='A04'> Woodley Park-Zoo/Adams Morgan </option>").appendTo($arrive);
}

if ($(this).val() == "Yellow Line") {
$("select[name='arrive'] option").remove();
$("<option value='F02'>Archives-Navy Memorial-Penn Quarter</option>").appendTo($arrive);
$("<option value='C12'>Braddock Road</option>").appendTo($arrive);
$("<option value='E04'>Columbia Heights</option>").appendTo($arrive);
$("<option value='C09'>Crystal City</option>").appendTo($arrive);
$("<option value='C14'>Eisenhower Avenue</option>").appendTo($arrive);
$("<option value='E06'>Fort Totten</option>").appendTo($arrive);
$("<option value='F01'>Gallery Pl-Chinatown</option>").appendTo($arrive);
$("<option value='E05'>Georgia Ave-Petworth</option>").appendTo($arrive);
$("<option value='C15'>Huntington</option>").appendTo($arrive);
$("<option value='C13'>King St-Old Town</option>").appendTo($arrive);
$("<option value='F03'>L'Enfant Plaza</option>").appendTo($arrive);
$("<option value='E01'>Mt Vernon Sq 7th St-Convention Center</option>").appendTo($arrive);
$("<option value='C07'>Pentagon</option>").appendTo($arrive);
$("<option value='C08'>Pentagon City</option>").appendTo($arrive);
$("<option value='C10'>Ronald Reagan Washington National Airport</option>").appendTo($arrive);
$("<option value='E02'>Shaw-Howard U</option>").appendTo($arrive);
$("<option value='E03'>U Street/African-Amer Civil War Memorial/Cardozo</option>").appendTo($arrive);

}

if ($(this).val() == "Green Line") {
$("select[name='arrive'] option").remove();
$("<option value='F06'>Anacostia</option>").appendTo($arrive);
$("<option value='F02'>Archives-Navy Memorial-Penn Quarter</option>").appendTo($arrive);
$("<option value='F11'>Branch Ave</option>").appendTo($arrive);
$("<option value='E09'>College Park-U of Md</option>").appendTo($arrive);
$("<option value='E04'>Columbia Heights</option>").appendTo($arrive);
$("<option value='F07'>Congress Heights</option>").appendTo($arrive);
$("<option value='E06'>Fort Totten</option>").appendTo($arrive);
$("<option value='F01'>Gallery Pl-Chinatown</option>").appendTo($arrive);
$("<option value='E05'>Georgia Ave-Petworth</option>").appendTo($arrive);
$("<option value='E10'>Greenbelt</option>").appendTo($arrive);
$("<option value='F03'>L'Enfant Plaza</option>").appendTo($arrive);
$("<option value='E01'>Mt Vernon Sq 7th St-Convention Center</option>").appendTo($arrive);
$("<option value='F05'>Navy Yard-Ballpark</option>").appendTo($arrive);
$("<option value='F09'>Naylor Road</option>").appendTo($arrive);
$("<option value='E08'>Prince George's Plaza</option>").appendTo($arrive);
$("<option value='E02'>Shaw-Howard U</option>").appendTo($arrive);
$("<option value='F08'>Southern Avenue</option>").appendTo($arrive);
$("<option value='F10'>Suitland</option>").appendTo($arrive);
$("<option value='E03'>U Street/African-Amer Civil War Memorial/Cardozo</option>").appendTo($arrive);
$("<option value='F04'>Waterfront</option>").appendTo($arrive);
$("<option value='E07'>West Hyattsville</option>").appendTo($arrive);

}

if ($(this).val() == "Blue Line") {
$("select[name='arrive'] option").remove();
$("<option value='G03'>Addison Road-Seat Pleasant</option>").appendTo($arrive);
$("<option value='C06'>Arlington Cemetery</option>").appendTo($arrive);
$("<option value='G01'>Benning Road</option>").appendTo($arrive);
$("<option value='C12'>Braddock Road</option>").appendTo($arrive);
$("<option value='G02'>Capitol Heights</option>").appendTo($arrive);
$("<option value='D05'>Capitol South</option>").appendTo($arrive);
$("<option value='C09'>Crystal City</option>").appendTo($arrive);
$("<option value='D06'>Eastern Market</option>").appendTo($arrive);
$("<option value='C03'>Farragut West</option>").appendTo($arrive);
$("<option value='D04'>Federal Center SW</option>").appendTo($arrive);
$("<option value='D01'>Federal Triangle</option>").appendTo($arrive);
$("<option value='C04'>Foggy Bottom-GWU</option>").appendTo($arrive);
$("<option value='J03'>Franconia-Springfield</option>").appendTo($arrive);
$("<option value='C13'>King St-Old Town</option>").appendTo($arrive);
$("<option value='D03'>L'Enfant Plaza</option>").appendTo($arrive);
$("<option value='G05'>Largo Town Center</option>").appendTo($arrive);
$("<option value='C02'>McPherson Square</option>").appendTo($arrive);
$("<option value='C01'>Metro Center</option>").appendTo($arrive);
$("<option value='G04'>Morgan Boulevard</option>").appendTo($arrive);
$("<option value='C07'>Pentagon</option>").appendTo($arrive);
$("<option value='C08'>Pentagon City</option>").appendTo($arrive);
$("<option value='D07'>Potomac Ave</option>").appendTo($arrive);
$("<option value='C10'>Ronald Reagan Washington National Airport</option>").appendTo($arrive);
$("<option value='C05'>Rosslyn</option>").appendTo($arrive);
$("<option value='D02'>Smithsonian</option>").appendTo($arrive);
$("<option value='D08'>Stadium-Armory</option>").appendTo($arrive);
$("<option value='J02'>Van Dorn Street</option>").appendTo($arrive);

}

if ($(this).val() == "Orange Line") {
$("select[name='arrive'] option").remove();
$("<option value='K04'>Ballston-MU</option>").appendTo($arrive);
$("<option value='D05'>Capitol South</option>").appendTo($arrive);
$("<option value='D11'>Cheverly</option>").appendTo($arrive);
$("<option value='K02'>Clarendon</option>").appendTo($arrive);
$("<option value='K01'>Court House</option>").appendTo($arrive);
$("<option value='D10'>Deanwood</option>").appendTo($arrive);
$("<option value='K07'>Dunn Loring-Merrifield</option>").appendTo($arrive);
$("<option value='K05'>East Falls Church</option>").appendTo($arrive);
$("<option value='D06'>Eastern Market</option>").appendTo($arrive);
$("<option value='C03'>Farragut West</option>").appendTo($arrive);
$("<option value='D04'>Federal Center SW</option>").appendTo($arrive);
$("<option value='D01'>Federal Triangle</option>").appendTo($arrive);
$("<option value='C04'>Foggy Bottom-GWU</option>").appendTo($arrive);
$("<option value='D03'>L'Enfant Plaza</option>").appendTo($arrive);
$("<option value='D12'>Landover</option>").appendTo($arrive);
$("<option value='C02'>McPherson Square</option>").appendTo($arrive);
$("<option value='C01'>Metro Center</option>").appendTo($arrive);
$("<option value='D09'>Minnesota Ave</option>").appendTo($arrive);
$("<option value='D13'>New Carrollton</option>").appendTo($arrive);
$("<option value='D07'>Potomac Ave</option>").appendTo($arrive);
$("<option value='C05'>Rosslyn</option>").appendTo($arrive);
$("<option value='D02'>Smithsonian</option>").appendTo($arrive);
$("<option value='D08'>Stadium-Armory</option>").appendTo($arrive);
$("<option value='K08'>Vienna/Fairfax-GMU</option>").appendTo($arrive);
$("<option value='K03'>Virginia Square-GMU</option>").appendTo($arrive);
$("<option value='K06'>West Falls Church-VT/UVA</option>").appendTo($arrive);

}

if ($(this).val() == "Silver Line") {
$("select[name='arrive'] option").remove();
$("<option value='G03'>Addison Road-Seat Pleasant</option>").appendTo($arrive);
$("<option value='K04'>Ballston-MU</option>").appendTo($arrive);
$("<option value='G01'>Benning Road</option>").appendTo($arrive);
$("<option value='G02'>Capitol Heights</option>").appendTo($arrive);
$("<option value='D05'>Capitol South</option>").appendTo($arrive);
$("<option value='K02'>Clarendon</option>").appendTo($arrive);
$("<option value='K01'>Court House</option>").appendTo($arrive);
$("<option value='K05'>East Falls Church</option>").appendTo($arrive);
$("<option value='D06'>Eastern Market</option>").appendTo($arrive);
$("<option value='C03'>Farragut West</option>").appendTo($arrive);
$("<option value='D04'>Federal Center SW</option>").appendTo($arrive);
$("<option value='D01'>Federal Triangle</option>").appendTo($arrive);
$("<option value='C04'>Foggy Bottom-GWU</option>").appendTo($arrive);
$("<option value='N03'>Greensboro</option>").appendTo($arrive);
$("<option value='D03'>L'Enfant Plaza</option>").appendTo($arrive);
$("<option value='G05'>Largo Town Center</option>").appendTo($arrive);
$("<option value='N01'>McLean</option>").appendTo($arrive);
$("<option value='C02'>McPherson Square</option>").appendTo($arrive);
$("<option value='C01'>Metro Center</option>").appendTo($arrive);
$("<option value='G04'>Morgan Boulevard</option>").appendTo($arrive);
$("<option value='D07'>Potomac Ave</option>").appendTo($arrive);
$("<option value='C05'>Rosslyn</option>").appendTo($arrive);
$("<option value='D02'>Smithsonian</option>").appendTo($arrive);
$("<option value='N04'>Spring Hill</option>").appendTo($arrive);
$("<option value='D08'>Stadium-Armory</option>").appendTo($arrive);
$("<option value='N02'>Tysons Corner</option>").appendTo($arrive);
$("<option value='K03'>Virginia Square-GMU</option>").appendTo($arrive);
$("<option value='N06'>Wiehle-Reston East</option>").appendTo($arrive);

}

});

});