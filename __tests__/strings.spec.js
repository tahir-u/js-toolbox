
const strings = require('../utils/strings');

describe('utils -> strings', function() {
  describe('isEmpty', function() {
    it('should work on empty strings', function() {
      const string = '';

      expect(strings.isEmpty(string)).toEqual(true);
    });

    it('should work on non-empty strings', function() {
      const string = 'hello';

      expect(strings.isEmpty(string)).toEqual(false);
    });

    it('should work on undefined strings', function() {
      const string = undefined;

      expect(strings.isEmpty(string)).toEqual(true);
    });

    it('should work on null strings', function() {
      const string = null;

      expect(strings.isEmpty(string)).toEqual(true);
    });
  });

  describe('hasConsecutiveSubstring', function() {
    it('works on empty strings', function() {
      const a = '';
      const b = '';

      expect(strings.hasConsecutiveSubstring(a, b)).toEqual(false);
    });

    it('works on non-empty strings', function() {
      const a = 'hello';
      const b = 'ell';

      expect(strings.hasConsecutiveSubstring(a, b)).toEqual(true);
    });

    it('works in a case-insensitive manner', function() {
      const a = 'HELLO';
      const b = 'ell';

      expect(strings.hasConsecutiveSubstring(a, b)).toEqual(true);
    });
  });

  describe('hasConsecutiveCaseSensitiveSubstring', function() {
    it('works on empty strings', function() {
      const a = '';
      const b = '';

      expect(strings.hasConsecutiveCaseSensitiveSubstring(a, b)).toEqual(false);
    });

    it('works on non-empty strings', function() {
      const a = 'hello';
      const b = 'ell';

      expect(strings.hasConsecutiveCaseSensitiveSubstring(a, b)).toEqual(true);
    });

    it('works in a case-sensitive manner', function() {
      const a = 'HELLO';
      const b = 'ell';

      expect(strings.hasConsecutiveCaseSensitiveSubstring(a, b)).toEqual(false);
    });
  });
});