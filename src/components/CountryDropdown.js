import React, { useContext, useEffect, useState } from 'react'
import QuestionContext from '../utils/QuestionContext';

const CountryDropdown = ({ handleSelect }) => {
    const [country, setCountry] = useState("");
    const [countryList, setCountryList] = useState({});
    const [filteredCountryList, setFilteredCountryList] = useState({});
    const [countryCode, setCountryCode] = useState({});
    const { setCountryName } = useContext(QuestionContext);
    const getCountryDetails = async () => {
        const data = await fetch("https://flagcdn.com/en/codes.json");
        const json = await data.json();
        setCountryList(json);
        setFilteredCountryList(json);
        console.log("JSON", json);
        const phoneData = await fetch("http://country.io/phone.json");
        const jsondata = await phoneData.json();
        setCountryCode(jsondata)
    }
    const selectCountry = (country) => {
        setCountryName(country);
        handleSelect(false);
    }
    const filterCountry = () => {
        const filtered = {}
        Object.keys(countryList).forEach(c => {
            if (countryList[c].toUpperCase().includes(country.toUpperCase())) {
                filtered[c] = countryList[c];
            }
        })
        setFilteredCountryList(filtered);
    }
    useEffect(() => {
        getCountryDetails()
    }, [])

    useEffect(() => {
        const t = setTimeout(() => {
            Object.keys(countryList).length > 0 && filterCountry()
        }, 500);
        return () => clearTimeout(t);
    }, [country])
    return (
        <div className='country-dropdown-div'>
            <input type="text" onChange={(e) => setCountry(e.target.value)} name="country" id="country" className='country-dropdown-input input-text-field' placeholder="Search country" value={country} />
            <div className='country-list'>
                {
                    Object.keys(filteredCountryList).map((_country) => {
                        if (countryCode[_country.toUpperCase()]) {
                            return <div className='country-info' key={_country} onClick={() => selectCountry(_country)}>
                                <div className='country-details'>
                                    <img
                                        src={"https://flagcdn.com/20x15/" + _country.toLowerCase() + ".png"}
                                        srcset={"https://flagcdn.com/40x30/" + _country.toLowerCase() + ".png 2x,https://flagcdn.com/60x45/" + _country.toLowerCase() + ".png 3x"}
                                        width="20"
                                        height="15"
                                        className='country-flag'
                                        alt={countryList[_country.toLowerCase()]} />
                                    <span className='country-name'>{countryList[_country.toLowerCase()]}</span>
                                </div>
                                <div className='country-code'>+{countryCode[_country.toUpperCase()]}</div>
                            </div>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default CountryDropdown