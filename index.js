//write your code below!
/*
describe('functions', () => {
  describe('happyHolidays', () => {
    it('returns "Happy holidays!"', () => {
      expect(happyHolidays()).toEqual('Happy holidays!')
    })
  })
  */
  function happyHolidays(){
    return ("Happy holidays!")
  }

/*
describe('happyHolidaysTo(name)', () => {
  it('returns "Happy holidays, ${name}!"', () => {
    expect(happyHolidaysTo('you')).toEqual('Happy holidays, you!')
    expect(happyHolidaysTo('everyone')).toEqual('Happy holidays, everyone!')
  })
})
*/
function happyHolidaysTo(name){
  return (`Happy holidays, ${name}!`)
}
/*

  describe('happyCustomHolidayTo(holiday, name)', () => {
    it('returns "Happy ${holiday}, ${name}!"', () => {
      expect(happyCustomHolidayTo('Independence Day', 'you')).toEqual('Happy Independence Day, you!')
      expect(happyCustomHolidayTo('New Year', 'everyone')).toEqual('Happy New Year, everyone!')
    })
  })
  */
  function happyCustomHolidayTo(holiday, name){
    return (`Happy ${holiday}, ${name}!`)
  }
  