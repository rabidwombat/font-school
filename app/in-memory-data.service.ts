export class InMemoryDataService {
  createDb() {
    let fonts = [
      { id: 10, name: "Helvetica", isSerif: false, monospace: false },
      { id: 11, name: "Arial", isSerif: false, monospace: false },
      { id: 12, name: "Times", isSerif: true, monospace: false },
      { id: 13, name: "Times New Roman", isSerif: true, monospace: false },
      { id: 14, name: "Comic Sans MS", isSerif: true, monospace: false },
      { id: 15, name: "Courier", isSerif: true, monospace: true },
      { id: 16, name: "Courier New", isSerif: true, monospace: true },
      { id: 17, name: "Tahoma", isSerif: false, monospace: false },
      { id: 18, name: "Verdana", isSerif: false, monospace: false },
      { id: 19, name: "Palatino", isSerif: true, monospace: false },
      { id: 20, name: "Franklin Gothic Book", isSerif: true, monospace: false },
      { id: 21, name: "Georgia", isSerif: true, monospace: false },
      { id: 22, name: "Bookman", isSerif: true, monospace: false },
      { id: 23, name: "Garamond", isSerif: true, monospace: false },
      { id: 24, name: "Avant Garde", isSerif: true, monospace: false },
      { id: 25, name: "Arial Black", isSerif: false, monospace: false },
      { id: 26, name: "Impact", isSerif: true, monospace: false },
      { id: 27, name: "Century Schoolbook", isSerif: true, monospace: false },
      { id: 28, name: "Monaco", isSerif: true, monospace: true },
      { id: 29, name: "Andale Mono", isSerif: true, monospace: true },
      { id: 30, name: "American Typewriter", isSerif: true, monospace: false },
      { id: 31, name: "Noteworthy Light", isSerif: true, monospace: false },
      { id: 32, name: "Playbill", isSerif: true, monospace: false },
      { id: 33, name: "Onyx", isSerif: true, monospace: false },

    ];
    return {fonts};
  }
}

