import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Polyfill para React 19 (se necessário)
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
