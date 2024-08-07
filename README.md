# <img src="https://i.imgur.com/7HolFch.png" alt="Batman Favicon" width="40" height="30"> Batman Characters API Project

## Overview

This project is a Strapi-based API that provides information on various endpoints related to Batman characters, locations, concepts, and storylines. The API is currently under development, and contributions are not yet permitted.

## Endpoints

### GET /characters

Retrieve a paginated list of all Batman characters. Each page contains up to 10 characters.

### GET /locations

Retrieve a paginated list of all locations in the Batman universe. Each page contains up to 10 locations.

### GET /concepts

Retrieve a paginated list of all concepts related to Batman. Each page contains up to 10 concepts.

### GET /storylines

Retrieve a paginated list of all Batman storylines. Each page contains up to 10 storylines.

## Usage

For production use, the API is available at:

- `https://api.batmanapi.com/v1/characters`
- `https://api.batmanapi.com/v1/locations`
- `https://api.batmanapi.com/v1/concepts`
- `https://api.batmanapi.com/v1/storylines`

You can test the endpoints using a tool like Thunder Client or simply by visiting the endpoints in your web browser.

Example:

- `GET https://api.batmanapi.com/v1/characters`

### Pagination

All endpoints support pagination. To retrieve specific pages, use the `pagination[page]` query parameter.

Example:

- `GET https://api.batmanapi.com/v1/characters?pagination[page]=2`

Each page contains up to 10 items.

## Contributing

This project is currently under development, and contributions are not yet permitted. Please check back later for updates on how you can contribute.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or inquiries, please contact [jc@jccm.dev](mailto:jc@jccm.dev).
