import * as migration_20250428_150102 from './20250428_150102';
import * as migration_20250429_143440 from './20250429_143440';

export const migrations = [
  {
    up: migration_20250428_150102.up,
    down: migration_20250428_150102.down,
    name: '20250428_150102',
  },
  {
    up: migration_20250429_143440.up,
    down: migration_20250429_143440.down,
    name: '20250429_143440'
  },
];
