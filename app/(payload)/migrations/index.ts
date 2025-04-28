import * as migration_20250428_150102 from './20250428_150102';

export const migrations = [
  {
    up: migration_20250428_150102.up,
    down: migration_20250428_150102.down,
    name: '20250428_150102'
  }
];
