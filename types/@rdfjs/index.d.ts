declare module '@rdfjs/namespace' {
  function factory(ns: string): any;
  export = factory
}

declare module '@rdfjs/parser-n3' {
  import { Sink, Stream } from 'rdf-js';

  class Parser implements Sink {
    import(stream: Stream): any;
  }

  export = Parser
}