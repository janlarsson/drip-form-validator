import * as assert from 'power-assert';
import { createNormalizeTester } from '../../src/';

const normalizer = 'rtrim';
const tester = createNormalizeTester(assert, normalizer);

describe(`Normalizers#${normalizer}`, () => {
  it('Should be normalize', () => {
    tester([
      { value: ' test ', params: true, expect: ' test' },
      { value: ' hoge fuga ', params: true, expect: ' hoge fuga' },
      { value: '\n foo bar \n', params: true, expect: '\n foo bar' },
      { value: '/slashes/', params: '/', expect: '/slashes' },
      { value: '"quote"', params: '"', expect: '"quote' },
      { value: 10, params: true, expect: '10' },
      { value: NaN, params: true, expect: 'NaN' },
      { value: Infinity, params: true, expect: 'Infinity' },
      { value: null, params: true, expect: null },
    ]);
  });
});
