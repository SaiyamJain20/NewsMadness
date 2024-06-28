import React from 'react'

function NavBar(props) {

    const countries = [
        { code: 'in', name: 'India' },
        { code: 'us', name: 'America' },
        { code: 'ca', name: 'Canada' },
    ];

    const categories = [
        { code: 'general', name: 'General' },
        { code: 'business', name: 'Business' },
        { code: 'entertainment', name: 'Entertainment' },
        { code: 'health', name: 'Health' },
        { code: 'science', name: 'Science' },
        { code: 'sports', name: 'Sports' },
        { code: 'technology', name: 'Technology' },
    ];

    const changeCountry = (event, countryCode) => {
        event.preventDefault();
        props.setCountry(countryCode);
    };

    const changeCategory = (event, category) => {
        event.preventDefault();
        props.setCategory(category);
    };

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Country
                            </a>
                            <ul className="dropdown-menu">
                                {countries.map(country => (
                                    <li key={country.code}>
                                    <a className="dropdown-item" href="/" onClick={(event) => changeCountry(event, country.code)}>
                                        {country.name}
                                    </a>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </a>
                            <ul className="dropdown-menu">
                                {categories.map(category => (
                                    <li key={category.code}>
                                    <a className="dropdown-item" href="/" onClick={(event) => changeCategory(event, category.code)}>
                                        {category.name}
                                    </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>      
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
