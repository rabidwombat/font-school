export class InMemoryDataService {
  createDb() {
    let fonts = [
      
      { id: 100, name: "Apple Casual", isSerif: false, monospace: false },
      { id: 110, name: "Apple Chancery", isSerif: false, monospace: false },
      { id: 120, name: "Apple Garamond", isSerif: true, monospace: false },
      { id: 130, name: "Apple Gothic", isSerif: false, monospace: false },
      { id: 140, name: "Arial", isSerif: false, monospace: false },
      { id: 150, name: "Baskerville", isSerif: true, monospace: false },
      { id: 160, name: "Bookman", isSerif: true, monospace: false },
      { id: 170, name: "Big Caslon", isSerif: false, monospace: false },
      { id: 180, name: "Brush Script", isSerif: false, monospace: false },
      { id: 190, name: "Century Schoolbook", isSerif: true, monospace: false },
      { id: 200, name: "Chalkboard", isSerif: true, monospace: false },
      { id: 210, name: "Comic Sans MS", isSerif: true, monospace: false },
      { id: 210, name: "Didot", isSerif: true, monospace: false },
      { id: 210, name: "Futura", isSerif: false, monospace: false },
      { id: 210, name: "Geneva", isSerif: false, monospace: false },
      { id: 210, name: "Menlo", isSerif: false, monospace: false },
      { id: 15, name: "Courier", isSerif: true, monospace: true },
      { id: 16, name: "Courier New", isSerif: true, monospace: true },
      { id: 10, name: "Helvetica", isSerif: false, monospace: false },
      { id: 12, name: "Times", isSerif: true, monospace: false },
      { id: 13, name: "Times New Roman", isSerif: true, monospace: false },
      { id: 17, name: "Tahoma", isSerif: false, monospace: false },
      { id: 18, name: "Verdana", isSerif: false, monospace: false },
      { id: 19, name: "Palatino", isSerif: true, monospace: false },
      { id: 20, name: "Franklin Gothic Book", isSerif: true, monospace: false },
      { id: 21, name: "Georgia", isSerif: true, monospace: false },
      { id: 23, name: "Garamond", isSerif: true, monospace: false },
      { id: 24, name: "Avant Garde", isSerif: true, monospace: false },
      { id: 25, name: "Arial Black", isSerif: false, monospace: false },
      { id: 26, name: "Impact", isSerif: true, monospace: false },
      { id: 28, name: "Monaco", isSerif: true, monospace: true },
      { id: 29, name: "Andale Mono", isSerif: true, monospace: true },
      { id: 30, name: "American Typewriter", isSerif: true, monospace: false },
      { id: 31, name: "Noteworthy Light", isSerif: true, monospace: false },
      { id: 32, name: "Playbill", isSerif: true, monospace: false },
      { id: 33, name: "Onyx", isSerif: true, monospace: false }
    ];

    let quotes = [
      'The poets and artists and philosophers, resistance activists, secret scouts and troublemakers, had become, as they must, soldiers.',
      'He meant rather that the evolution of our minds from bits of inantimate matter was more beautiful and more extraordinary than any of the miracles cataloged down through the ages by the religions of the world.',
      'So much of life is cobbled together when plans go awry.  That is often where happiness comes from.',
      'Only humans dread.  Dread is appropriate to nothing.  It\'s the surplus of animal fear, it\'s never indicated, it\'s nothing but itself.',
      'Most of the time what our patients need is a compassionate, rigorous, sympathetic interlocutor. Sometimes ' +
        'the externalized trauma-vectors in dysfunctional interpersonal codependent psychodynamics are powerful enough ' +
        'that more robust therapeutic intervention is necessary. I checked my ammunition.',
      'It was heading for a land of ghosts, or talking wolves, or men and women whose eyes were jewels or who had teeth like ' +
        'polished coal, or a land of sentient coral, or an empire of fungus, or it was heading somewhere else, maybe.',
      'For every action, there\'s an infinity of outcomes. Countless trillions are possible, many milliards are likely, millions ' +
        'might be considered probable, several occur as possibilities to us as observers - and one comes true.',
      '\"Our opponent is an alien starship packed with atomic bombs,\" I said. \"We have a protractor.\"'
    ];

    return {fonts, quotes};
  }
}
