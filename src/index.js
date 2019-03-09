#!/usr/bin/env node
const { spawnSync } = require('child_process');
const resolveBin = require('resolve-bin');

spawnSync(
	resolveBin.sync('yo/package.json', {
		executable: 'yo'
	}),
	[].concat(
		'trigen-app',
		process.argv.slice(2)
	), {
		stdio: 'inherit'
	}
);
