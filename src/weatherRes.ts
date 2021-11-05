export default interface Weather {
    data: {
        main: { temp: number };
        name: string;
    }
  }