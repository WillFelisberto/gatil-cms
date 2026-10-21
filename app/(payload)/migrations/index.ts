import * as migration_20261021_103000_homepage_faq from './20261021_103000_homepage_faq';
import * as migration_20261020_230000_complete_landing_migration from './20261020_230000_complete_landing_migration';
import * as migration_20261020_220000_landing_editorial from './20261020_220000_landing_editorial';
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
  { up: migration_20261020_220000_landing_editorial.up, down: migration_20261020_220000_landing_editorial.down, name: '20261020_220000_landing_editorial' },
  { up: migration_20261020_230000_complete_landing_migration.up, down: migration_20261020_230000_complete_landing_migration.down, name: '20261020_230000_complete_landing_migration' },
  { up: migration_20261021_103000_homepage_faq.up, down: migration_20261021_103000_homepage_faq.down, name: '20261021_103000_homepage_faq' },
];
