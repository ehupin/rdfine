# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.1.0](https://github.com/tpluscode/rdfine/compare/@rdfine/schema@0.0.2...@rdfine/schema@0.1.0) (2020-04-01)


### Bug Fixes

* **vocabularies:** missing @rdfjs/namespace dependency ([a1a8bad](https://github.com/tpluscode/rdfine/commit/a1a8bad))
* use same method to slugify dimension table id ([9d9205f](https://github.com/tpluscode/rdfine/commit/9d9205f))
* **generator:** do not require namespace for common namespaces ([d5d68ed](https://github.com/tpluscode/rdfine/commit/d5d68ed))


### Features

* **build:** only package es modules and esm node export ([4d5fa5b](https://github.com/tpluscode/rdfine/commit/4d5fa5b))
* **generator:** add mixin cast to rdf:range properties ([fa4e188](https://github.com/tpluscode/rdfine/commit/fa4e188))


### BREAKING CHANGES

* **build:** some exports have been moved





## [0.0.2](https://github.com/tpluscode/rdfine/compare/@rdfine/schema@0.0.1...@rdfine/schema@0.0.2) (2020-03-25)


### Bug Fixes

* **core:** simplify resource initialization ([cfc6731](https://github.com/tpluscode/rdfine/commit/cfc673171c0b969b52b890d375aac093a4024093))





## 0.0.1 (2020-03-25)


### Bug Fixes

* **core:** plain intialization impossible with union type properties ([a545e48](https://github.com/tpluscode/rdfine/commit/a545e485b1827df15788ffacfe6907b408bd5de1))
* **generator:** generate type-only imports of rdf-js ([30c40d1](https://github.com/tpluscode/rdfine/commit/30c40d145c54cf9b1f72cc9c594d695e8222eee1))
* **schema:** schema:URL should be treated as rdfResource ([cd037ac](https://github.com/tpluscode/rdfine/commit/cd037ac51801bb2ce183f8337631df46aea5d1de))


### Features

* **generator:** create classes which can be easily initialized ([3fb0900](https://github.com/tpluscode/rdfine/commit/3fb090087cc7feba2c1cc258bb3db46a52f363d5))
* handle deep initialization from plain object ([0fd30af](https://github.com/tpluscode/rdfine/commit/0fd30af410d7cc0462ce78868da6f383c21305f1))
* **generator:** first version of generated schema.org ([1759e17](https://github.com/tpluscode/rdfine/commit/1759e17eba36930bfeeb17b693e823b830495350))