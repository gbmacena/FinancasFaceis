var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@prisma/client/runtime/library.js
var require_library = __commonJS({
  "node_modules/@prisma/client/runtime/library.js"(exports2, module2) {
    "use strict";
    var yu = Object.create;
    var qt = Object.defineProperty;
    var bu = Object.getOwnPropertyDescriptor;
    var Eu = Object.getOwnPropertyNames;
    var wu = Object.getPrototypeOf;
    var xu = Object.prototype.hasOwnProperty;
    var Do = (e, r) => () => (e && (r = e(e = 0)), r);
    var ne = (e, r) => () => (r || e((r = { exports: {} }).exports, r), r.exports);
    var tr = (e, r) => {
      for (var t in r) qt(e, t, { get: r[t], enumerable: true });
    };
    var _o = (e, r, t, n) => {
      if (r && typeof r == "object" || typeof r == "function") for (let i of Eu(r)) !xu.call(e, i) && i !== t && qt(e, i, { get: () => r[i], enumerable: !(n = bu(r, i)) || n.enumerable });
      return e;
    };
    var k = (e, r, t) => (t = e != null ? yu(wu(e)) : {}, _o(r || !e || !e.__esModule ? qt(t, "default", { value: e, enumerable: true }) : t, e));
    var vu = (e) => _o(qt({}, "__esModule", { value: true }), e);
    var mi = ne((_g, ss) => {
      "use strict";
      ss.exports = (e, r = process.argv) => {
        let t = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = r.indexOf(t + e), i = r.indexOf("--");
        return n !== -1 && (i === -1 || n < i);
      };
    });
    var us = ne((Ng, ls) => {
      "use strict";
      var Lc = require("os"), as = require("tty"), de = mi(), { env: Q } = process, Ge;
      de("no-color") || de("no-colors") || de("color=false") || de("color=never") ? Ge = 0 : (de("color") || de("colors") || de("color=true") || de("color=always")) && (Ge = 1);
      "FORCE_COLOR" in Q && (Q.FORCE_COLOR === "true" ? Ge = 1 : Q.FORCE_COLOR === "false" ? Ge = 0 : Ge = Q.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(Q.FORCE_COLOR, 10), 3));
      function fi(e) {
        return e === 0 ? false : { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 };
      }
      function gi(e, r) {
        if (Ge === 0) return 0;
        if (de("color=16m") || de("color=full") || de("color=truecolor")) return 3;
        if (de("color=256")) return 2;
        if (e && !r && Ge === void 0) return 0;
        let t = Ge || 0;
        if (Q.TERM === "dumb") return t;
        if (process.platform === "win32") {
          let n = Lc.release().split(".");
          return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
        }
        if ("CI" in Q) return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n) => n in Q) || Q.CI_NAME === "codeship" ? 1 : t;
        if ("TEAMCITY_VERSION" in Q) return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Q.TEAMCITY_VERSION) ? 1 : 0;
        if (Q.COLORTERM === "truecolor") return 3;
        if ("TERM_PROGRAM" in Q) {
          let n = parseInt((Q.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (Q.TERM_PROGRAM) {
            case "iTerm.app":
              return n >= 3 ? 3 : 2;
            case "Apple_Terminal":
              return 2;
          }
        }
        return /-256(color)?$/i.test(Q.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Q.TERM) || "COLORTERM" in Q ? 1 : t;
      }
      function Mc(e) {
        let r = gi(e, e && e.isTTY);
        return fi(r);
      }
      ls.exports = { supportsColor: Mc, stdout: fi(gi(true, as.isatty(1))), stderr: fi(gi(true, as.isatty(2))) };
    });
    var ds = ne((Fg, ps) => {
      "use strict";
      var $c = us(), br = mi();
      function cs(e) {
        if (/^\d{3,4}$/.test(e)) {
          let t = /(\d{1,2})(\d{2})/.exec(e) || [];
          return { major: 0, minor: parseInt(t[1], 10), patch: parseInt(t[2], 10) };
        }
        let r = (e || "").split(".").map((t) => parseInt(t, 10));
        return { major: r[0], minor: r[1], patch: r[2] };
      }
      function hi(e) {
        let { CI: r, FORCE_HYPERLINK: t, NETLIFY: n, TEAMCITY_VERSION: i, TERM_PROGRAM: o, TERM_PROGRAM_VERSION: s, VTE_VERSION: a, TERM: l } = process.env;
        if (t) return !(t.length > 0 && parseInt(t, 10) === 0);
        if (br("no-hyperlink") || br("no-hyperlinks") || br("hyperlink=false") || br("hyperlink=never")) return false;
        if (br("hyperlink=true") || br("hyperlink=always") || n) return true;
        if (!$c.supportsColor(e) || e && !e.isTTY) return false;
        if ("WT_SESSION" in process.env) return true;
        if (process.platform === "win32" || r || i) return false;
        if (o) {
          let u = cs(s || "");
          switch (o) {
            case "iTerm.app":
              return u.major === 3 ? u.minor >= 1 : u.major > 3;
            case "WezTerm":
              return u.major >= 20200620;
            case "vscode":
              return u.major > 1 || u.major === 1 && u.minor >= 72;
            case "ghostty":
              return true;
          }
        }
        if (a) {
          if (a === "0.50.0") return false;
          let u = cs(a);
          return u.major > 0 || u.minor >= 50;
        }
        switch (l) {
          case "alacritty":
            return true;
        }
        return false;
      }
      ps.exports = { supportsHyperlink: hi, stdout: hi(process.stdout), stderr: hi(process.stderr) };
    });
    var ms = ne((Hg, qc) => {
      qc.exports = { name: "@prisma/internals", version: "6.7.0", description: "This package is intended for Prisma's internal use", main: "dist/index.js", types: "dist/index.d.ts", repository: { type: "git", url: "https://github.com/prisma/prisma.git", directory: "packages/internals" }, homepage: "https://www.prisma.io", author: "Tim Suchanek <suchanek@prisma.io>", bugs: "https://github.com/prisma/prisma/issues", license: "Apache-2.0", scripts: { dev: "DEV=true tsx helpers/build.ts", build: "tsx helpers/build.ts", test: "dotenv -e ../../.db.env -- jest --silent", prepublishOnly: "pnpm run build" }, files: ["README.md", "dist", "!**/libquery_engine*", "!dist/get-generators/engines/*", "scripts"], devDependencies: { "@babel/helper-validator-identifier": "7.25.9", "@opentelemetry/api": "1.9.0", "@swc/core": "1.11.5", "@swc/jest": "0.2.37", "@types/babel__helper-validator-identifier": "7.15.2", "@types/jest": "29.5.14", "@types/node": "18.19.76", "@types/resolve": "1.20.6", archiver: "6.0.2", "checkpoint-client": "1.1.33", "cli-truncate": "4.0.0", dotenv: "16.4.7", esbuild: "0.25.1", "escape-string-regexp": "5.0.0", execa: "5.1.1", "fast-glob": "3.3.3", "find-up": "7.0.0", "fp-ts": "2.16.9", "fs-extra": "11.3.0", "fs-jetpack": "5.1.0", "global-dirs": "4.0.0", globby: "11.1.0", "identifier-regex": "1.0.0", "indent-string": "4.0.0", "is-windows": "1.0.2", "is-wsl": "3.1.0", jest: "29.7.0", "jest-junit": "16.0.0", kleur: "4.1.5", "mock-stdin": "1.0.0", "new-github-issue-url": "0.2.1", "node-fetch": "3.3.2", "npm-packlist": "5.1.3", open: "7.4.2", "p-map": "4.0.0", "read-package-up": "11.0.0", resolve: "1.22.10", "string-width": "7.2.0", "strip-ansi": "6.0.1", "strip-indent": "4.0.0", "temp-dir": "2.0.0", tempy: "1.0.1", "terminal-link": "4.0.0", tmp: "0.2.3", "ts-node": "10.9.2", "ts-pattern": "5.6.2", "ts-toolbelt": "9.6.0", typescript: "5.4.5", yarn: "1.22.22" }, dependencies: { "@prisma/config": "workspace:*", "@prisma/debug": "workspace:*", "@prisma/dmmf": "workspace:*", "@prisma/driver-adapter-utils": "workspace:*", "@prisma/engines": "workspace:*", "@prisma/fetch-engine": "workspace:*", "@prisma/generator": "workspace:*", "@prisma/generator-helper": "workspace:*", "@prisma/get-platform": "workspace:*", "@prisma/prisma-schema-wasm": "6.7.0-36.3cff47a7f5d65c3ea74883f1d736e41d68ce91ed", "@prisma/schema-engine-wasm": "6.7.0-36.3cff47a7f5d65c3ea74883f1d736e41d68ce91ed", "@prisma/schema-files-loader": "workspace:*", arg: "5.0.2", prompts: "2.4.2" }, peerDependencies: { typescript: ">=5.1.0" }, peerDependenciesMeta: { typescript: { optional: true } }, sideEffects: false };
    });
    var Ei = ne((zg, Uc) => {
      Uc.exports = { name: "@prisma/engines-version", version: "6.7.0-36.3cff47a7f5d65c3ea74883f1d736e41d68ce91ed", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "3cff47a7f5d65c3ea74883f1d736e41d68ce91ed" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.76", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var wi = ne((Xt) => {
      "use strict";
      Object.defineProperty(Xt, "__esModule", { value: true });
      Xt.enginesVersion = void 0;
      Xt.enginesVersion = Ei().prisma.enginesVersion;
    });
    var ys = ne((hh, hs) => {
      "use strict";
      hs.exports = (e) => {
        let r = e.match(/^[ \t]*(?=\S)/gm);
        return r ? r.reduce((t, n) => Math.min(t, n.length), 1 / 0) : 0;
      };
    });
    var Ri = ne((Eh, ws) => {
      "use strict";
      ws.exports = (e, r = 1, t) => {
        if (t = { indent: " ", includeEmptyLines: false, ...t }, typeof e != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof r != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof r}\``);
        if (typeof t.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);
        if (r === 0) return e;
        let n = t.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, t.indent.repeat(r));
      };
    });
    var Ts = ne((vh, Ps) => {
      "use strict";
      Ps.exports = ({ onlyFirst: e = false } = {}) => {
        let r = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(r, e ? void 0 : "g");
      };
    });
    var ki = ne((Ph, Ss) => {
      "use strict";
      var Xc = Ts();
      Ss.exports = (e) => typeof e == "string" ? e.replace(Xc(), "") : e;
    });
    var Rs = ne((Ch, ep) => {
      ep.exports = { name: "dotenv", version: "16.4.7", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { types: "./lib/main.d.ts", require: "./lib/main.js", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", pretest: "npm run lint && npm run dts-check", test: "tap run --allow-empty-coverage --disable-coverage --timeout=60000", "test:coverage": "tap run --show-full-coverage --timeout=60000 --coverage-report=lcov", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, funding: "https://dotenvx.com", keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^18.11.3", decache: "^4.6.2", sinon: "^14.0.1", standard: "^17.0.0", "standard-version": "^9.5.0", tap: "^19.2.0", typescript: "^4.8.4" }, engines: { node: ">=12" }, browser: { fs: false } };
    });
    var ks = ne((Ah, Ne) => {
      "use strict";
      var Di = require("fs"), _i = require("path"), rp = require("os"), tp = require("crypto"), np = Rs(), Ni = np.version, ip = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
      function op(e) {
        let r = {}, t = e.toString();
        t = t.replace(/\r\n?/mg, `
`);
        let n;
        for (; (n = ip.exec(t)) != null; ) {
          let i = n[1], o = n[2] || "";
          o = o.trim();
          let s = o[0];
          o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), r[i] = o;
        }
        return r;
      }
      function sp(e) {
        let r = Is(e), t = B.configDotenv({ path: r });
        if (!t.parsed) {
          let s = new Error(`MISSING_DATA: Cannot parse ${r} for an unknown reason`);
          throw s.code = "MISSING_DATA", s;
        }
        let n = As(e).split(","), i = n.length, o;
        for (let s = 0; s < i; s++) try {
          let a = n[s].trim(), l = up(t, a);
          o = B.decrypt(l.ciphertext, l.key);
          break;
        } catch (a) {
          if (s + 1 >= i) throw a;
        }
        return B.parse(o);
      }
      function ap(e) {
        console.log(`[dotenv@${Ni}][INFO] ${e}`);
      }
      function lp(e) {
        console.log(`[dotenv@${Ni}][WARN] ${e}`);
      }
      function tn(e) {
        console.log(`[dotenv@${Ni}][DEBUG] ${e}`);
      }
      function As(e) {
        return e && e.DOTENV_KEY && e.DOTENV_KEY.length > 0 ? e.DOTENV_KEY : process.env.DOTENV_KEY && process.env.DOTENV_KEY.length > 0 ? process.env.DOTENV_KEY : "";
      }
      function up(e, r) {
        let t;
        try {
          t = new URL(r);
        } catch (a) {
          if (a.code === "ERR_INVALID_URL") {
            let l = new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");
            throw l.code = "INVALID_DOTENV_KEY", l;
          }
          throw a;
        }
        let n = t.password;
        if (!n) {
          let a = new Error("INVALID_DOTENV_KEY: Missing key part");
          throw a.code = "INVALID_DOTENV_KEY", a;
        }
        let i = t.searchParams.get("environment");
        if (!i) {
          let a = new Error("INVALID_DOTENV_KEY: Missing environment part");
          throw a.code = "INVALID_DOTENV_KEY", a;
        }
        let o = `DOTENV_VAULT_${i.toUpperCase()}`, s = e.parsed[o];
        if (!s) {
          let a = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${o} in your .env.vault file.`);
          throw a.code = "NOT_FOUND_DOTENV_ENVIRONMENT", a;
        }
        return { ciphertext: s, key: n };
      }
      function Is(e) {
        let r = null;
        if (e && e.path && e.path.length > 0) if (Array.isArray(e.path)) for (let t of e.path) Di.existsSync(t) && (r = t.endsWith(".vault") ? t : `${t}.vault`);
        else r = e.path.endsWith(".vault") ? e.path : `${e.path}.vault`;
        else r = _i.resolve(process.cwd(), ".env.vault");
        return Di.existsSync(r) ? r : null;
      }
      function Cs(e) {
        return e[0] === "~" ? _i.join(rp.homedir(), e.slice(1)) : e;
      }
      function cp(e) {
        ap("Loading env from encrypted .env.vault");
        let r = B._parseVault(e), t = process.env;
        return e && e.processEnv != null && (t = e.processEnv), B.populate(t, r, e), { parsed: r };
      }
      function pp(e) {
        let r = _i.resolve(process.cwd(), ".env"), t = "utf8", n = !!(e && e.debug);
        e && e.encoding ? t = e.encoding : n && tn("No encoding is specified. UTF-8 is used by default");
        let i = [r];
        if (e && e.path) if (!Array.isArray(e.path)) i = [Cs(e.path)];
        else {
          i = [];
          for (let l of e.path) i.push(Cs(l));
        }
        let o, s = {};
        for (let l of i) try {
          let u = B.parse(Di.readFileSync(l, { encoding: t }));
          B.populate(s, u, e);
        } catch (u) {
          n && tn(`Failed to load ${l} ${u.message}`), o = u;
        }
        let a = process.env;
        return e && e.processEnv != null && (a = e.processEnv), B.populate(a, s, e), o ? { parsed: s, error: o } : { parsed: s };
      }
      function dp(e) {
        if (As(e).length === 0) return B.configDotenv(e);
        let r = Is(e);
        return r ? B._configVault(e) : (lp(`You set DOTENV_KEY but you are missing a .env.vault file at ${r}. Did you forget to build it?`), B.configDotenv(e));
      }
      function mp(e, r) {
        let t = Buffer.from(r.slice(-64), "hex"), n = Buffer.from(e, "base64"), i = n.subarray(0, 12), o = n.subarray(-16);
        n = n.subarray(12, -16);
        try {
          let s = tp.createDecipheriv("aes-256-gcm", t, i);
          return s.setAuthTag(o), `${s.update(n)}${s.final()}`;
        } catch (s) {
          let a = s instanceof RangeError, l = s.message === "Invalid key length", u = s.message === "Unsupported state or unable to authenticate data";
          if (a || l) {
            let c = new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");
            throw c.code = "INVALID_DOTENV_KEY", c;
          } else if (u) {
            let c = new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");
            throw c.code = "DECRYPTION_FAILED", c;
          } else throw s;
        }
      }
      function fp(e, r, t = {}) {
        let n = !!(t && t.debug), i = !!(t && t.override);
        if (typeof r != "object") {
          let o = new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");
          throw o.code = "OBJECT_REQUIRED", o;
        }
        for (let o of Object.keys(r)) Object.prototype.hasOwnProperty.call(e, o) ? (i === true && (e[o] = r[o]), n && tn(i === true ? `"${o}" is already defined and WAS overwritten` : `"${o}" is already defined and was NOT overwritten`)) : e[o] = r[o];
      }
      var B = { configDotenv: pp, _configVault: cp, _parseVault: sp, config: dp, decrypt: mp, parse: op, populate: fp };
      Ne.exports.configDotenv = B.configDotenv;
      Ne.exports._configVault = B._configVault;
      Ne.exports._parseVault = B._parseVault;
      Ne.exports.config = B.config;
      Ne.exports.decrypt = B.decrypt;
      Ne.exports.parse = B.parse;
      Ne.exports.populate = B.populate;
      Ne.exports = B;
    });
    var Ns = ne((Nh, on) => {
      "use strict";
      on.exports = (e = {}) => {
        let r;
        if (e.repoUrl) r = e.repoUrl;
        else if (e.user && e.repo) r = `https://github.com/${e.user}/${e.repo}`;
        else throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
        let t = new URL(`${r}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
        for (let i of n) {
          let o = e[i];
          if (o !== void 0) {
            if (i === "labels" || i === "projects") {
              if (!Array.isArray(o)) throw new TypeError(`The \`${i}\` option should be an array`);
              o = o.join(",");
            }
            t.searchParams.set(i, o);
          }
        }
        return t.toString();
      };
      on.exports.default = on.exports;
    });
    var Gi = ne((pb, na) => {
      "use strict";
      na.exports = /* @__PURE__ */ function() {
        function e(r, t, n, i, o) {
          return r < t || n < t ? r > n ? n + 1 : r + 1 : i === o ? t : t + 1;
        }
        return function(r, t) {
          if (r === t) return 0;
          if (r.length > t.length) {
            var n = r;
            r = t, t = n;
          }
          for (var i = r.length, o = t.length; i > 0 && r.charCodeAt(i - 1) === t.charCodeAt(o - 1); ) i--, o--;
          for (var s = 0; s < i && r.charCodeAt(s) === t.charCodeAt(s); ) s++;
          if (i -= s, o -= s, i === 0 || o < 3) return o;
          var a = 0, l, u, c, p, d, f, g, h, I, P, S, b, O = [];
          for (l = 0; l < i; l++) O.push(l + 1), O.push(r.charCodeAt(s + l));
          for (var me = O.length - 1; a < o - 3; ) for (I = t.charCodeAt(s + (u = a)), P = t.charCodeAt(s + (c = a + 1)), S = t.charCodeAt(s + (p = a + 2)), b = t.charCodeAt(s + (d = a + 3)), f = a += 4, l = 0; l < me; l += 2) g = O[l], h = O[l + 1], u = e(g, u, c, I, h), c = e(u, c, p, P, h), p = e(c, p, d, S, h), f = e(p, d, f, b, h), O[l] = f, d = p, p = c, c = u, u = g;
          for (; a < o; ) for (I = t.charCodeAt(s + (u = a)), f = ++a, l = 0; l < me; l += 2) g = O[l], O[l] = f = e(g, u, f, I, O[l + 1]), u = g;
          return f;
        };
      }();
    });
    var la = Do(() => {
      "use strict";
    });
    var ua = Do(() => {
      "use strict";
    });
    var Vf = {};
    tr(Vf, { DMMF: () => lt, Debug: () => N, Decimal: () => ve, Extensions: () => ei, MetricsClient: () => Fr, PrismaClientInitializationError: () => T, PrismaClientKnownRequestError: () => z4, PrismaClientRustPanicError: () => le, PrismaClientUnknownRequestError: () => j, PrismaClientValidationError: () => Z, Public: () => ri, Sql: () => oe, createParam: () => Sa, defineDmmfProperty: () => Oa, deserializeJsonResponse: () => Tr, deserializeRawResult: () => Yn, dmmfToRuntimeDataModel: () => zs, empty: () => Na, getPrismaClient: () => fu, getRuntime: () => qn, join: () => _a, makeStrictEnum: () => gu, makeTypedQueryFactory: () => Da, objectEnumValues: () => Sn, raw: () => eo, serializeJsonQuery: () => Dn, skip: () => On, sqltag: () => ro, warnEnvConflicts: () => hu, warnOnce: () => ot });
    module2.exports = vu(Vf);
    var ei = {};
    tr(ei, { defineExtension: () => No, getExtensionContext: () => Fo });
    function No(e) {
      return typeof e == "function" ? e : (r) => r.$extends(e);
    }
    function Fo(e) {
      return e;
    }
    var ri = {};
    tr(ri, { validator: () => Lo });
    function Lo(...e) {
      return (r) => r;
    }
    var jt = {};
    tr(jt, { $: () => Vo, bgBlack: () => Du, bgBlue: () => Lu, bgCyan: () => $u, bgGreen: () => Nu, bgMagenta: () => Mu, bgRed: () => _u, bgWhite: () => qu, bgYellow: () => Fu, black: () => Au, blue: () => nr, bold: () => W, cyan: () => Oe, dim: () => Ie, gray: () => Hr, green: () => qe, grey: () => Ou, hidden: () => Ru, inverse: () => Su, italic: () => Tu, magenta: () => Iu, red: () => ce, reset: () => Pu, strikethrough: () => Cu, underline: () => Y, white: () => ku, yellow: () => ke });
    var ti;
    var Mo;
    var $o;
    var qo;
    var jo = true;
    typeof process < "u" && ({ FORCE_COLOR: ti, NODE_DISABLE_COLORS: Mo, NO_COLOR: $o, TERM: qo } = process.env || {}, jo = process.stdout && process.stdout.isTTY);
    var Vo = { enabled: !Mo && $o == null && qo !== "dumb" && (ti != null && ti !== "0" || jo) };
    function L(e, r) {
      let t = new RegExp(`\\x1b\\[${r}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${r}m`;
      return function(o) {
        return !Vo.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(t, i + n) : o) + i;
      };
    }
    var Pu = L(0, 0);
    var W = L(1, 22);
    var Ie = L(2, 22);
    var Tu = L(3, 23);
    var Y = L(4, 24);
    var Su = L(7, 27);
    var Ru = L(8, 28);
    var Cu = L(9, 29);
    var Au = L(30, 39);
    var ce = L(31, 39);
    var qe = L(32, 39);
    var ke = L(33, 39);
    var nr = L(34, 39);
    var Iu = L(35, 39);
    var Oe = L(36, 39);
    var ku = L(37, 39);
    var Hr = L(90, 39);
    var Ou = L(90, 39);
    var Du = L(40, 49);
    var _u = L(41, 49);
    var Nu = L(42, 49);
    var Fu = L(43, 49);
    var Lu = L(44, 49);
    var Mu = L(45, 49);
    var $u = L(46, 49);
    var qu = L(47, 49);
    var ju = 100;
    var Bo = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var Kr = [];
    var Uo = Date.now();
    var Vu = 0;
    var ni = typeof process < "u" ? process.env : {};
    globalThis.DEBUG ??= ni.DEBUG ?? "";
    globalThis.DEBUG_COLORS ??= ni.DEBUG_COLORS ? ni.DEBUG_COLORS === "true" : true;
    var Yr = { enable(e) {
      typeof e == "string" && (globalThis.DEBUG = e);
    }, disable() {
      let e = globalThis.DEBUG;
      return globalThis.DEBUG = "", e;
    }, enabled(e) {
      let r = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), t = r.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = r.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
      return t && !n;
    }, log: (...e) => {
      let [r, t, ...n] = e;
      (console.warn ?? console.log)(`${r} ${t}`, ...n);
    }, formatters: {} };
    function Bu(e) {
      let r = { color: Bo[Vu++ % Bo.length], enabled: Yr.enabled(e), namespace: e, log: Yr.log, extend: () => {
      } }, t = (...n) => {
        let { enabled: i, namespace: o, color: s, log: a } = r;
        if (n.length !== 0 && Kr.push([o, ...n]), Kr.length > ju && Kr.shift(), Yr.enabled(o) || i) {
          let l = n.map((c) => typeof c == "string" ? c : Uu(c)), u = `+${Date.now() - Uo}ms`;
          Uo = Date.now(), globalThis.DEBUG_COLORS ? a(jt[s](W(o)), ...l, jt[s](u)) : a(o, ...l, u);
        }
      };
      return new Proxy(t, { get: (n, i) => r[i], set: (n, i, o) => r[i] = o });
    }
    var N = new Proxy(Bu, { get: (e, r) => Yr[r], set: (e, r, t) => Yr[r] = t });
    function Uu(e, r = 2) {
      let t = /* @__PURE__ */ new Set();
      return JSON.stringify(e, (n, i) => {
        if (typeof i == "object" && i !== null) {
          if (t.has(i)) return "[Circular *]";
          t.add(i);
        } else if (typeof i == "bigint") return i.toString();
        return i;
      }, r);
    }
    function Qo(e = 7500) {
      let r = Kr.map(([t, ...n]) => `${t} ${n.map((i) => typeof i == "string" ? i : JSON.stringify(i)).join(" ")}`).join(`
`);
      return r.length < e ? r : r.slice(-e);
    }
    function Go() {
      Kr.length = 0;
    }
    var gr = N;
    var Wo = k(require("fs"));
    function ii() {
      let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
      if (!(e && Wo.default.existsSync(e)) && process.arch === "ia32") throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
    }
    var oi = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "freebsd14", "freebsd15", "openbsd", "netbsd", "arm"];
    var Vt = "libquery_engine";
    function Bt(e, r) {
      let t = r === "url";
      return e.includes("windows") ? t ? "query_engine.dll.node" : `query_engine-${e}.dll.node` : e.includes("darwin") ? t ? `${Vt}.dylib.node` : `${Vt}-${e}.dylib.node` : t ? `${Vt}.so.node` : `${Vt}-${e}.so.node`;
    }
    var Yo = k(require("child_process"));
    var ci = k(require("fs/promises"));
    var Jt = k(require("os"));
    var De = Symbol.for("@ts-pattern/matcher");
    var Qu = Symbol.for("@ts-pattern/isVariadic");
    var Qt = "@ts-pattern/anonymous-select-key";
    var si = (e) => !!(e && typeof e == "object");
    var Ut = (e) => e && !!e[De];
    var Ee = (e, r, t) => {
      if (Ut(e)) {
        let n = e[De](), { matched: i, selections: o } = n.match(r);
        return i && o && Object.keys(o).forEach((s) => t(s, o[s])), i;
      }
      if (si(e)) {
        if (!si(r)) return false;
        if (Array.isArray(e)) {
          if (!Array.isArray(r)) return false;
          let n = [], i = [], o = [];
          for (let s of e.keys()) {
            let a = e[s];
            Ut(a) && a[Qu] ? o.push(a) : o.length ? i.push(a) : n.push(a);
          }
          if (o.length) {
            if (o.length > 1) throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
            if (r.length < n.length + i.length) return false;
            let s = r.slice(0, n.length), a = i.length === 0 ? [] : r.slice(-i.length), l = r.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
            return n.every((u, c) => Ee(u, s[c], t)) && i.every((u, c) => Ee(u, a[c], t)) && (o.length === 0 || Ee(o[0], l, t));
          }
          return e.length === r.length && e.every((s, a) => Ee(s, r[a], t));
        }
        return Reflect.ownKeys(e).every((n) => {
          let i = e[n];
          return (n in r || Ut(o = i) && o[De]().matcherType === "optional") && Ee(i, r[n], t);
          var o;
        });
      }
      return Object.is(r, e);
    };
    var Qe = (e) => {
      var r, t, n;
      return si(e) ? Ut(e) ? (r = (t = (n = e[De]()).getSelectionKeys) == null ? void 0 : t.call(n)) != null ? r : [] : Array.isArray(e) ? zr(e, Qe) : zr(Object.values(e), Qe) : [];
    };
    var zr = (e, r) => e.reduce((t, n) => t.concat(r(n)), []);
    function pe(e) {
      return Object.assign(e, { optional: () => Gu(e), and: (r) => q(e, r), or: (r) => Wu(e, r), select: (r) => r === void 0 ? Jo(e) : Jo(r, e) });
    }
    function Gu(e) {
      return pe({ [De]: () => ({ match: (r) => {
        let t = {}, n = (i, o) => {
          t[i] = o;
        };
        return r === void 0 ? (Qe(e).forEach((i) => n(i, void 0)), { matched: true, selections: t }) : { matched: Ee(e, r, n), selections: t };
      }, getSelectionKeys: () => Qe(e), matcherType: "optional" }) });
    }
    function q(...e) {
      return pe({ [De]: () => ({ match: (r) => {
        let t = {}, n = (i, o) => {
          t[i] = o;
        };
        return { matched: e.every((i) => Ee(i, r, n)), selections: t };
      }, getSelectionKeys: () => zr(e, Qe), matcherType: "and" }) });
    }
    function Wu(...e) {
      return pe({ [De]: () => ({ match: (r) => {
        let t = {}, n = (i, o) => {
          t[i] = o;
        };
        return zr(e, Qe).forEach((i) => n(i, void 0)), { matched: e.some((i) => Ee(i, r, n)), selections: t };
      }, getSelectionKeys: () => zr(e, Qe), matcherType: "or" }) });
    }
    function C(e) {
      return { [De]: () => ({ match: (r) => ({ matched: !!e(r) }) }) };
    }
    function Jo(...e) {
      let r = typeof e[0] == "string" ? e[0] : void 0, t = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
      return pe({ [De]: () => ({ match: (n) => {
        let i = { [r ?? Qt]: n };
        return { matched: t === void 0 || Ee(t, n, (o, s) => {
          i[o] = s;
        }), selections: i };
      }, getSelectionKeys: () => [r ?? Qt].concat(t === void 0 ? [] : Qe(t)) }) });
    }
    function ye(e) {
      return typeof e == "number";
    }
    function je(e) {
      return typeof e == "string";
    }
    function Ve(e) {
      return typeof e == "bigint";
    }
    var eg = pe(C(function(e) {
      return true;
    }));
    var Be = (e) => Object.assign(pe(e), { startsWith: (r) => {
      return Be(q(e, (t = r, C((n) => je(n) && n.startsWith(t)))));
      var t;
    }, endsWith: (r) => {
      return Be(q(e, (t = r, C((n) => je(n) && n.endsWith(t)))));
      var t;
    }, minLength: (r) => Be(q(e, ((t) => C((n) => je(n) && n.length >= t))(r))), length: (r) => Be(q(e, ((t) => C((n) => je(n) && n.length === t))(r))), maxLength: (r) => Be(q(e, ((t) => C((n) => je(n) && n.length <= t))(r))), includes: (r) => {
      return Be(q(e, (t = r, C((n) => je(n) && n.includes(t)))));
      var t;
    }, regex: (r) => {
      return Be(q(e, (t = r, C((n) => je(n) && !!n.match(t)))));
      var t;
    } });
    var rg = Be(C(je));
    var be = (e) => Object.assign(pe(e), { between: (r, t) => be(q(e, ((n, i) => C((o) => ye(o) && n <= o && i >= o))(r, t))), lt: (r) => be(q(e, ((t) => C((n) => ye(n) && n < t))(r))), gt: (r) => be(q(e, ((t) => C((n) => ye(n) && n > t))(r))), lte: (r) => be(q(e, ((t) => C((n) => ye(n) && n <= t))(r))), gte: (r) => be(q(e, ((t) => C((n) => ye(n) && n >= t))(r))), int: () => be(q(e, C((r) => ye(r) && Number.isInteger(r)))), finite: () => be(q(e, C((r) => ye(r) && Number.isFinite(r)))), positive: () => be(q(e, C((r) => ye(r) && r > 0))), negative: () => be(q(e, C((r) => ye(r) && r < 0))) });
    var tg = be(C(ye));
    var Ue = (e) => Object.assign(pe(e), { between: (r, t) => Ue(q(e, ((n, i) => C((o) => Ve(o) && n <= o && i >= o))(r, t))), lt: (r) => Ue(q(e, ((t) => C((n) => Ve(n) && n < t))(r))), gt: (r) => Ue(q(e, ((t) => C((n) => Ve(n) && n > t))(r))), lte: (r) => Ue(q(e, ((t) => C((n) => Ve(n) && n <= t))(r))), gte: (r) => Ue(q(e, ((t) => C((n) => Ve(n) && n >= t))(r))), positive: () => Ue(q(e, C((r) => Ve(r) && r > 0))), negative: () => Ue(q(e, C((r) => Ve(r) && r < 0))) });
    var ng = Ue(C(Ve));
    var ig = pe(C(function(e) {
      return typeof e == "boolean";
    }));
    var og = pe(C(function(e) {
      return typeof e == "symbol";
    }));
    var sg = pe(C(function(e) {
      return e == null;
    }));
    var ag = pe(C(function(e) {
      return e != null;
    }));
    var ai = class extends Error {
      constructor(r) {
        let t;
        try {
          t = JSON.stringify(r);
        } catch {
          t = r;
        }
        super(`Pattern matching error: no pattern matches value ${t}`), this.input = void 0, this.input = r;
      }
    };
    var li = { matched: false, value: void 0 };
    function hr(e) {
      return new ui(e, li);
    }
    var ui = class e {
      constructor(r, t) {
        this.input = void 0, this.state = void 0, this.input = r, this.state = t;
      }
      with(...r) {
        if (this.state.matched) return this;
        let t = r[r.length - 1], n = [r[0]], i;
        r.length === 3 && typeof r[1] == "function" ? i = r[1] : r.length > 2 && n.push(...r.slice(1, r.length - 1));
        let o = false, s = {}, a = (u, c) => {
          o = true, s[u] = c;
        }, l = !n.some((u) => Ee(u, this.input, a)) || i && !i(this.input) ? li : { matched: true, value: t(o ? Qt in s ? s[Qt] : s : this.input, this.input) };
        return new e(this.input, l);
      }
      when(r, t) {
        if (this.state.matched) return this;
        let n = !!r(this.input);
        return new e(this.input, n ? { matched: true, value: t(this.input, this.input) } : li);
      }
      otherwise(r) {
        return this.state.matched ? this.state.value : r(this.input);
      }
      exhaustive() {
        if (this.state.matched) return this.state.value;
        throw new ai(this.input);
      }
      run() {
        return this.exhaustive();
      }
      returnType() {
        return this;
      }
    };
    var zo = require("util");
    var Ju = { warn: ke("prisma:warn") };
    var Hu = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function Gt(e, ...r) {
      Hu.warn() && console.warn(`${Ju.warn} ${e}`, ...r);
    }
    var Ku = (0, zo.promisify)(Yo.default.exec);
    var ee = gr("prisma:get-platform");
    var Yu = ["1.0.x", "1.1.x", "3.0.x"];
    async function Zo() {
      let e = Jt.default.platform(), r = process.arch;
      if (e === "freebsd") {
        let s = await Ht("freebsd-version");
        if (s && s.trim().length > 0) {
          let l = /^(\d+)\.?/.exec(s);
          if (l) return { platform: "freebsd", targetDistro: `freebsd${l[1]}`, arch: r };
        }
      }
      if (e !== "linux") return { platform: e, arch: r };
      let t = await Zu(), n = await sc(), i = ec({ arch: r, archFromUname: n, familyDistro: t.familyDistro }), { libssl: o } = await rc(i);
      return { platform: "linux", libssl: o, arch: r, archFromUname: n, ...t };
    }
    function zu(e) {
      let r = /^ID="?([^"\n]*)"?$/im, t = /^ID_LIKE="?([^"\n]*)"?$/im, n = r.exec(e), i = n && n[1] && n[1].toLowerCase() || "", o = t.exec(e), s = o && o[1] && o[1].toLowerCase() || "", a = hr({ id: i, idLike: s }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: void 0, familyDistro: void 0, originalDistro: l }));
      return ee(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
    }
    async function Zu() {
      let e = "/etc/os-release";
      try {
        let r = await ci.default.readFile(e, { encoding: "utf-8" });
        return zu(r);
      } catch {
        return { targetDistro: void 0, familyDistro: void 0, originalDistro: void 0 };
      }
    }
    function Xu(e) {
      let r = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
      if (r) {
        let t = `${r[1]}.x`;
        return Xo(t);
      }
    }
    function Ho(e) {
      let r = /libssl\.so\.(\d)(\.\d)?/.exec(e);
      if (r) {
        let t = `${r[1]}${r[2] ?? ".0"}.x`;
        return Xo(t);
      }
    }
    function Xo(e) {
      let r = (() => {
        if (rs(e)) return e;
        let t = e.split(".");
        return t[1] = "0", t.join(".");
      })();
      if (Yu.includes(r)) return r;
    }
    function ec(e) {
      return hr(e).with({ familyDistro: "musl" }, () => (ee('Trying platform-specific paths for "alpine"'), ["/lib", "/usr/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: r }) => (ee('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${r}-linux-gnu`, `/lib/${r}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (ee('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: r, arch: t, archFromUname: n }) => (ee(`Don't know any platform-specific paths for "${r}" on ${t} (${n})`), []));
    }
    async function rc(e) {
      let r = 'grep -v "libssl.so.0"', t = await Ko(e);
      if (t) {
        ee(`Found libssl.so file using platform-specific paths: ${t}`);
        let o = Ho(t);
        if (ee(`The parsed libssl version is: ${o}`), o) return { libssl: o, strategy: "libssl-specific-path" };
      }
      ee('Falling back to "ldconfig" and other generic paths');
      let n = await Ht(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${r}`);
      if (n || (n = await Ko(["/lib64", "/usr/lib64", "/lib", "/usr/lib"])), n) {
        ee(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
        let o = Ho(n);
        if (ee(`The parsed libssl version is: ${o}`), o) return { libssl: o, strategy: "ldconfig" };
      }
      let i = await Ht("openssl version -v");
      if (i) {
        ee(`Found openssl binary with version: ${i}`);
        let o = Xu(i);
        if (ee(`The parsed openssl version is: ${o}`), o) return { libssl: o, strategy: "openssl-binary" };
      }
      return ee("Couldn't find any version of libssl or OpenSSL in the system"), {};
    }
    async function Ko(e) {
      for (let r of e) {
        let t = await tc(r);
        if (t) return t;
      }
    }
    async function tc(e) {
      try {
        return (await ci.default.readdir(e)).find((t) => t.startsWith("libssl.so.") && !t.startsWith("libssl.so.0"));
      } catch (r) {
        if (r.code === "ENOENT") return;
        throw r;
      }
    }
    async function ir() {
      let { binaryTarget: e } = await es();
      return e;
    }
    function nc(e) {
      return e.binaryTarget !== void 0;
    }
    async function pi() {
      let { memoized: e, ...r } = await es();
      return r;
    }
    var Wt = {};
    async function es() {
      if (nc(Wt)) return Promise.resolve({ ...Wt, memoized: true });
      let e = await Zo(), r = ic(e);
      return Wt = { ...e, binaryTarget: r }, { ...Wt, memoized: false };
    }
    function ic(e) {
      let { platform: r, arch: t, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e;
      r === "linux" && !["x64", "arm64"].includes(t) && Gt(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures (detected "${t}" instead). If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
      let l = "1.1.x";
      if (r === "linux" && i === void 0) {
        let c = hr({ familyDistro: s }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
        Gt(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
      }
      let u = "debian";
      if (r === "linux" && o === void 0 && ee(`Distro is "${a}". Falling back to Prisma engines built for "${u}".`), r === "darwin" && t === "arm64") return "darwin-arm64";
      if (r === "darwin") return "darwin";
      if (r === "win32") return "windows";
      if (r === "freebsd") return o;
      if (r === "openbsd") return "openbsd";
      if (r === "netbsd") return "netbsd";
      if (r === "linux" && o === "nixos") return "linux-nixos";
      if (r === "linux" && t === "arm64") return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
      if (r === "linux" && t === "arm") return `linux-arm-openssl-${i || l}`;
      if (r === "linux" && o === "musl") {
        let c = "linux-musl";
        return !i || rs(i) ? c : `${c}-openssl-${i}`;
      }
      return r === "linux" && o && i ? `${o}-openssl-${i}` : (r !== "linux" && Gt(`Prisma detected unknown OS "${r}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
    }
    async function oc(e) {
      try {
        return await e();
      } catch {
        return;
      }
    }
    function Ht(e) {
      return oc(async () => {
        let r = await Ku(e);
        return ee(`Command "${e}" successfully returned "${r.stdout}"`), r.stdout;
      });
    }
    async function sc() {
      var _a14;
      return typeof Jt.default.machine == "function" ? Jt.default.machine() : (_a14 = await Ht("uname -m")) == null ? void 0 : _a14.trim();
    }
    function rs(e) {
      return e.startsWith("1.");
    }
    var zt = {};
    tr(zt, { beep: () => Dc, clearScreen: () => Ac, clearTerminal: () => Ic, cursorBackward: () => mc, cursorDown: () => pc, cursorForward: () => dc, cursorGetPosition: () => hc, cursorHide: () => Ec, cursorLeft: () => is, cursorMove: () => cc, cursorNextLine: () => yc, cursorPrevLine: () => bc, cursorRestorePosition: () => gc, cursorSavePosition: () => fc, cursorShow: () => wc, cursorTo: () => uc, cursorUp: () => ns, enterAlternativeScreen: () => kc, eraseDown: () => Tc, eraseEndLine: () => vc, eraseLine: () => os, eraseLines: () => xc, eraseScreen: () => di, eraseStartLine: () => Pc, eraseUp: () => Sc, exitAlternativeScreen: () => Oc, iTerm: () => Fc, image: () => Nc, link: () => _c, scrollDown: () => Cc, scrollUp: () => Rc });
    var Yt = k(require("process"), 1);
    var _a2;
    var Kt = ((_a2 = globalThis.window) == null ? void 0 : _a2.document) !== void 0;
    var _a3, _b;
    var gg = ((_b = (_a3 = globalThis.process) == null ? void 0 : _a3.versions) == null ? void 0 : _b.node) !== void 0;
    var _a4, _b2;
    var hg = ((_b2 = (_a4 = globalThis.process) == null ? void 0 : _a4.versions) == null ? void 0 : _b2.bun) !== void 0;
    var _a5, _b3;
    var yg = ((_b3 = (_a5 = globalThis.Deno) == null ? void 0 : _a5.version) == null ? void 0 : _b3.deno) !== void 0;
    var _a6, _b4;
    var bg = ((_b4 = (_a6 = globalThis.process) == null ? void 0 : _a6.versions) == null ? void 0 : _b4.electron) !== void 0;
    var _a7, _b5;
    var Eg = ((_b5 = (_a7 = globalThis.navigator) == null ? void 0 : _a7.userAgent) == null ? void 0 : _b5.includes("jsdom")) === true;
    var wg = typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
    var xg = typeof DedicatedWorkerGlobalScope < "u" && globalThis instanceof DedicatedWorkerGlobalScope;
    var vg = typeof SharedWorkerGlobalScope < "u" && globalThis instanceof SharedWorkerGlobalScope;
    var Pg = typeof ServiceWorkerGlobalScope < "u" && globalThis instanceof ServiceWorkerGlobalScope;
    var _a8, _b6;
    var Zr = (_b6 = (_a8 = globalThis.navigator) == null ? void 0 : _a8.userAgentData) == null ? void 0 : _b6.platform;
    var _a9, _b7, _c2, _d2;
    var Tg = Zr === "macOS" || ((_a9 = globalThis.navigator) == null ? void 0 : _a9.platform) === "MacIntel" || ((_c2 = (_b7 = globalThis.navigator) == null ? void 0 : _b7.userAgent) == null ? void 0 : _c2.includes(" Mac ")) === true || ((_d2 = globalThis.process) == null ? void 0 : _d2.platform) === "darwin";
    var _a10, _b8;
    var Sg = Zr === "Windows" || ((_a10 = globalThis.navigator) == null ? void 0 : _a10.platform) === "Win32" || ((_b8 = globalThis.process) == null ? void 0 : _b8.platform) === "win32";
    var _a11, _b9, _c3, _d3, _e2;
    var Rg = Zr === "Linux" || ((_b9 = (_a11 = globalThis.navigator) == null ? void 0 : _a11.platform) == null ? void 0 : _b9.startsWith("Linux")) === true || ((_d3 = (_c3 = globalThis.navigator) == null ? void 0 : _c3.userAgent) == null ? void 0 : _d3.includes(" Linux ")) === true || ((_e2 = globalThis.process) == null ? void 0 : _e2.platform) === "linux";
    var _a12, _b10, _c4;
    var Cg = Zr === "iOS" || ((_a12 = globalThis.navigator) == null ? void 0 : _a12.platform) === "MacIntel" && ((_b10 = globalThis.navigator) == null ? void 0 : _b10.maxTouchPoints) > 1 || /iPad|iPhone|iPod/.test((_c4 = globalThis.navigator) == null ? void 0 : _c4.platform);
    var _a13, _b11, _c5, _d4;
    var Ag = Zr === "Android" || ((_a13 = globalThis.navigator) == null ? void 0 : _a13.platform) === "Android" || ((_c5 = (_b11 = globalThis.navigator) == null ? void 0 : _b11.userAgent) == null ? void 0 : _c5.includes(" Android ")) === true || ((_d4 = globalThis.process) == null ? void 0 : _d4.platform) === "android";
    var A = "\x1B[";
    var et = "\x1B]";
    var yr = "\x07";
    var Xr = ";";
    var ts = !Kt && Yt.default.env.TERM_PROGRAM === "Apple_Terminal";
    var ac = !Kt && Yt.default.platform === "win32";
    var lc = Kt ? () => {
      throw new Error("`process.cwd()` only works in Node.js, not the browser.");
    } : Yt.default.cwd;
    var uc = (e, r) => {
      if (typeof e != "number") throw new TypeError("The `x` argument is required");
      return typeof r != "number" ? A + (e + 1) + "G" : A + (r + 1) + Xr + (e + 1) + "H";
    };
    var cc = (e, r) => {
      if (typeof e != "number") throw new TypeError("The `x` argument is required");
      let t = "";
      return e < 0 ? t += A + -e + "D" : e > 0 && (t += A + e + "C"), r < 0 ? t += A + -r + "A" : r > 0 && (t += A + r + "B"), t;
    };
    var ns = (e = 1) => A + e + "A";
    var pc = (e = 1) => A + e + "B";
    var dc = (e = 1) => A + e + "C";
    var mc = (e = 1) => A + e + "D";
    var is = A + "G";
    var fc = ts ? "\x1B7" : A + "s";
    var gc = ts ? "\x1B8" : A + "u";
    var hc = A + "6n";
    var yc = A + "E";
    var bc = A + "F";
    var Ec = A + "?25l";
    var wc = A + "?25h";
    var xc = (e) => {
      let r = "";
      for (let t = 0; t < e; t++) r += os + (t < e - 1 ? ns() : "");
      return e && (r += is), r;
    };
    var vc = A + "K";
    var Pc = A + "1K";
    var os = A + "2K";
    var Tc = A + "J";
    var Sc = A + "1J";
    var di = A + "2J";
    var Rc = A + "S";
    var Cc = A + "T";
    var Ac = "\x1Bc";
    var Ic = ac ? `${di}${A}0f` : `${di}${A}3J${A}H`;
    var kc = A + "?1049h";
    var Oc = A + "?1049l";
    var Dc = yr;
    var _c = (e, r) => [et, "8", Xr, Xr, r, yr, e, et, "8", Xr, Xr, yr].join("");
    var Nc = (e, r = {}) => {
      let t = `${et}1337;File=inline=1`;
      return r.width && (t += `;width=${r.width}`), r.height && (t += `;height=${r.height}`), r.preserveAspectRatio === false && (t += ";preserveAspectRatio=0"), t + ":" + Buffer.from(e).toString("base64") + yr;
    };
    var Fc = { setCwd: (e = lc()) => `${et}50;CurrentDir=${e}${yr}`, annotation(e, r = {}) {
      let t = `${et}1337;`, n = r.x !== void 0, i = r.y !== void 0;
      if ((n || i) && !(n && i && r.length !== void 0)) throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
      return e = e.replaceAll("|", ""), t += r.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", r.length > 0 ? t += (n ? [e, r.length, r.x, r.y] : [r.length, e]).join("|") : t += e, t + yr;
    } };
    var Zt = k(ds(), 1);
    function or(e, r, { target: t = "stdout", ...n } = {}) {
      return Zt.default[t] ? zt.link(e, r) : n.fallback === false ? e : typeof n.fallback == "function" ? n.fallback(e, r) : `${e} (\u200B${r}\u200B)`;
    }
    or.isSupported = Zt.default.stdout;
    or.stderr = (e, r, t = {}) => or(e, r, { target: "stderr", ...t });
    or.stderr.isSupported = Zt.default.stderr;
    function yi(e) {
      return or(e, e, { fallback: Y });
    }
    var jc = ms();
    var bi = jc.version;
    function Er(e) {
      let r = Vc();
      return r || ((e == null ? void 0 : e.config.engineType) === "library" ? "library" : (e == null ? void 0 : e.config.engineType) === "binary" ? "binary" : (e == null ? void 0 : e.config.engineType) === "client" ? "client" : Bc(e));
    }
    function Vc() {
      let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : e === "client" ? "client" : void 0;
    }
    function Bc(e) {
      return (e == null ? void 0 : e.previewFeatures.includes("queryCompiler")) ? "client" : "library";
    }
    var Qc = k(wi());
    var M = k(require("path"));
    var Gc = k(wi());
    var ah = N("prisma:engines");
    function fs() {
      return M.default.join(__dirname, "../");
    }
    M.default.join(__dirname, "../query-engine-darwin");
    M.default.join(__dirname, "../query-engine-darwin-arm64");
    M.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
    M.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
    M.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
    M.default.join(__dirname, "../query-engine-linux-static-x64");
    M.default.join(__dirname, "../query-engine-linux-static-arm64");
    M.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
    M.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
    M.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
    M.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
    M.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
    M.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
    M.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
    M.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
    M.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
    M.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
    M.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
    M.default.join(__dirname, "../query_engine-windows.dll.node");
    var xi = k(require("fs"));
    var gs = gr("chmodPlusX");
    function vi(e) {
      if (process.platform === "win32") return;
      let r = xi.default.statSync(e), t = r.mode | 64 | 8 | 1;
      if (r.mode === t) {
        gs(`Execution permissions of ${e} are fine`);
        return;
      }
      let n = t.toString(8).slice(-3);
      gs(`Have to call chmodPlusX on ${e}`), xi.default.chmodSync(e, n);
    }
    function Pi(e) {
      let r = e.e, t = (a) => `Prisma cannot find the required \`${a}\` system library in your system`, n = r.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${yi("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${Ie(e.id)}\`).`, s = hr({ message: r.message, code: r.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: a }) => n && a.includes("libz"), () => `${t("libz")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libgcc_s"), () => `${t("libgcc_s")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libssl"), () => {
        let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
        return `${t("libssl")}. Please install ${a} and try again.`;
      }).when(({ message: a }) => a.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a }) => e.platformInfo.platform === "linux" && a.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
      return `${o}
${s}

Details: ${r.message}`;
    }
    var bs = k(ys(), 1);
    function Ti(e) {
      let r = (0, bs.default)(e);
      if (r === 0) return e;
      let t = new RegExp(`^[ \\t]{${r}}`, "gm");
      return e.replace(t, "");
    }
    var Es = "prisma+postgres";
    var en = `${Es}:`;
    function Si(e) {
      return (e == null ? void 0 : e.startsWith(`${en}//`)) ?? false;
    }
    var xs = k(Ri());
    function Ai(e) {
      return String(new Ci(e));
    }
    var Ci = class {
      constructor(r) {
        this.config = r;
      }
      toString() {
        let { config: r } = this, t = r.provider.fromEnvVar ? `env("${r.provider.fromEnvVar}")` : r.provider.value, n = JSON.parse(JSON.stringify({ provider: t, binaryTargets: Wc(r.binaryTargets) }));
        return `generator ${r.name} {
${(0, xs.default)(Jc(n), 2)}
}`;
      }
    };
    function Wc(e) {
      let r;
      if (e.length > 0) {
        let t = e.find((n) => n.fromEnvVar !== null);
        t ? r = `env("${t.fromEnvVar}")` : r = e.map((n) => n.native ? "native" : n.value);
      } else r = void 0;
      return r;
    }
    function Jc(e) {
      let r = Object.keys(e).reduce((t, n) => Math.max(t, n.length), 0);
      return Object.entries(e).map(([t, n]) => `${t.padEnd(r)} = ${Hc(n)}`).join(`
`);
    }
    function Hc(e) {
      return JSON.parse(JSON.stringify(e, (r, t) => Array.isArray(t) ? `[${t.map((n) => JSON.stringify(n)).join(", ")}]` : JSON.stringify(t)));
    }
    var tt = {};
    tr(tt, { error: () => zc, info: () => Yc, log: () => Kc, query: () => Zc, should: () => vs, tags: () => rt, warn: () => Ii });
    var rt = { error: ce("prisma:error"), warn: ke("prisma:warn"), info: Oe("prisma:info"), query: nr("prisma:query") };
    var vs = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function Kc(...e) {
      console.log(...e);
    }
    function Ii(e, ...r) {
      vs.warn() && console.warn(`${rt.warn} ${e}`, ...r);
    }
    function Yc(e, ...r) {
      console.info(`${rt.info} ${e}`, ...r);
    }
    function zc(e, ...r) {
      console.error(`${rt.error} ${e}`, ...r);
    }
    function Zc(e, ...r) {
      console.log(`${rt.query} ${e}`, ...r);
    }
    function rn(e, r) {
      if (!e) throw new Error(`${r}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
    }
    function _e(e, r) {
      throw new Error(r);
    }
    var nt = k(require("path"));
    function Oi(e) {
      return nt.default.sep === nt.default.posix.sep ? e : e.split(nt.default.sep).join(nt.default.posix.sep);
    }
    var Li = k(ks());
    var nn = k(require("fs"));
    var wr = k(require("path"));
    function Os(e) {
      let r = e.ignoreProcessEnv ? {} : process.env, t = (n) => {
        var _a14;
        return ((_a14 = n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)) == null ? void 0 : _a14.reduce(function(o, s) {
          let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
          if (!a) return o;
          let l = a[1], u, c;
          if (l === "\\") c = a[0], u = c.replace("\\$", "$");
          else {
            let p = a[2];
            c = a[0].substring(l.length), u = Object.hasOwnProperty.call(r, p) ? r[p] : e.parsed[p] || "", u = t(u);
          }
          return o.replace(c, u);
        }, n)) ?? n;
      };
      for (let n in e.parsed) {
        let i = Object.hasOwnProperty.call(r, n) ? r[n] : e.parsed[n];
        e.parsed[n] = t(i);
      }
      for (let n in e.parsed) r[n] = e.parsed[n];
      return e;
    }
    var Fi = gr("prisma:tryLoadEnv");
    function it({ rootEnvPath: e, schemaEnvPath: r }, t = { conflictCheck: "none" }) {
      var _a14, _b12;
      let n = Ds(e);
      t.conflictCheck !== "none" && gp(n, r, t.conflictCheck);
      let i = null;
      return _s(n == null ? void 0 : n.path, r) || (i = Ds(r)), !n && !i && Fi("No Environment variables loaded"), (i == null ? void 0 : i.dotenvResult.error) ? console.error(ce(W("Schema Env Error: ")) + i.dotenvResult.error) : { message: [n == null ? void 0 : n.message, i == null ? void 0 : i.message].filter(Boolean).join(`
`), parsed: { ...(_a14 = n == null ? void 0 : n.dotenvResult) == null ? void 0 : _a14.parsed, ...(_b12 = i == null ? void 0 : i.dotenvResult) == null ? void 0 : _b12.parsed } };
    }
    function gp(e, r, t) {
      let n = e == null ? void 0 : e.dotenvResult.parsed, i = !_s(e == null ? void 0 : e.path, r);
      if (n && r && i && nn.default.existsSync(r)) {
        let o = Li.default.parse(nn.default.readFileSync(r)), s = [];
        for (let a in o) n[a] === o[a] && s.push(a);
        if (s.length > 0) {
          let a = wr.default.relative(process.cwd(), e.path), l = wr.default.relative(process.cwd(), r);
          if (t === "error") {
            let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${Y(a)} and ${Y(l)}
Conflicting env vars:
${s.map((c) => `  ${W(c)}`).join(`
`)}

We suggest to move the contents of ${Y(l)} to ${Y(a)} to consolidate your env vars.
`;
            throw new Error(u);
          } else if (t === "warn") {
            let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c) => W(c)).join(", ")} in ${Y(a)} and ${Y(l)}
Env vars from ${Y(l)} overwrite the ones from ${Y(a)}
      `;
            console.warn(`${ke("warn(prisma)")} ${u}`);
          }
        }
      }
    }
    function Ds(e) {
      if (hp(e)) {
        Fi(`Environment variables loaded from ${e}`);
        let r = Li.default.config({ path: e, debug: process.env.DOTENV_CONFIG_DEBUG ? true : void 0 });
        return { dotenvResult: Os(r), message: Ie(`Environment variables loaded from ${wr.default.relative(process.cwd(), e)}`), path: e };
      } else Fi(`Environment variables not found at ${e}`);
      return null;
    }
    function _s(e, r) {
      return e && r && wr.default.resolve(e) === wr.default.resolve(r);
    }
    function hp(e) {
      return !!(e && nn.default.existsSync(e));
    }
    function Mi(e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }
    function xr(e, r) {
      let t = {};
      for (let n of Object.keys(e)) t[n] = r(e[n], n);
      return t;
    }
    function $i(e, r) {
      if (e.length === 0) return;
      let t = e[0];
      for (let n = 1; n < e.length; n++) r(t, e[n]) < 0 && (t = e[n]);
      return t;
    }
    function x(e, r) {
      Object.defineProperty(e, "name", { value: r, configurable: true });
    }
    var Fs = /* @__PURE__ */ new Set();
    var ot = (e, r, ...t) => {
      Fs.has(e) || (Fs.add(e), Ii(r, ...t));
    };
    var T = class e extends Error {
      clientVersion;
      errorCode;
      retryable;
      constructor(r, t, n) {
        super(r), this.name = "PrismaClientInitializationError", this.clientVersion = t, this.errorCode = n, Error.captureStackTrace(e);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    x(T, "PrismaClientInitializationError");
    var z4 = class extends Error {
      code;
      meta;
      clientVersion;
      batchRequestIdx;
      constructor(r, { code: t, clientVersion: n, meta: i, batchRequestIdx: o }) {
        super(r), this.name = "PrismaClientKnownRequestError", this.code = t, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    x(z4, "PrismaClientKnownRequestError");
    var le = class extends Error {
      clientVersion;
      constructor(r, t) {
        super(r), this.name = "PrismaClientRustPanicError", this.clientVersion = t;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    x(le, "PrismaClientRustPanicError");
    var j = class extends Error {
      clientVersion;
      batchRequestIdx;
      constructor(r, { clientVersion: t, batchRequestIdx: n }) {
        super(r), this.name = "PrismaClientUnknownRequestError", this.clientVersion = t, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    x(j, "PrismaClientUnknownRequestError");
    var Z = class extends Error {
      name = "PrismaClientValidationError";
      clientVersion;
      constructor(r, { clientVersion: t }) {
        super(r), this.clientVersion = t;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    x(Z, "PrismaClientValidationError");
    var vr = 9e15;
    var Ke = 1e9;
    var qi = "0123456789abcdef";
    var un = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var cn = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var ji = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -vr, maxE: vr, crypto: false };
    var qs;
    var Fe;
    var w = true;
    var dn = "[DecimalError] ";
    var He = dn + "Invalid argument: ";
    var js = dn + "Precision limit exceeded";
    var Vs = dn + "crypto unavailable";
    var Bs = "[object Decimal]";
    var X = Math.floor;
    var U = Math.pow;
    var yp = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var bp = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var Ep = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var Us = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var fe = 1e7;
    var E = 7;
    var wp = 9007199254740991;
    var xp = un.length - 1;
    var Vi = cn.length - 1;
    var m = { toStringTag: Bs };
    m.absoluteValue = m.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), y(e);
    };
    m.ceil = function() {
      return y(new this.constructor(this), this.e + 1, 2);
    };
    m.clampedTo = m.clamp = function(e, r) {
      var t, n = this, i = n.constructor;
      if (e = new i(e), r = new i(r), !e.s || !r.s) return new i(NaN);
      if (e.gt(r)) throw Error(He + r);
      return t = n.cmp(e), t < 0 ? e : n.cmp(r) > 0 ? r : new i(n);
    };
    m.comparedTo = m.cmp = function(e) {
      var r, t, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, u = e.s;
      if (!s || !a) return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
      if (!s[0] || !a[0]) return s[0] ? l : a[0] ? -u : 0;
      if (l !== u) return l;
      if (o.e !== e.e) return o.e > e.e ^ l < 0 ? 1 : -1;
      for (n = s.length, i = a.length, r = 0, t = n < i ? n : i; r < t; ++r) if (s[r] !== a[r]) return s[r] > a[r] ^ l < 0 ? 1 : -1;
      return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
    };
    m.cosine = m.cos = function() {
      var e, r, t = this, n = t.constructor;
      return t.d ? t.d[0] ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + E, n.rounding = 1, t = vp(n, Hs(n, t)), n.precision = e, n.rounding = r, y(Fe == 2 || Fe == 3 ? t.neg() : t, e, r, true)) : new n(1) : new n(NaN);
    };
    m.cubeRoot = m.cbrt = function() {
      var e, r, t, n, i, o, s, a, l, u, c = this, p = c.constructor;
      if (!c.isFinite() || c.isZero()) return new p(c);
      for (w = false, o = c.s * U(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (t = J(c.d), e = c.e, (o = (e - t.length + 1) % 3) && (t += o == 1 || o == -2 ? "0" : "00"), o = U(t, 1 / 3), e = X((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? t = "5e" + e : (t = o.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new p(t), n.s = c.s) : n = new p(o.toString()), s = (e = p.precision) + 3; ; ) if (a = n, l = a.times(a).times(a), u = l.plus(c), n = F(u.plus(c).times(a), u.plus(l), s + 2, 1), J(a.d).slice(0, s) === (t = J(n.d)).slice(0, s)) if (t = t.slice(s - 3, s + 1), t == "9999" || !i && t == "4999") {
        if (!i && (y(a, e + 1, 0), a.times(a).times(a).eq(c))) {
          n = a;
          break;
        }
        s += 4, i = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (y(n, e + 1, 1), r = !n.times(n).times(n).eq(c));
        break;
      }
      return w = true, y(n, e, p.rounding, r);
    };
    m.decimalPlaces = m.dp = function() {
      var e, r = this.d, t = NaN;
      if (r) {
        if (e = r.length - 1, t = (e - X(this.e / E)) * E, e = r[e], e) for (; e % 10 == 0; e /= 10) t--;
        t < 0 && (t = 0);
      }
      return t;
    };
    m.dividedBy = m.div = function(e) {
      return F(this, new this.constructor(e));
    };
    m.dividedToIntegerBy = m.divToInt = function(e) {
      var r = this, t = r.constructor;
      return y(F(r, new t(e), 0, 1, 1), t.precision, t.rounding);
    };
    m.equals = m.eq = function(e) {
      return this.cmp(e) === 0;
    };
    m.floor = function() {
      return y(new this.constructor(this), this.e + 1, 3);
    };
    m.greaterThan = m.gt = function(e) {
      return this.cmp(e) > 0;
    };
    m.greaterThanOrEqualTo = m.gte = function(e) {
      var r = this.cmp(e);
      return r == 1 || r === 0;
    };
    m.hyperbolicCosine = m.cosh = function() {
      var e, r, t, n, i, o = this, s = o.constructor, a = new s(1);
      if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
      if (o.isZero()) return a;
      t = s.precision, n = s.rounding, s.precision = t + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), r = (1 / fn(4, e)).toString()) : (e = 16, r = "2.3283064365386962890625e-10"), o = Pr(s, 1, o.times(r), new s(1), true);
      for (var l, u = e, c = new s(8); u--; ) l = o.times(o), o = a.minus(l.times(c.minus(l.times(c))));
      return y(o, s.precision = t, s.rounding = n, true);
    };
    m.hyperbolicSine = m.sinh = function() {
      var e, r, t, n, i = this, o = i.constructor;
      if (!i.isFinite() || i.isZero()) return new o(i);
      if (r = o.precision, t = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3) i = Pr(o, 2, i, i, true);
      else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / fn(5, e)), i = Pr(o, 2, i, i, true);
        for (var s, a = new o(5), l = new o(16), u = new o(20); e--; ) s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
      }
      return o.precision = r, o.rounding = t, y(i, r, t, true);
    };
    m.hyperbolicTangent = m.tanh = function() {
      var e, r, t = this, n = t.constructor;
      return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 7, n.rounding = 1, F(t.sinh(), t.cosh(), n.precision = e, n.rounding = r)) : new n(t.s);
    };
    m.inverseCosine = m.acos = function() {
      var e = this, r = e.constructor, t = e.abs().cmp(1), n = r.precision, i = r.rounding;
      return t !== -1 ? t === 0 ? e.isNeg() ? we(r, n, i) : new r(0) : new r(NaN) : e.isZero() ? we(r, n + 4, i).times(0.5) : (r.precision = n + 6, r.rounding = 1, e = new r(1).minus(e).div(e.plus(1)).sqrt().atan(), r.precision = n, r.rounding = i, e.times(2));
    };
    m.inverseHyperbolicCosine = m.acosh = function() {
      var e, r, t = this, n = t.constructor;
      return t.lte(1) ? new n(t.eq(1) ? 0 : NaN) : t.isFinite() ? (e = n.precision, r = n.rounding, n.precision = e + Math.max(Math.abs(t.e), t.sd()) + 4, n.rounding = 1, w = false, t = t.times(t).minus(1).sqrt().plus(t), w = true, n.precision = e, n.rounding = r, t.ln()) : new n(t);
    };
    m.inverseHyperbolicSine = m.asinh = function() {
      var e, r, t = this, n = t.constructor;
      return !t.isFinite() || t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 2 * Math.max(Math.abs(t.e), t.sd()) + 6, n.rounding = 1, w = false, t = t.times(t).plus(1).sqrt().plus(t), w = true, n.precision = e, n.rounding = r, t.ln());
    };
    m.inverseHyperbolicTangent = m.atanh = function() {
      var e, r, t, n, i = this, o = i.constructor;
      return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, r = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? y(new o(i), e, r, true) : (o.precision = t = n - i.e, i = F(i.plus(1), new o(1).minus(i), t + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = r, i.times(0.5))) : new o(NaN);
    };
    m.inverseSine = m.asin = function() {
      var e, r, t, n, i = this, o = i.constructor;
      return i.isZero() ? new o(i) : (r = i.abs().cmp(1), t = o.precision, n = o.rounding, r !== -1 ? r === 0 ? (e = we(o, t + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = t + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = t, o.rounding = n, i.times(2)));
    };
    m.inverseTangent = m.atan = function() {
      var e, r, t, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding;
      if (u.isFinite()) {
        if (u.isZero()) return new c(u);
        if (u.abs().eq(1) && p + 4 <= Vi) return s = we(c, p + 4, d).times(0.25), s.s = u.s, s;
      } else {
        if (!u.s) return new c(NaN);
        if (p + 4 <= Vi) return s = we(c, p + 4, d).times(0.5), s.s = u.s, s;
      }
      for (c.precision = a = p + 10, c.rounding = 1, t = Math.min(28, a / E + 2 | 0), e = t; e; --e) u = u.div(u.times(u).plus(1).sqrt().plus(1));
      for (w = false, r = Math.ceil(a / E), n = 1, l = u.times(u), s = new c(u), i = u; e !== -1; ) if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[r] !== void 0) for (e = r; s.d[e] === o.d[e] && e--; ) ;
      return t && (s = s.times(2 << t - 1)), w = true, y(s, c.precision = p, c.rounding = d, true);
    };
    m.isFinite = function() {
      return !!this.d;
    };
    m.isInteger = m.isInt = function() {
      return !!this.d && X(this.e / E) > this.d.length - 2;
    };
    m.isNaN = function() {
      return !this.s;
    };
    m.isNegative = m.isNeg = function() {
      return this.s < 0;
    };
    m.isPositive = m.isPos = function() {
      return this.s > 0;
    };
    m.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    m.lessThan = m.lt = function(e) {
      return this.cmp(e) < 0;
    };
    m.lessThanOrEqualTo = m.lte = function(e) {
      return this.cmp(e) < 1;
    };
    m.logarithm = m.log = function(e) {
      var r, t, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding, f = 5;
      if (e == null) e = new c(10), r = true;
      else {
        if (e = new c(e), t = e.d, e.s < 0 || !t || !t[0] || e.eq(1)) return new c(NaN);
        r = e.eq(10);
      }
      if (t = u.d, u.s < 0 || !t || !t[0] || u.eq(1)) return new c(t && !t[0] ? -1 / 0 : u.s != 1 ? NaN : t ? 0 : 1 / 0);
      if (r) if (t.length > 1) o = true;
      else {
        for (i = t[0]; i % 10 === 0; ) i /= 10;
        o = i !== 1;
      }
      if (w = false, a = p + f, s = Je(u, a), n = r ? pn(c, a + 10) : Je(e, a), l = F(s, n, a, 1), st(l.d, i = p, d)) do
        if (a += 10, s = Je(u, a), n = r ? pn(c, a + 10) : Je(e, a), l = F(s, n, a, 1), !o) {
          +J(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = y(l, p + 1, 0));
          break;
        }
      while (st(l.d, i += 10, d));
      return w = true, y(l, p, d);
    };
    m.minus = m.sub = function(e) {
      var r, t, n, i, o, s, a, l, u, c, p, d, f = this, g = f.constructor;
      if (e = new g(e), !f.d || !e.d) return !f.s || !e.s ? e = new g(NaN) : f.d ? e.s = -e.s : e = new g(e.d || f.s !== e.s ? f : NaN), e;
      if (f.s != e.s) return e.s = -e.s, f.plus(e);
      if (u = f.d, d = e.d, a = g.precision, l = g.rounding, !u[0] || !d[0]) {
        if (d[0]) e.s = -e.s;
        else if (u[0]) e = new g(f);
        else return new g(l === 3 ? -0 : 0);
        return w ? y(e, a, l) : e;
      }
      if (t = X(e.e / E), c = X(f.e / E), u = u.slice(), o = c - t, o) {
        for (p = o < 0, p ? (r = u, o = -o, s = d.length) : (r = d, t = c, s = u.length), n = Math.max(Math.ceil(a / E), s) + 2, o > n && (o = n, r.length = 1), r.reverse(), n = o; n--; ) r.push(0);
        r.reverse();
      } else {
        for (n = u.length, s = d.length, p = n < s, p && (s = n), n = 0; n < s; n++) if (u[n] != d[n]) {
          p = u[n] < d[n];
          break;
        }
        o = 0;
      }
      for (p && (r = u, u = d, d = r, e.s = -e.s), s = u.length, n = d.length - s; n > 0; --n) u[s++] = 0;
      for (n = d.length; n > o; ) {
        if (u[--n] < d[n]) {
          for (i = n; i && u[--i] === 0; ) u[i] = fe - 1;
          --u[i], u[n] += fe;
        }
        u[n] -= d[n];
      }
      for (; u[--s] === 0; ) u.pop();
      for (; u[0] === 0; u.shift()) --t;
      return u[0] ? (e.d = u, e.e = mn(u, t), w ? y(e, a, l) : e) : new g(l === 3 ? -0 : 0);
    };
    m.modulo = m.mod = function(e) {
      var r, t = this, n = t.constructor;
      return e = new n(e), !t.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || t.d && !t.d[0] ? y(new n(t), n.precision, n.rounding) : (w = false, n.modulo == 9 ? (r = F(t, e.abs(), 0, 3, 1), r.s *= e.s) : r = F(t, e, 0, n.modulo, 1), r = r.times(e), w = true, t.minus(r));
    };
    m.naturalExponential = m.exp = function() {
      return Bi(this);
    };
    m.naturalLogarithm = m.ln = function() {
      return Je(this);
    };
    m.negated = m.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, y(e);
    };
    m.plus = m.add = function(e) {
      var r, t, n, i, o, s, a, l, u, c, p = this, d = p.constructor;
      if (e = new d(e), !p.d || !e.d) return !p.s || !e.s ? e = new d(NaN) : p.d || (e = new d(e.d || p.s === e.s ? p : NaN)), e;
      if (p.s != e.s) return e.s = -e.s, p.minus(e);
      if (u = p.d, c = e.d, a = d.precision, l = d.rounding, !u[0] || !c[0]) return c[0] || (e = new d(p)), w ? y(e, a, l) : e;
      if (o = X(p.e / E), n = X(e.e / E), u = u.slice(), i = o - n, i) {
        for (i < 0 ? (t = u, i = -i, s = c.length) : (t = c, n = o, s = u.length), o = Math.ceil(a / E), s = o > s ? o + 1 : s + 1, i > s && (i = s, t.length = 1), t.reverse(); i--; ) t.push(0);
        t.reverse();
      }
      for (s = u.length, i = c.length, s - i < 0 && (i = s, t = c, c = u, u = t), r = 0; i; ) r = (u[--i] = u[i] + c[i] + r) / fe | 0, u[i] %= fe;
      for (r && (u.unshift(r), ++n), s = u.length; u[--s] == 0; ) u.pop();
      return e.d = u, e.e = mn(u, n), w ? y(e, a, l) : e;
    };
    m.precision = m.sd = function(e) {
      var r, t = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(He + e);
      return t.d ? (r = Qs(t.d), e && t.e + 1 > r && (r = t.e + 1)) : r = NaN, r;
    };
    m.round = function() {
      var e = this, r = e.constructor;
      return y(new r(e), e.e + 1, r.rounding);
    };
    m.sine = m.sin = function() {
      var e, r, t = this, n = t.constructor;
      return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + Math.max(t.e, t.sd()) + E, n.rounding = 1, t = Tp(n, Hs(n, t)), n.precision = e, n.rounding = r, y(Fe > 2 ? t.neg() : t, e, r, true)) : new n(NaN);
    };
    m.squareRoot = m.sqrt = function() {
      var e, r, t, n, i, o, s = this, a = s.d, l = s.e, u = s.s, c = s.constructor;
      if (u !== 1 || !a || !a[0]) return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
      for (w = false, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (r = J(a), (r.length + l) % 2 == 0 && (r += "0"), u = Math.sqrt(r), l = X((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? r = "5e" + l : (r = u.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + l), n = new c(r)) : n = new c(u.toString()), t = (l = c.precision) + 3; ; ) if (o = n, n = o.plus(F(s, o, t + 2, 1)).times(0.5), J(o.d).slice(0, t) === (r = J(n.d)).slice(0, t)) if (r = r.slice(t - 3, t + 1), r == "9999" || !i && r == "4999") {
        if (!i && (y(o, l + 1, 0), o.times(o).eq(s))) {
          n = o;
          break;
        }
        t += 4, i = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (y(n, l + 1, 1), e = !n.times(n).eq(s));
        break;
      }
      return w = true, y(n, l, c.rounding, e);
    };
    m.tangent = m.tan = function() {
      var e, r, t = this, n = t.constructor;
      return t.isFinite() ? t.isZero() ? new n(t) : (e = n.precision, r = n.rounding, n.precision = e + 10, n.rounding = 1, t = t.sin(), t.s = 1, t = F(t, new n(1).minus(t.times(t)).sqrt(), e + 10, 0), n.precision = e, n.rounding = r, y(Fe == 2 || Fe == 4 ? t.neg() : t, e, r, true)) : new n(NaN);
    };
    m.times = m.mul = function(e) {
      var r, t, n, i, o, s, a, l, u, c = this, p = c.constructor, d = c.d, f = (e = new p(e)).d;
      if (e.s *= c.s, !d || !d[0] || !f || !f[0]) return new p(!e.s || d && !d[0] && !f || f && !f[0] && !d ? NaN : !d || !f ? e.s / 0 : e.s * 0);
      for (t = X(c.e / E) + X(e.e / E), l = d.length, u = f.length, l < u && (o = d, d = f, f = o, s = l, l = u, u = s), o = [], s = l + u, n = s; n--; ) o.push(0);
      for (n = u; --n >= 0; ) {
        for (r = 0, i = l + n; i > n; ) a = o[i] + f[n] * d[i - n - 1] + r, o[i--] = a % fe | 0, r = a / fe | 0;
        o[i] = (o[i] + r) % fe | 0;
      }
      for (; !o[--s]; ) o.pop();
      return r ? ++t : o.shift(), e.d = o, e.e = mn(o, t), w ? y(e, p.precision, p.rounding) : e;
    };
    m.toBinary = function(e, r) {
      return Ui(this, 2, e, r);
    };
    m.toDecimalPlaces = m.toDP = function(e, r) {
      var t = this, n = t.constructor;
      return t = new n(t), e === void 0 ? t : (ie(e, 0, Ke), r === void 0 ? r = n.rounding : ie(r, 0, 8), y(t, e + t.e + 1, r));
    };
    m.toExponential = function(e, r) {
      var t, n = this, i = n.constructor;
      return e === void 0 ? t = xe(n, true) : (ie(e, 0, Ke), r === void 0 ? r = i.rounding : ie(r, 0, 8), n = y(new i(n), e + 1, r), t = xe(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + t : t;
    };
    m.toFixed = function(e, r) {
      var t, n, i = this, o = i.constructor;
      return e === void 0 ? t = xe(i) : (ie(e, 0, Ke), r === void 0 ? r = o.rounding : ie(r, 0, 8), n = y(new o(i), e + i.e + 1, r), t = xe(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + t : t;
    };
    m.toFraction = function(e) {
      var r, t, n, i, o, s, a, l, u, c, p, d, f = this, g = f.d, h = f.constructor;
      if (!g) return new h(f);
      if (u = t = new h(1), n = l = new h(0), r = new h(n), o = r.e = Qs(g) - f.e - 1, s = o % E, r.d[0] = U(10, s < 0 ? E + s : s), e == null) e = o > 0 ? r : u;
      else {
        if (a = new h(e), !a.isInt() || a.lt(u)) throw Error(He + a);
        e = a.gt(r) ? o > 0 ? r : u : a;
      }
      for (w = false, a = new h(J(g)), c = h.precision, h.precision = o = g.length * E * 2; p = F(a, r, 0, 1, 1), i = t.plus(p.times(n)), i.cmp(e) != 1; ) t = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = r, r = a.minus(p.times(i)), a = i;
      return i = F(e.minus(t), n, 0, 1, 1), l = l.plus(i.times(u)), t = t.plus(i.times(n)), l.s = u.s = f.s, d = F(u, n, o, 1).minus(f).abs().cmp(F(l, t, o, 1).minus(f).abs()) < 1 ? [u, n] : [l, t], h.precision = c, w = true, d;
    };
    m.toHexadecimal = m.toHex = function(e, r) {
      return Ui(this, 16, e, r);
    };
    m.toNearest = function(e, r) {
      var t = this, n = t.constructor;
      if (t = new n(t), e == null) {
        if (!t.d) return t;
        e = new n(1), r = n.rounding;
      } else {
        if (e = new n(e), r === void 0 ? r = n.rounding : ie(r, 0, 8), !t.d) return e.s ? t : e;
        if (!e.d) return e.s && (e.s = t.s), e;
      }
      return e.d[0] ? (w = false, t = F(t, e, 0, r, 1).times(e), w = true, y(t)) : (e.s = t.s, t = e), t;
    };
    m.toNumber = function() {
      return +this;
    };
    m.toOctal = function(e, r) {
      return Ui(this, 8, e, r);
    };
    m.toPower = m.pow = function(e) {
      var r, t, n, i, o, s, a = this, l = a.constructor, u = +(e = new l(e));
      if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new l(U(+a, u));
      if (a = new l(a), a.eq(1)) return a;
      if (n = l.precision, o = l.rounding, e.eq(1)) return y(a, n, o);
      if (r = X(e.e / E), r >= e.d.length - 1 && (t = u < 0 ? -u : u) <= wp) return i = Gs(l, a, t, n), e.s < 0 ? new l(1).div(i) : y(i, n, o);
      if (s = a.s, s < 0) {
        if (r < e.d.length - 1) return new l(NaN);
        if ((e.d[r] & 1) == 0 && (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1) return a.s = s, a;
      }
      return t = U(+a, u), r = t == 0 || !isFinite(t) ? X(u * (Math.log("0." + J(a.d)) / Math.LN10 + a.e + 1)) : new l(t + "").e, r > l.maxE + 1 || r < l.minE - 1 ? new l(r > 0 ? s / 0 : 0) : (w = false, l.rounding = a.s = 1, t = Math.min(12, (r + "").length), i = Bi(e.times(Je(a, n + t)), n), i.d && (i = y(i, n + 5, 1), st(i.d, n, o) && (r = n + 10, i = y(Bi(e.times(Je(a, r + t)), r), r + 5, 1), +J(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = y(i, n + 1, 0)))), i.s = s, w = true, l.rounding = o, y(i, n, o));
    };
    m.toPrecision = function(e, r) {
      var t, n = this, i = n.constructor;
      return e === void 0 ? t = xe(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (ie(e, 1, Ke), r === void 0 ? r = i.rounding : ie(r, 0, 8), n = y(new i(n), e, r), t = xe(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + t : t;
    };
    m.toSignificantDigits = m.toSD = function(e, r) {
      var t = this, n = t.constructor;
      return e === void 0 ? (e = n.precision, r = n.rounding) : (ie(e, 1, Ke), r === void 0 ? r = n.rounding : ie(r, 0, 8)), y(new n(t), e, r);
    };
    m.toString = function() {
      var e = this, r = e.constructor, t = xe(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + t : t;
    };
    m.truncated = m.trunc = function() {
      return y(new this.constructor(this), this.e + 1, 1);
    };
    m.valueOf = m.toJSON = function() {
      var e = this, r = e.constructor, t = xe(e, e.e <= r.toExpNeg || e.e >= r.toExpPos);
      return e.isNeg() ? "-" + t : t;
    };
    function J(e) {
      var r, t, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, r = 1; r < i; r++) n = e[r] + "", t = E - n.length, t && (o += We(t)), o += n;
        s = e[r], n = s + "", t = E - n.length, t && (o += We(t));
      } else if (s === 0) return "0";
      for (; s % 10 === 0; ) s /= 10;
      return o + s;
    }
    function ie(e, r, t) {
      if (e !== ~~e || e < r || e > t) throw Error(He + e);
    }
    function st(e, r, t, n) {
      var i, o, s, a;
      for (o = e[0]; o >= 10; o /= 10) --r;
      return --r < 0 ? (r += E, i = 0) : (i = Math.ceil((r + 1) / E), r %= E), o = U(10, E - r), a = e[i] % o | 0, n == null ? r < 3 ? (r == 0 ? a = a / 100 | 0 : r == 1 && (a = a / 10 | 0), s = t < 4 && a == 99999 || t > 3 && a == 49999 || a == 5e4 || a == 0) : s = (t < 4 && a + 1 == o || t > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == U(10, r - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : r < 4 ? (r == 0 ? a = a / 1e3 | 0 : r == 1 ? a = a / 100 | 0 : r == 2 && (a = a / 10 | 0), s = (n || t < 4) && a == 9999 || !n && t > 3 && a == 4999) : s = ((n || t < 4) && a + 1 == o || !n && t > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == U(10, r - 3) - 1, s;
    }
    function an(e, r, t) {
      for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
        for (o = i.length; o--; ) i[o] *= r;
        for (i[0] += qi.indexOf(e.charAt(s++)), n = 0; n < i.length; n++) i[n] > t - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / t | 0, i[n] %= t);
      }
      return i.reverse();
    }
    function vp(e, r) {
      var t, n, i;
      if (r.isZero()) return r;
      n = r.d.length, n < 32 ? (t = Math.ceil(n / 3), i = (1 / fn(4, t)).toString()) : (t = 16, i = "2.3283064365386962890625e-10"), e.precision += t, r = Pr(e, 1, r.times(i), new e(1));
      for (var o = t; o--; ) {
        var s = r.times(r);
        r = s.times(s).minus(s).times(8).plus(1);
      }
      return e.precision -= t, r;
    }
    var F = /* @__PURE__ */ function() {
      function e(n, i, o) {
        var s, a = 0, l = n.length;
        for (n = n.slice(); l--; ) s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
        return a && n.unshift(a), n;
      }
      function r(n, i, o, s) {
        var a, l;
        if (o != s) l = o > s ? 1 : -1;
        else for (a = l = 0; a < o; a++) if (n[a] != i[a]) {
          l = n[a] > i[a] ? 1 : -1;
          break;
        }
        return l;
      }
      function t(n, i, o, s) {
        for (var a = 0; o--; ) n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
        for (; !n[0] && n.length > 1; ) n.shift();
      }
      return function(n, i, o, s, a, l) {
        var u, c, p, d, f, g, h, I, P, S, b, O, me, ae, Jr, V, te, Ae, H, fr, $t = n.constructor, Xn = n.s == i.s ? 1 : -1, K = n.d, _ = i.d;
        if (!K || !K[0] || !_ || !_[0]) return new $t(!n.s || !i.s || (K ? _ && K[0] == _[0] : !_) ? NaN : K && K[0] == 0 || !_ ? Xn * 0 : Xn / 0);
        for (l ? (f = 1, c = n.e - i.e) : (l = fe, f = E, c = X(n.e / f) - X(i.e / f)), H = _.length, te = K.length, P = new $t(Xn), S = P.d = [], p = 0; _[p] == (K[p] || 0); p++) ;
        if (_[p] > (K[p] || 0) && c--, o == null ? (ae = o = $t.precision, s = $t.rounding) : a ? ae = o + (n.e - i.e) + 1 : ae = o, ae < 0) S.push(1), g = true;
        else {
          if (ae = ae / f + 2 | 0, p = 0, H == 1) {
            for (d = 0, _ = _[0], ae++; (p < te || d) && ae--; p++) Jr = d * l + (K[p] || 0), S[p] = Jr / _ | 0, d = Jr % _ | 0;
            g = d || p < te;
          } else {
            for (d = l / (_[0] + 1) | 0, d > 1 && (_ = e(_, d, l), K = e(K, d, l), H = _.length, te = K.length), V = H, b = K.slice(0, H), O = b.length; O < H; ) b[O++] = 0;
            fr = _.slice(), fr.unshift(0), Ae = _[0], _[1] >= l / 2 && ++Ae;
            do
              d = 0, u = r(_, b, H, O), u < 0 ? (me = b[0], H != O && (me = me * l + (b[1] || 0)), d = me / Ae | 0, d > 1 ? (d >= l && (d = l - 1), h = e(_, d, l), I = h.length, O = b.length, u = r(h, b, I, O), u == 1 && (d--, t(h, H < I ? fr : _, I, l))) : (d == 0 && (u = d = 1), h = _.slice()), I = h.length, I < O && h.unshift(0), t(b, h, O, l), u == -1 && (O = b.length, u = r(_, b, H, O), u < 1 && (d++, t(b, H < O ? fr : _, O, l))), O = b.length) : u === 0 && (d++, b = [0]), S[p++] = d, u && b[0] ? b[O++] = K[V] || 0 : (b = [K[V]], O = 1);
            while ((V++ < te || b[0] !== void 0) && ae--);
            g = b[0] !== void 0;
          }
          S[0] || S.shift();
        }
        if (f == 1) P.e = c, qs = g;
        else {
          for (p = 1, d = S[0]; d >= 10; d /= 10) p++;
          P.e = p + c * f - 1, y(P, a ? o + P.e + 1 : o, s, g);
        }
        return P;
      };
    }();
    function y(e, r, t, n) {
      var i, o, s, a, l, u, c, p, d, f = e.constructor;
      e: if (r != null) {
        if (p = e.d, !p) return e;
        for (i = 1, a = p[0]; a >= 10; a /= 10) i++;
        if (o = r - i, o < 0) o += E, s = r, c = p[d = 0], l = c / U(10, i - s - 1) % 10 | 0;
        else if (d = Math.ceil((o + 1) / E), a = p.length, d >= a) if (n) {
          for (; a++ <= d; ) p.push(0);
          c = l = 0, i = 1, o %= E, s = o - E + 1;
        } else break e;
        else {
          for (c = a = p[d], i = 1; a >= 10; a /= 10) i++;
          o %= E, s = o - E + i, l = s < 0 ? 0 : c / U(10, i - s - 1) % 10 | 0;
        }
        if (n = n || r < 0 || p[d + 1] !== void 0 || (s < 0 ? c : c % U(10, i - s - 1)), u = t < 4 ? (l || n) && (t == 0 || t == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (t == 4 || n || t == 6 && (o > 0 ? s > 0 ? c / U(10, i - s) : 0 : p[d - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), r < 1 || !p[0]) return p.length = 0, u ? (r -= e.e + 1, p[0] = U(10, (E - r % E) % E), e.e = -r || 0) : p[0] = e.e = 0, e;
        if (o == 0 ? (p.length = d, a = 1, d--) : (p.length = d + 1, a = U(10, E - o), p[d] = s > 0 ? (c / U(10, i - s) % U(10, s) | 0) * a : 0), u) for (; ; ) if (d == 0) {
          for (o = 1, s = p[0]; s >= 10; s /= 10) o++;
          for (s = p[0] += a, a = 1; s >= 10; s /= 10) a++;
          o != a && (e.e++, p[0] == fe && (p[0] = 1));
          break;
        } else {
          if (p[d] += a, p[d] != fe) break;
          p[d--] = 0, a = 1;
        }
        for (o = p.length; p[--o] === 0; ) p.pop();
      }
      return w && (e.e > f.maxE ? (e.d = null, e.e = NaN) : e.e < f.minE && (e.e = 0, e.d = [0])), e;
    }
    function xe(e, r, t) {
      if (!e.isFinite()) return Js(e);
      var n, i = e.e, o = J(e.d), s = o.length;
      return r ? (t && (n = t - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + We(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + We(-i - 1) + o, t && (n = t - s) > 0 && (o += We(n))) : i >= s ? (o += We(i + 1 - s), t && (n = t - i - 1) > 0 && (o = o + "." + We(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), t && (n = t - s) > 0 && (i + 1 === s && (o += "."), o += We(n))), o;
    }
    function mn(e, r) {
      var t = e[0];
      for (r *= E; t >= 10; t /= 10) r++;
      return r;
    }
    function pn(e, r, t) {
      if (r > xp) throw w = true, t && (e.precision = t), Error(js);
      return y(new e(un), r, 1, true);
    }
    function we(e, r, t) {
      if (r > Vi) throw Error(js);
      return y(new e(cn), r, t, true);
    }
    function Qs(e) {
      var r = e.length - 1, t = r * E + 1;
      if (r = e[r], r) {
        for (; r % 10 == 0; r /= 10) t--;
        for (r = e[0]; r >= 10; r /= 10) t++;
      }
      return t;
    }
    function We(e) {
      for (var r = ""; e--; ) r += "0";
      return r;
    }
    function Gs(e, r, t, n) {
      var i, o = new e(1), s = Math.ceil(n / E + 4);
      for (w = false; ; ) {
        if (t % 2 && (o = o.times(r), Ms(o.d, s) && (i = true)), t = X(t / 2), t === 0) {
          t = o.d.length - 1, i && o.d[t] === 0 && ++o.d[t];
          break;
        }
        r = r.times(r), Ms(r.d, s);
      }
      return w = true, o;
    }
    function Ls(e) {
      return e.d[e.d.length - 1] & 1;
    }
    function Ws(e, r, t) {
      for (var n, i, o = new e(r[0]), s = 0; ++s < r.length; ) {
        if (i = new e(r[s]), !i.s) {
          o = i;
          break;
        }
        n = o.cmp(i), (n === t || n === 0 && o.s === t) && (o = i);
      }
      return o;
    }
    function Bi(e, r) {
      var t, n, i, o, s, a, l, u = 0, c = 0, p = 0, d = e.constructor, f = d.rounding, g = d.precision;
      if (!e.d || !e.d[0] || e.e > 17) return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
      for (r == null ? (w = false, l = g) : l = r, a = new d(0.03125); e.e > -2; ) e = e.times(a), p += 5;
      for (n = Math.log(U(2, p)) / Math.LN10 * 2 + 5 | 0, l += n, t = o = s = new d(1), d.precision = l; ; ) {
        if (o = y(o.times(e), l, 1), t = t.times(++c), a = s.plus(F(o, t, l, 1)), J(a.d).slice(0, l) === J(s.d).slice(0, l)) {
          for (i = p; i--; ) s = y(s.times(s), l, 1);
          if (r == null) if (u < 3 && st(s.d, l - n, f, u)) d.precision = l += 10, t = o = a = new d(1), c = 0, u++;
          else return y(s, d.precision = g, f, w = true);
          else return d.precision = g, s;
        }
        s = a;
      }
    }
    function Je(e, r) {
      var t, n, i, o, s, a, l, u, c, p, d, f = 1, g = 10, h = e, I = h.d, P = h.constructor, S = P.rounding, b = P.precision;
      if (h.s < 0 || !I || !I[0] || !h.e && I[0] == 1 && I.length == 1) return new P(I && !I[0] ? -1 / 0 : h.s != 1 ? NaN : I ? 0 : h);
      if (r == null ? (w = false, c = b) : c = r, P.precision = c += g, t = J(I), n = t.charAt(0), Math.abs(o = h.e) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && t.charAt(1) > 3; ) h = h.times(e), t = J(h.d), n = t.charAt(0), f++;
        o = h.e, n > 1 ? (h = new P("0." + t), o++) : h = new P(n + "." + t.slice(1));
      } else return u = pn(P, c + 2, b).times(o + ""), h = Je(new P(n + "." + t.slice(1)), c - g).plus(u), P.precision = b, r == null ? y(h, b, S, w = true) : h;
      for (p = h, l = s = h = F(h.minus(1), h.plus(1), c, 1), d = y(h.times(h), c, 1), i = 3; ; ) {
        if (s = y(s.times(d), c, 1), u = l.plus(F(s, new P(i), c, 1)), J(u.d).slice(0, c) === J(l.d).slice(0, c)) if (l = l.times(2), o !== 0 && (l = l.plus(pn(P, c + 2, b).times(o + ""))), l = F(l, new P(f), c, 1), r == null) if (st(l.d, c - g, S, a)) P.precision = c += g, u = s = h = F(p.minus(1), p.plus(1), c, 1), d = y(h.times(h), c, 1), i = a = 1;
        else return y(l, P.precision = b, S, w = true);
        else return P.precision = b, l;
        l = u, i += 2;
      }
    }
    function Js(e) {
      return String(e.s * e.s / 0);
    }
    function ln(e, r) {
      var t, n, i;
      for ((t = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (n = r.search(/e/i)) > 0 ? (t < 0 && (t = n), t += +r.slice(n + 1), r = r.substring(0, n)) : t < 0 && (t = r.length), n = 0; r.charCodeAt(n) === 48; n++) ;
      for (i = r.length; r.charCodeAt(i - 1) === 48; --i) ;
      if (r = r.slice(n, i), r) {
        if (i -= n, e.e = t = t - n - 1, e.d = [], n = (t + 1) % E, t < 0 && (n += E), n < i) {
          for (n && e.d.push(+r.slice(0, n)), i -= E; n < i; ) e.d.push(+r.slice(n, n += E));
          r = r.slice(n), n = E - r.length;
        } else n -= i;
        for (; n--; ) r += "0";
        e.d.push(+r), w && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else e.e = 0, e.d = [0];
      return e;
    }
    function Pp(e, r) {
      var t, n, i, o, s, a, l, u, c;
      if (r.indexOf("_") > -1) {
        if (r = r.replace(/(\d)_(?=\d)/g, "$1"), Us.test(r)) return ln(e, r);
      } else if (r === "Infinity" || r === "NaN") return +r || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (bp.test(r)) t = 16, r = r.toLowerCase();
      else if (yp.test(r)) t = 2;
      else if (Ep.test(r)) t = 8;
      else throw Error(He + r);
      for (o = r.search(/p/i), o > 0 ? (l = +r.slice(o + 1), r = r.substring(2, o)) : r = r.slice(2), o = r.indexOf("."), s = o >= 0, n = e.constructor, s && (r = r.replace(".", ""), a = r.length, o = a - o, i = Gs(n, new n(t), o, o * 2)), u = an(r, t, fe), c = u.length - 1, o = c; u[o] === 0; --o) u.pop();
      return o < 0 ? new n(e.s * 0) : (e.e = mn(u, c), e.d = u, w = false, s && (e = F(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? U(2, l) : sr.pow(2, l))), w = true, e);
    }
    function Tp(e, r) {
      var t, n = r.d.length;
      if (n < 3) return r.isZero() ? r : Pr(e, 2, r, r);
      t = 1.4 * Math.sqrt(n), t = t > 16 ? 16 : t | 0, r = r.times(1 / fn(5, t)), r = Pr(e, 2, r, r);
      for (var i, o = new e(5), s = new e(16), a = new e(20); t--; ) i = r.times(r), r = r.times(o.plus(i.times(s.times(i).minus(a))));
      return r;
    }
    function Pr(e, r, t, n, i) {
      var o, s, a, l, u = 1, c = e.precision, p = Math.ceil(c / E);
      for (w = false, l = t.times(t), a = new e(n); ; ) {
        if (s = F(a.times(l), new e(r++ * r++), c, 1), a = i ? n.plus(s) : n.minus(s), n = F(s.times(l), new e(r++ * r++), c, 1), s = a.plus(n), s.d[p] !== void 0) {
          for (o = p; s.d[o] === a.d[o] && o--; ) ;
          if (o == -1) break;
        }
        o = a, a = n, n = s, s = o, u++;
      }
      return w = true, s.d.length = p + 1, s;
    }
    function fn(e, r) {
      for (var t = e; --r; ) t *= e;
      return t;
    }
    function Hs(e, r) {
      var t, n = r.s < 0, i = we(e, e.precision, 1), o = i.times(0.5);
      if (r = r.abs(), r.lte(o)) return Fe = n ? 4 : 1, r;
      if (t = r.divToInt(i), t.isZero()) Fe = n ? 3 : 2;
      else {
        if (r = r.minus(t.times(i)), r.lte(o)) return Fe = Ls(t) ? n ? 2 : 3 : n ? 4 : 1, r;
        Fe = Ls(t) ? n ? 1 : 4 : n ? 3 : 2;
      }
      return r.minus(i).abs();
    }
    function Ui(e, r, t, n) {
      var i, o, s, a, l, u, c, p, d, f = e.constructor, g = t !== void 0;
      if (g ? (ie(t, 1, Ke), n === void 0 ? n = f.rounding : ie(n, 0, 8)) : (t = f.precision, n = f.rounding), !e.isFinite()) c = Js(e);
      else {
        for (c = xe(e), s = c.indexOf("."), g ? (i = 2, r == 16 ? t = t * 4 - 3 : r == 8 && (t = t * 3 - 2)) : i = r, s >= 0 && (c = c.replace(".", ""), d = new f(1), d.e = c.length - s, d.d = an(xe(d), 10, i), d.e = d.d.length), p = an(c, 10, i), o = l = p.length; p[--l] == 0; ) p.pop();
        if (!p[0]) c = g ? "0p+0" : "0";
        else {
          if (s < 0 ? o-- : (e = new f(e), e.d = p, e.e = o, e = F(e, d, t, n, 0, i), p = e.d, o = e.e, u = qs), s = p[t], a = i / 2, u = u || p[t + 1] !== void 0, u = n < 4 ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[t - 1] & 1 || n === (e.s < 0 ? 8 : 7)), p.length = t, u) for (; ++p[--t] > i - 1; ) p[t] = 0, t || (++o, p.unshift(1));
          for (l = p.length; !p[l - 1]; --l) ;
          for (s = 0, c = ""; s < l; s++) c += qi.charAt(p[s]);
          if (g) {
            if (l > 1) if (r == 16 || r == 8) {
              for (s = r == 16 ? 4 : 3, --l; l % s; l++) c += "0";
              for (p = an(c, i, r), l = p.length; !p[l - 1]; --l) ;
              for (s = 1, c = "1."; s < l; s++) c += qi.charAt(p[s]);
            } else c = c.charAt(0) + "." + c.slice(1);
            c = c + (o < 0 ? "p" : "p+") + o;
          } else if (o < 0) {
            for (; ++o; ) c = "0" + c;
            c = "0." + c;
          } else if (++o > l) for (o -= l; o--; ) c += "0";
          else o < l && (c = c.slice(0, o) + "." + c.slice(o));
        }
        c = (r == 16 ? "0x" : r == 2 ? "0b" : r == 8 ? "0o" : "") + c;
      }
      return e.s < 0 ? "-" + c : c;
    }
    function Ms(e, r) {
      if (e.length > r) return e.length = r, true;
    }
    function Sp(e) {
      return new this(e).abs();
    }
    function Rp(e) {
      return new this(e).acos();
    }
    function Cp(e) {
      return new this(e).acosh();
    }
    function Ap(e, r) {
      return new this(e).plus(r);
    }
    function Ip(e) {
      return new this(e).asin();
    }
    function kp(e) {
      return new this(e).asinh();
    }
    function Op(e) {
      return new this(e).atan();
    }
    function Dp(e) {
      return new this(e).atanh();
    }
    function _p(e, r) {
      e = new this(e), r = new this(r);
      var t, n = this.precision, i = this.rounding, o = n + 4;
      return !e.s || !r.s ? t = new this(NaN) : !e.d && !r.d ? (t = we(this, o, 1).times(r.s > 0 ? 0.25 : 0.75), t.s = e.s) : !r.d || e.isZero() ? (t = r.s < 0 ? we(this, n, i) : new this(0), t.s = e.s) : !e.d || r.isZero() ? (t = we(this, o, 1).times(0.5), t.s = e.s) : r.s < 0 ? (this.precision = o, this.rounding = 1, t = this.atan(F(e, r, o, 1)), r = we(this, o, 1), this.precision = n, this.rounding = i, t = e.s < 0 ? t.minus(r) : t.plus(r)) : t = this.atan(F(e, r, o, 1)), t;
    }
    function Np(e) {
      return new this(e).cbrt();
    }
    function Fp(e) {
      return y(e = new this(e), e.e + 1, 2);
    }
    function Lp(e, r, t) {
      return new this(e).clamp(r, t);
    }
    function Mp(e) {
      if (!e || typeof e != "object") throw Error(dn + "Object expected");
      var r, t, n, i = e.defaults === true, o = ["precision", 1, Ke, "rounding", 0, 8, "toExpNeg", -vr, 0, "toExpPos", 0, vr, "maxE", 0, vr, "minE", -vr, 0, "modulo", 0, 9];
      for (r = 0; r < o.length; r += 3) if (t = o[r], i && (this[t] = ji[t]), (n = e[t]) !== void 0) if (X(n) === n && n >= o[r + 1] && n <= o[r + 2]) this[t] = n;
      else throw Error(He + t + ": " + n);
      if (t = "crypto", i && (this[t] = ji[t]), (n = e[t]) !== void 0) if (n === true || n === false || n === 0 || n === 1) if (n) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[t] = true;
      else throw Error(Vs);
      else this[t] = false;
      else throw Error(He + t + ": " + n);
      return this;
    }
    function $p(e) {
      return new this(e).cos();
    }
    function qp(e) {
      return new this(e).cosh();
    }
    function Ks(e) {
      var r, t, n;
      function i(o) {
        var s, a, l, u = this;
        if (!(u instanceof i)) return new i(o);
        if (u.constructor = i, $s(o)) {
          u.s = o.s, w ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
          return;
        }
        if (l = typeof o, l === "number") {
          if (o === 0) {
            u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
            return;
          }
          if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
            for (s = 0, a = o; a >= 10; a /= 10) s++;
            w ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]);
            return;
          }
          if (o * 0 !== 0) {
            o || (u.s = NaN), u.e = NaN, u.d = null;
            return;
          }
          return ln(u, o.toString());
        }
        if (l === "string") return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), Us.test(o) ? ln(u, o) : Pp(u, o);
        if (l === "bigint") return o < 0 ? (o = -o, u.s = -1) : u.s = 1, ln(u, o.toString());
        throw Error(He + o);
      }
      if (i.prototype = m, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Mp, i.clone = Ks, i.isDecimal = $s, i.abs = Sp, i.acos = Rp, i.acosh = Cp, i.add = Ap, i.asin = Ip, i.asinh = kp, i.atan = Op, i.atanh = Dp, i.atan2 = _p, i.cbrt = Np, i.ceil = Fp, i.clamp = Lp, i.cos = $p, i.cosh = qp, i.div = jp, i.exp = Vp, i.floor = Bp, i.hypot = Up, i.ln = Qp, i.log = Gp, i.log10 = Jp, i.log2 = Wp, i.max = Hp, i.min = Kp, i.mod = Yp, i.mul = zp, i.pow = Zp, i.random = Xp, i.round = ed, i.sign = rd, i.sin = td, i.sinh = nd, i.sqrt = id, i.sub = od, i.sum = sd, i.tan = ad, i.tanh = ld, i.trunc = ud, e === void 0 && (e = {}), e && e.defaults !== true) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], r = 0; r < n.length; ) e.hasOwnProperty(t = n[r++]) || (e[t] = this[t]);
      return i.config(e), i;
    }
    function jp(e, r) {
      return new this(e).div(r);
    }
    function Vp(e) {
      return new this(e).exp();
    }
    function Bp(e) {
      return y(e = new this(e), e.e + 1, 3);
    }
    function Up() {
      var e, r, t = new this(0);
      for (w = false, e = 0; e < arguments.length; ) if (r = new this(arguments[e++]), r.d) t.d && (t = t.plus(r.times(r)));
      else {
        if (r.s) return w = true, new this(1 / 0);
        t = r;
      }
      return w = true, t.sqrt();
    }
    function $s(e) {
      return e instanceof sr || e && e.toStringTag === Bs || false;
    }
    function Qp(e) {
      return new this(e).ln();
    }
    function Gp(e, r) {
      return new this(e).log(r);
    }
    function Wp(e) {
      return new this(e).log(2);
    }
    function Jp(e) {
      return new this(e).log(10);
    }
    function Hp() {
      return Ws(this, arguments, -1);
    }
    function Kp() {
      return Ws(this, arguments, 1);
    }
    function Yp(e, r) {
      return new this(e).mod(r);
    }
    function zp(e, r) {
      return new this(e).mul(r);
    }
    function Zp(e, r) {
      return new this(e).pow(r);
    }
    function Xp(e) {
      var r, t, n, i, o = 0, s = new this(1), a = [];
      if (e === void 0 ? e = this.precision : ie(e, 1, Ke), n = Math.ceil(e / E), this.crypto) if (crypto.getRandomValues) for (r = crypto.getRandomValues(new Uint32Array(n)); o < n; ) i = r[o], i >= 429e7 ? r[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
      else if (crypto.randomBytes) {
        for (r = crypto.randomBytes(n *= 4); o < n; ) i = r[o] + (r[o + 1] << 8) + (r[o + 2] << 16) + ((r[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(r, o) : (a.push(i % 1e7), o += 4);
        o = n / 4;
      } else throw Error(Vs);
      else for (; o < n; ) a[o++] = Math.random() * 1e7 | 0;
      for (n = a[--o], e %= E, n && e && (i = U(10, E - e), a[o] = (n / i | 0) * i); a[o] === 0; o--) a.pop();
      if (o < 0) t = 0, a = [0];
      else {
        for (t = -1; a[0] === 0; t -= E) a.shift();
        for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
        n < E && (t -= E - n);
      }
      return s.e = t, s.d = a, s;
    }
    function ed(e) {
      return y(e = new this(e), e.e + 1, this.rounding);
    }
    function rd(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    function td(e) {
      return new this(e).sin();
    }
    function nd(e) {
      return new this(e).sinh();
    }
    function id(e) {
      return new this(e).sqrt();
    }
    function od(e, r) {
      return new this(e).sub(r);
    }
    function sd() {
      var e = 0, r = arguments, t = new this(r[e]);
      for (w = false; t.s && ++e < r.length; ) t = t.plus(r[e]);
      return w = true, y(t, this.precision, this.rounding);
    }
    function ad(e) {
      return new this(e).tan();
    }
    function ld(e) {
      return new this(e).tanh();
    }
    function ud(e) {
      return y(e = new this(e), e.e + 1, 1);
    }
    m[Symbol.for("nodejs.util.inspect.custom")] = m.toString;
    m[Symbol.toStringTag] = "Decimal";
    var sr = m.constructor = Ks(ji);
    un = new sr(un);
    cn = new sr(cn);
    var ve = sr;
    function Tr(e) {
      return e === null ? e : Array.isArray(e) ? e.map(Tr) : typeof e == "object" ? cd(e) ? pd(e) : xr(e, Tr) : e;
    }
    function cd(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    function pd({ $type: e, value: r }) {
      switch (e) {
        case "BigInt":
          return BigInt(r);
        case "Bytes": {
          let { buffer: t, byteOffset: n, byteLength: i } = Buffer.from(r, "base64");
          return new Uint8Array(t, n, i);
        }
        case "DateTime":
          return new Date(r);
        case "Decimal":
          return new ve(r);
        case "Json":
          return JSON.parse(r);
        default:
          _e(r, "Unknown tagged value");
      }
    }
    var Pe = class {
      _map = /* @__PURE__ */ new Map();
      get(r) {
        var _a14;
        return (_a14 = this._map.get(r)) == null ? void 0 : _a14.value;
      }
      set(r, t) {
        this._map.set(r, { value: t });
      }
      getOrCreate(r, t) {
        let n = this._map.get(r);
        if (n) return n.value;
        let i = t();
        return this.set(r, i), i;
      }
    };
    function Ye(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    function Ys(e, r) {
      let t = {};
      for (let n of e) {
        let i = n[r];
        t[i] = n;
      }
      return t;
    }
    function at(e) {
      let r;
      return { get() {
        return r || (r = { value: e() }), r.value;
      } };
    }
    function zs(e) {
      return { models: Qi(e.models), enums: Qi(e.enums), types: Qi(e.types) };
    }
    function Qi(e) {
      let r = {};
      for (let { name: t, ...n } of e) r[t] = n;
      return r;
    }
    function Sr(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    function gn(e) {
      return e.toString() !== "Invalid Date";
    }
    function Rr(e) {
      return sr.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    var lt = {};
    tr(lt, { ModelAction: () => Cr, datamodelEnumToSchemaEnum: () => dd });
    function dd(e) {
      return { name: e.name, values: e.values.map((r) => r.name) };
    }
    var Cr = ((b) => (b.findUnique = "findUnique", b.findUniqueOrThrow = "findUniqueOrThrow", b.findFirst = "findFirst", b.findFirstOrThrow = "findFirstOrThrow", b.findMany = "findMany", b.create = "create", b.createMany = "createMany", b.createManyAndReturn = "createManyAndReturn", b.update = "update", b.updateMany = "updateMany", b.updateManyAndReturn = "updateManyAndReturn", b.upsert = "upsert", b.delete = "delete", b.deleteMany = "deleteMany", b.groupBy = "groupBy", b.count = "count", b.aggregate = "aggregate", b.findRaw = "findRaw", b.aggregateRaw = "aggregateRaw", b))(Cr || {});
    var ta = k(Ri());
    var ra = k(require("fs"));
    var Zs = { keyword: Oe, entity: Oe, value: (e) => W(nr(e)), punctuation: nr, directive: Oe, function: Oe, variable: (e) => W(nr(e)), string: (e) => W(qe(e)), boolean: ke, number: Oe, comment: Hr };
    var md = (e) => e;
    var hn = {};
    var fd = 0;
    var v = { manual: hn.Prism && hn.Prism.manual, disableWorkerMessageHandler: hn.Prism && hn.Prism.disableWorkerMessageHandler, util: { encode: function(e) {
      if (e instanceof ge) {
        let r = e;
        return new ge(r.type, v.util.encode(r.content), r.alias);
      } else return Array.isArray(e) ? e.map(v.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }, objId: function(e) {
      return e.__id || Object.defineProperty(e, "__id", { value: ++fd }), e.__id;
    }, clone: function e(r, t) {
      let n, i, o = v.util.type(r);
      switch (t = t || {}, o) {
        case "Object":
          if (i = v.util.objId(r), t[i]) return t[i];
          n = {}, t[i] = n;
          for (let s in r) r.hasOwnProperty(s) && (n[s] = e(r[s], t));
          return n;
        case "Array":
          return i = v.util.objId(r), t[i] ? t[i] : (n = [], t[i] = n, r.forEach(function(s, a) {
            n[a] = e(s, t);
          }), n);
        default:
          return r;
      }
    } }, languages: { extend: function(e, r) {
      let t = v.util.clone(v.languages[e]);
      for (let n in r) t[n] = r[n];
      return t;
    }, insertBefore: function(e, r, t, n) {
      n = n || v.languages;
      let i = n[e], o = {};
      for (let a in i) if (i.hasOwnProperty(a)) {
        if (a == r) for (let l in t) t.hasOwnProperty(l) && (o[l] = t[l]);
        t.hasOwnProperty(a) || (o[a] = i[a]);
      }
      let s = n[e];
      return n[e] = o, v.languages.DFS(v.languages, function(a, l) {
        l === s && a != e && (this[a] = o);
      }), o;
    }, DFS: function e(r, t, n, i) {
      i = i || {};
      let o = v.util.objId;
      for (let s in r) if (r.hasOwnProperty(s)) {
        t.call(r, s, r[s], n || s);
        let a = r[s], l = v.util.type(a);
        l === "Object" && !i[o(a)] ? (i[o(a)] = true, e(a, t, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = true, e(a, t, s, i));
      }
    } }, plugins: {}, highlight: function(e, r, t) {
      let n = { code: e, grammar: r, language: t };
      return v.hooks.run("before-tokenize", n), n.tokens = v.tokenize(n.code, n.grammar), v.hooks.run("after-tokenize", n), ge.stringify(v.util.encode(n.tokens), n.language);
    }, matchGrammar: function(e, r, t, n, i, o, s) {
      for (let h in t) {
        if (!t.hasOwnProperty(h) || !t[h]) continue;
        if (h == s) return;
        let I = t[h];
        I = v.util.type(I) === "Array" ? I : [I];
        for (let P = 0; P < I.length; ++P) {
          let S = I[P], b = S.inside, O = !!S.lookbehind, me = !!S.greedy, ae = 0, Jr = S.alias;
          if (me && !S.pattern.global) {
            let V = S.pattern.toString().match(/[imuy]*$/)[0];
            S.pattern = RegExp(S.pattern.source, V + "g");
          }
          S = S.pattern || S;
          for (let V = n, te = i; V < r.length; te += r[V].length, ++V) {
            let Ae = r[V];
            if (r.length > e.length) return;
            if (Ae instanceof ge) continue;
            if (me && V != r.length - 1) {
              S.lastIndex = te;
              var p = S.exec(e);
              if (!p) break;
              var c = p.index + (O ? p[1].length : 0), d = p.index + p[0].length, a = V, l = te;
              for (let _ = r.length; a < _ && (l < d || !r[a].type && !r[a - 1].greedy); ++a) l += r[a].length, c >= l && (++V, te = l);
              if (r[V] instanceof ge) continue;
              u = a - V, Ae = e.slice(te, l), p.index -= te;
            } else {
              S.lastIndex = 0;
              var p = S.exec(Ae), u = 1;
            }
            if (!p) {
              if (o) break;
              continue;
            }
            O && (ae = p[1] ? p[1].length : 0);
            var c = p.index + ae, p = p[0].slice(ae), d = c + p.length, f = Ae.slice(0, c), g = Ae.slice(d);
            let H = [V, u];
            f && (++V, te += f.length, H.push(f));
            let fr = new ge(h, b ? v.tokenize(p, b) : p, Jr, p, me);
            if (H.push(fr), g && H.push(g), Array.prototype.splice.apply(r, H), u != 1 && v.matchGrammar(e, r, t, V, te, true, h), o) break;
          }
        }
      }
    }, tokenize: function(e, r) {
      let t = [e], n = r.rest;
      if (n) {
        for (let i in n) r[i] = n[i];
        delete r.rest;
      }
      return v.matchGrammar(e, t, r, 0, 0, false), t;
    }, hooks: { all: {}, add: function(e, r) {
      let t = v.hooks.all;
      t[e] = t[e] || [], t[e].push(r);
    }, run: function(e, r) {
      let t = v.hooks.all[e];
      if (!(!t || !t.length)) for (var n = 0, i; i = t[n++]; ) i(r);
    } }, Token: ge };
    v.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
    v.languages.javascript = v.languages.extend("clike", { "class-name": [v.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
    v.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    v.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: v.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: v.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: v.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: v.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
    v.languages.markup && v.languages.markup.tag.addInlined("script", "javascript");
    v.languages.js = v.languages.javascript;
    v.languages.typescript = v.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
    v.languages.ts = v.languages.typescript;
    function ge(e, r, t, n, i) {
      this.type = e, this.content = r, this.alias = t, this.length = (n || "").length | 0, this.greedy = !!i;
    }
    ge.stringify = function(e, r) {
      return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(t) {
        return ge.stringify(t, r);
      }).join("") : gd(e.type)(e.content);
    };
    function gd(e) {
      return Zs[e] || md;
    }
    function Xs(e) {
      return hd(e, v.languages.javascript);
    }
    function hd(e, r) {
      return v.tokenize(e, r).map((n) => ge.stringify(n)).join("");
    }
    function ea(e) {
      return Ti(e);
    }
    var yn = class e {
      firstLineNumber;
      lines;
      static read(r) {
        let t;
        try {
          t = ra.default.readFileSync(r, "utf-8");
        } catch {
          return null;
        }
        return e.fromContent(t);
      }
      static fromContent(r) {
        let t = r.split(/\r?\n/);
        return new e(1, t);
      }
      constructor(r, t) {
        this.firstLineNumber = r, this.lines = t;
      }
      get lastLineNumber() {
        return this.firstLineNumber + this.lines.length - 1;
      }
      mapLineAt(r, t) {
        if (r < this.firstLineNumber || r > this.lines.length + this.firstLineNumber) return this;
        let n = r - this.firstLineNumber, i = [...this.lines];
        return i[n] = t(i[n]), new e(this.firstLineNumber, i);
      }
      mapLines(r) {
        return new e(this.firstLineNumber, this.lines.map((t, n) => r(t, this.firstLineNumber + n)));
      }
      lineAt(r) {
        return this.lines[r - this.firstLineNumber];
      }
      prependSymbolAt(r, t) {
        return this.mapLines((n, i) => i === r ? `${t} ${n}` : `  ${n}`);
      }
      slice(r, t) {
        let n = this.lines.slice(r - 1, t).join(`
`);
        return new e(r, ea(n).split(`
`));
      }
      highlight() {
        let r = Xs(this.toString());
        return new e(this.firstLineNumber, r.split(`
`));
      }
      toString() {
        return this.lines.join(`
`);
      }
    };
    var yd = { red: ce, gray: Hr, dim: Ie, bold: W, underline: Y, highlightSource: (e) => e.highlight() };
    var bd = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
    function Ed({ message: e, originalMethod: r, isPanic: t, callArguments: n }) {
      return { functionName: `prisma.${r}()`, message: e, isPanic: t ?? false, callArguments: n };
    }
    function wd({ callsite: e, message: r, originalMethod: t, isPanic: n, callArguments: i }, o) {
      var _a14;
      let s = Ed({ message: r, originalMethod: t, isPanic: n, callArguments: i });
      if (!e || typeof window < "u" || process.env.NODE_ENV === "production") return s;
      let a = e.getLocation();
      if (!a || !a.lineNumber || !a.columnNumber) return s;
      let l = Math.max(1, a.lineNumber - 3), u = (_a14 = yn.read(a.fileName)) == null ? void 0 : _a14.slice(l, a.lineNumber), c = u == null ? void 0 : u.lineAt(a.lineNumber);
      if (u && c) {
        let p = vd(c), d = xd(c);
        if (!d) return s;
        s.functionName = `${d.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, (g) => g.slice(0, d.openingBraceIndex))), u = o.highlightSource(u);
        let f = String(u.lastLineNumber).length;
        if (s.contextLines = u.mapLines((g, h) => o.gray(String(h).padStart(f)) + " " + g).mapLines((g) => o.dim(g)).prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192"))), i) {
          let g = p + f + 1;
          g += 2, s.callArguments = (0, ta.default)(i, g).slice(g);
        }
      }
      return s;
    }
    function xd(e) {
      let r = Object.keys(Cr).join("|"), n = new RegExp(String.raw`\.(${r})\(`).exec(e);
      if (n) {
        let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
        return { code: e.slice(o, i), openingBraceIndex: i };
      }
      return null;
    }
    function vd(e) {
      let r = 0;
      for (let t = 0; t < e.length; t++) {
        if (e.charAt(t) !== " ") return r;
        r++;
      }
      return r;
    }
    function Pd({ functionName: e, location: r, message: t, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], l = r ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), r && a.push(s.underline(Td(r))), i) {
        a.push("");
        let u = [i.toString()];
        o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
      } else a.push(""), o && a.push(o), a.push("");
      return a.push(t), a.join(`
`);
    }
    function Td(e) {
      let r = [e.fileName];
      return e.lineNumber && r.push(String(e.lineNumber)), e.columnNumber && r.push(String(e.columnNumber)), r.join(":");
    }
    function bn(e) {
      let r = e.showColors ? yd : bd, t;
      return t = wd(e, r), Pd(t, r);
    }
    var pa = k(Gi());
    function sa(e, r, t) {
      let n = aa(e), i = Sd(n), o = Cd(i);
      o ? En(o, r, t) : r.addErrorMessage(() => "Unknown error");
    }
    function aa(e) {
      return e.errors.flatMap((r) => r.kind === "Union" ? aa(r) : [r]);
    }
    function Sd(e) {
      let r = /* @__PURE__ */ new Map(), t = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          t.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = r.get(i);
        o ? r.set(i, { ...n, argument: { ...n.argument, typeNames: Rd(o.argument.typeNames, n.argument.typeNames) } }) : r.set(i, n);
      }
      return t.push(...r.values()), t;
    }
    function Rd(e, r) {
      return [...new Set(e.concat(r))];
    }
    function Cd(e) {
      return $i(e, (r, t) => {
        let n = ia(r), i = ia(t);
        return n !== i ? n - i : oa(r) - oa(t);
      });
    }
    function ia(e) {
      let r = 0;
      return Array.isArray(e.selectionPath) && (r += e.selectionPath.length), Array.isArray(e.argumentPath) && (r += e.argumentPath.length), r;
    }
    function oa(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    var ue = class {
      constructor(r, t) {
        this.name = r;
        this.value = t;
      }
      isRequired = false;
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(r) {
        let { colors: { green: t } } = r.context;
        r.addMarginSymbol(t(this.isRequired ? "+" : "?")), r.write(t(this.name)), this.isRequired || r.write(t("?")), r.write(t(": ")), typeof this.value == "string" ? r.write(t(this.value)) : r.write(this.value);
      }
    };
    ua();
    var Ar = class {
      constructor(r = 0, t) {
        this.context = t;
        this.currentIndent = r;
      }
      lines = [];
      currentLine = "";
      currentIndent = 0;
      marginSymbol;
      afterNextNewLineCallback;
      write(r) {
        return typeof r == "string" ? this.currentLine += r : r.write(this), this;
      }
      writeJoined(r, t, n = (i, o) => o.write(i)) {
        let i = t.length - 1;
        for (let o = 0; o < t.length; o++) n(t[o], this), o !== i && this.write(r);
        return this;
      }
      writeLine(r) {
        return this.write(r).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let r = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, r == null ? void 0 : r(), this;
      }
      withIndent(r) {
        return this.indent(), r(this), this.unindent(), this;
      }
      afterNextNewline(r) {
        return this.afterNextNewLineCallback = r, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(r) {
        return this.marginSymbol = r, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let r = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + r.slice(1) : r;
      }
    };
    la();
    var wn = class {
      constructor(r) {
        this.value = r;
      }
      write(r) {
        r.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    var xn = (e) => e;
    var vn = { bold: xn, red: xn, green: xn, dim: xn, enabled: false };
    var ca = { bold: W, red: ce, green: qe, dim: Ie, enabled: true };
    var Ir = { write(e) {
      e.writeLine(",");
    } };
    var Te = class {
      constructor(r) {
        this.contents = r;
      }
      isUnderlined = false;
      color = (r) => r;
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(r) {
        return this.color = r, this;
      }
      write(r) {
        let t = r.getCurrentLineLength();
        r.write(this.color(this.contents)), this.isUnderlined && r.afterNextNewline(() => {
          r.write(" ".repeat(t)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    var ze = class {
      hasError = false;
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var kr = class extends ze {
      items = [];
      addItem(r) {
        return this.items.push(new wn(r)), this;
      }
      getField(r) {
        return this.items[r];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((t) => t.value.getPrintWidth())) + 2;
      }
      write(r) {
        if (this.items.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithItems(r);
      }
      writeEmpty(r) {
        let t = new Te("[]");
        this.hasError && t.setColor(r.context.colors.red).underline(), r.write(t);
      }
      writeWithItems(r) {
        let { colors: t } = r.context;
        r.writeLine("[").withIndent(() => r.writeJoined(Ir, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(t.red("~".repeat(this.getPrintWidth())));
        });
      }
      asObject() {
      }
    };
    var Or = class e extends ze {
      fields = {};
      suggestions = [];
      addField(r) {
        this.fields[r.name] = r;
      }
      addSuggestion(r) {
        this.suggestions.push(r);
      }
      getField(r) {
        return this.fields[r];
      }
      getDeepField(r) {
        let [t, ...n] = r, i = this.getField(t);
        if (!i) return;
        let o = i;
        for (let s of n) {
          let a;
          if (o.value instanceof e ? a = o.value.getField(s) : o.value instanceof kr && (a = o.value.getField(Number(s))), !a) return;
          o = a;
        }
        return o;
      }
      getDeepFieldValue(r) {
        var _a14;
        return r.length === 0 ? this : (_a14 = this.getDeepField(r)) == null ? void 0 : _a14.value;
      }
      hasField(r) {
        return !!this.getField(r);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(r) {
        delete this.fields[r];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(r) {
        var _a14;
        return (_a14 = this.getField(r)) == null ? void 0 : _a14.value;
      }
      getDeepSubSelectionValue(r) {
        let t = this;
        for (let n of r) {
          if (!(t instanceof e)) return;
          let i = t.getSubSelectionValue(n);
          if (!i) return;
          t = i;
        }
        return t;
      }
      getDeepSelectionParent(r) {
        let t = this.getSelectionParent();
        if (!t) return;
        let n = t;
        for (let i of r) {
          let o = n.value.getFieldValue(i);
          if (!o || !(o instanceof e)) return;
          let s = o.getSelectionParent();
          if (!s) return;
          n = s;
        }
        return n;
      }
      getSelectionParent() {
        var _a14, _b12;
        let r = (_a14 = this.getField("select")) == null ? void 0 : _a14.value.asObject();
        if (r) return { kind: "select", value: r };
        let t = (_b12 = this.getField("include")) == null ? void 0 : _b12.value.asObject();
        if (t) return { kind: "include", value: t };
      }
      getSubSelectionValue(r) {
        var _a14;
        return (_a14 = this.getSelectionParent()) == null ? void 0 : _a14.value.fields[r].value;
      }
      getPrintWidth() {
        let r = Object.values(this.fields);
        return r.length == 0 ? 2 : Math.max(...r.map((n) => n.getPrintWidth())) + 2;
      }
      write(r) {
        let t = Object.values(this.fields);
        if (t.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithContents(r, t);
      }
      asObject() {
        return this;
      }
      writeEmpty(r) {
        let t = new Te("{}");
        this.hasError && t.setColor(r.context.colors.red).underline(), r.write(t);
      }
      writeWithContents(r, t) {
        r.writeLine("{").withIndent(() => {
          r.writeJoined(Ir, [...t, ...this.suggestions]).newLine();
        }), r.write("}"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    var G = class extends ze {
      constructor(t) {
        super();
        this.text = t;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(t) {
        let n = new Te(this.text);
        this.hasError && n.underline().setColor(t.context.colors.red), t.write(n);
      }
      asObject() {
      }
    };
    var ut = class {
      fields = [];
      addField(r, t) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${r}: ${t}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(r) {
        let { colors: { green: t } } = r.context;
        r.writeLine(t("{")).withIndent(() => {
          r.writeJoined(Ir, this.fields).newLine();
        }).write(t("}")).addMarginSymbol(t("+"));
      }
    };
    function En(e, r, t) {
      switch (e.kind) {
        case "MutuallyExclusiveFields":
          Ad(e, r);
          break;
        case "IncludeOnScalar":
          Id(e, r);
          break;
        case "EmptySelection":
          kd(e, r, t);
          break;
        case "UnknownSelectionField":
          Nd(e, r);
          break;
        case "InvalidSelectionValue":
          Fd(e, r);
          break;
        case "UnknownArgument":
          Ld(e, r);
          break;
        case "UnknownInputField":
          Md(e, r);
          break;
        case "RequiredArgumentMissing":
          $d(e, r);
          break;
        case "InvalidArgumentType":
          qd(e, r);
          break;
        case "InvalidArgumentValue":
          jd(e, r);
          break;
        case "ValueTooLarge":
          Vd(e, r);
          break;
        case "SomeFieldsMissing":
          Bd(e, r);
          break;
        case "TooManyFieldsGiven":
          Ud(e, r);
          break;
        case "Union":
          sa(e, r, t);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    function Ad(e, r) {
      var _a14, _b12, _c6;
      let t = (_a14 = r.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : _a14.asObject();
      t && ((_b12 = t.getField(e.firstField)) == null ? void 0 : _b12.markAsError(), (_c6 = t.getField(e.secondField)) == null ? void 0 : _c6.markAsError()), r.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
    }
    function Id(e, r) {
      var _a14, _b12;
      let [t, n] = ct(e.selectionPath), i = e.outputType, o = (_a14 = r.arguments.getDeepSelectionParent(t)) == null ? void 0 : _a14.value;
      if (o && ((_b12 = o.getField(n)) == null ? void 0 : _b12.markAsError(), i)) for (let s of i.fields) s.isRelation && o.addSuggestion(new ue(s.name, "true"));
      r.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${pt(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    function kd(e, r, t) {
      var _a14, _b12;
      let n = (_a14 = r.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : _a14.asObject();
      if (n) {
        let i = (_b12 = n.getField("omit")) == null ? void 0 : _b12.value.asObject();
        if (i) {
          Od(e, r, i);
          return;
        }
        if (n.hasField("select")) {
          Dd(e, r);
          return;
        }
      }
      if (t == null ? void 0 : t[Ye(e.outputType.name)]) {
        _d(e, r);
        return;
      }
      r.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
    }
    function Od(e, r, t) {
      t.removeAllFields();
      for (let n of e.outputType.fields) t.addSuggestion(new ue(n.name, "false"));
      r.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    function Dd(e, r) {
      var _a14;
      let t = e.outputType, n = (_a14 = r.arguments.getDeepSelectionParent(e.selectionPath)) == null ? void 0 : _a14.value, i = (n == null ? void 0 : n.isEmpty()) ?? false;
      n && (n.removeAllFields(), fa(n, t)), r.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(t.name)} must not be empty. ${pt(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(t.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    function _d(e, r) {
      var _a14, _b12;
      let t = new ut();
      for (let i of e.outputType.fields) i.isRelation || t.addField(i.name, "false");
      let n = new ue("omit", t).makeRequired();
      if (e.selectionPath.length === 0) r.arguments.addSuggestion(n);
      else {
        let [i, o] = ct(e.selectionPath), a = (_b12 = (_a14 = r.arguments.getDeepSelectionParent(i)) == null ? void 0 : _a14.value.asObject()) == null ? void 0 : _b12.getField(o);
        if (a) {
          let l = (a == null ? void 0 : a.value.asObject()) ?? new Or();
          l.addSuggestion(n), a.value = l;
        }
      }
      r.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    function Nd(e, r) {
      let t = ga(e.selectionPath, r);
      if (t.parentKind !== "unknown") {
        t.field.markAsError();
        let n = t.parent;
        switch (t.parentKind) {
          case "select":
            fa(n, e.outputType);
            break;
          case "include":
            Qd(n, e.outputType);
            break;
          case "omit":
            Gd(n, e.outputType);
            break;
        }
      }
      r.addErrorMessage((n) => {
        let i = [`Unknown field ${n.red(`\`${t.fieldName}\``)}`];
        return t.parentKind !== "unknown" && i.push(`for ${n.bold(t.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(pt(n)), i.join(" ");
      });
    }
    function Fd(e, r) {
      let t = ga(e.selectionPath, r);
      t.parentKind !== "unknown" && t.field.value.markAsError(), r.addErrorMessage((n) => `Invalid value for selection field \`${n.red(t.fieldName)}\`: ${e.underlyingError}`);
    }
    function Ld(e, r) {
      var _a14, _b12;
      let t = e.argumentPath[0], n = (_a14 = r.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : _a14.asObject();
      n && ((_b12 = n.getField(t)) == null ? void 0 : _b12.markAsError(), Wd(n, e.arguments)), r.addErrorMessage((i) => da(i, t, e.arguments.map((o) => o.name)));
    }
    function Md(e, r) {
      var _a14, _b12, _c6;
      let [t, n] = ct(e.argumentPath), i = (_a14 = r.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : _a14.asObject();
      if (i) {
        (_b12 = i.getDeepField(e.argumentPath)) == null ? void 0 : _b12.markAsError();
        let o = (_c6 = i.getDeepFieldValue(t)) == null ? void 0 : _c6.asObject();
        o && ha(o, e.inputType);
      }
      r.addErrorMessage((o) => da(o, n, e.inputType.fields.map((s) => s.name)));
    }
    function da(e, r, t) {
      let n = [`Unknown argument \`${e.red(r)}\`.`], i = Hd(r, t);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), t.length > 0 && n.push(pt(e)), n.join(" ");
    }
    function $d(e, r) {
      var _a14, _b12;
      let t;
      r.addErrorMessage((l) => (t == null ? void 0 : t.value) instanceof G && t.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
      let n = (_a14 = r.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : _a14.asObject();
      if (!n) return;
      let [i, o] = ct(e.argumentPath), s = new ut(), a = (_b12 = n.getDeepFieldValue(i)) == null ? void 0 : _b12.asObject();
      if (a) if (t = a.getField(o), t && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
        for (let l of e.inputTypes[0].fields) s.addField(l.name, l.typeNames.join(" | "));
        a.addSuggestion(new ue(o, s).makeRequired());
      } else {
        let l = e.inputTypes.map(ma).join(" | ");
        a.addSuggestion(new ue(o, l).makeRequired());
      }
    }
    function ma(e) {
      return e.kind === "list" ? `${ma(e.elementType)}[]` : e.name;
    }
    function qd(e, r) {
      var _a14, _b12;
      let t = e.argument.name, n = (_a14 = r.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : _a14.asObject();
      n && ((_b12 = n.getDeepFieldValue(e.argumentPath)) == null ? void 0 : _b12.markAsError()), r.addErrorMessage((i) => {
        let o = Pn("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(t)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    function jd(e, r) {
      var _a14, _b12;
      let t = e.argument.name, n = (_a14 = r.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : _a14.asObject();
      n && ((_b12 = n.getDeepFieldValue(e.argumentPath)) == null ? void 0 : _b12.markAsError()), r.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(t)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = Pn("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    function Vd(e, r) {
      var _a14, _b12;
      let t = e.argument.name, n = (_a14 = r.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : _a14.asObject(), i;
      if (n) {
        let s = (_b12 = n.getDeepField(e.argumentPath)) == null ? void 0 : _b12.value;
        s == null ? void 0 : s.markAsError(), s instanceof G && (i = s.text);
      }
      r.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(t)}\``), s.join(" ");
      });
    }
    function Bd(e, r) {
      var _a14, _b12;
      let t = e.argumentPath[e.argumentPath.length - 1], n = (_a14 = r.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : _a14.asObject();
      if (n) {
        let i = (_b12 = n.getDeepFieldValue(e.argumentPath)) == null ? void 0 : _b12.asObject();
        i && ha(i, e.inputType);
      }
      r.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(t)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${Pn("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(pt(i)), o.join(" ");
      });
    }
    function Ud(e, r) {
      var _a14, _b12;
      let t = e.argumentPath[e.argumentPath.length - 1], n = (_a14 = r.arguments.getDeepSubSelectionValue(e.selectionPath)) == null ? void 0 : _a14.asObject(), i = [];
      if (n) {
        let o = (_b12 = n.getDeepFieldValue(e.argumentPath)) == null ? void 0 : _b12.asObject();
        o && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      r.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(t)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${Pn("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    function fa(e, r) {
      for (let t of r.fields) e.hasField(t.name) || e.addSuggestion(new ue(t.name, "true"));
    }
    function Qd(e, r) {
      for (let t of r.fields) t.isRelation && !e.hasField(t.name) && e.addSuggestion(new ue(t.name, "true"));
    }
    function Gd(e, r) {
      for (let t of r.fields) !e.hasField(t.name) && !t.isRelation && e.addSuggestion(new ue(t.name, "true"));
    }
    function Wd(e, r) {
      for (let t of r) e.hasField(t.name) || e.addSuggestion(new ue(t.name, t.typeNames.join(" | ")));
    }
    function ga(e, r) {
      var _a14, _b12, _c6, _d5;
      let [t, n] = ct(e), i = (_a14 = r.arguments.getDeepSubSelectionValue(t)) == null ? void 0 : _a14.asObject();
      if (!i) return { parentKind: "unknown", fieldName: n };
      let o = (_b12 = i.getFieldValue("select")) == null ? void 0 : _b12.asObject(), s = (_c6 = i.getFieldValue("include")) == null ? void 0 : _c6.asObject(), a = (_d5 = i.getFieldValue("omit")) == null ? void 0 : _d5.asObject(), l = o == null ? void 0 : o.getField(n);
      return o && l ? { parentKind: "select", parent: o, field: l, fieldName: n } : (l = s == null ? void 0 : s.getField(n), s && l ? { parentKind: "include", field: l, parent: s, fieldName: n } : (l = a == null ? void 0 : a.getField(n), a && l ? { parentKind: "omit", field: l, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
    }
    function ha(e, r) {
      if (r.kind === "object") for (let t of r.fields) e.hasField(t.name) || e.addSuggestion(new ue(t.name, t.typeNames.join(" | ")));
    }
    function ct(e) {
      let r = [...e], t = r.pop();
      if (!t) throw new Error("unexpected empty path");
      return [r, t];
    }
    function pt({ green: e, enabled: r }) {
      return "Available options are " + (r ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    function Pn(e, r) {
      if (r.length === 1) return r[0];
      let t = [...r], n = t.pop();
      return `${t.join(", ")} ${e} ${n}`;
    }
    var Jd = 3;
    function Hd(e, r) {
      let t = 1 / 0, n;
      for (let i of r) {
        let o = (0, pa.default)(e, i);
        o > Jd || o < t && (t = o, n = i);
      }
      return n;
    }
    var dt = class {
      modelName;
      name;
      typeName;
      isList;
      isEnum;
      constructor(r, t, n, i, o) {
        this.modelName = r, this.name = t, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let r = this.isList ? "List" : "", t = this.isEnum ? "Enum" : "";
        return `${r}${t}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function Dr(e) {
      return e instanceof dt;
    }
    var Tn = Symbol();
    var Ji = /* @__PURE__ */ new WeakMap();
    var Le = class {
      constructor(r) {
        r === Tn ? Ji.set(this, `Prisma.${this._getName()}`) : Ji.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return Ji.get(this);
      }
    };
    var mt = class extends Le {
      _getNamespace() {
        return "NullTypes";
      }
    };
    var ft = class extends mt {
      #e;
    };
    Hi(ft, "DbNull");
    var gt = class extends mt {
      #e;
    };
    Hi(gt, "JsonNull");
    var ht = class extends mt {
      #e;
    };
    Hi(ht, "AnyNull");
    var Sn = { classes: { DbNull: ft, JsonNull: gt, AnyNull: ht }, instances: { DbNull: new ft(Tn), JsonNull: new gt(Tn), AnyNull: new ht(Tn) } };
    function Hi(e, r) {
      Object.defineProperty(e, "name", { value: r, configurable: true });
    }
    var ya = ": ";
    var Rn = class {
      constructor(r, t) {
        this.name = r;
        this.value = t;
      }
      hasError = false;
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + ya.length;
      }
      write(r) {
        let t = new Te(this.name);
        this.hasError && t.underline().setColor(r.context.colors.red), r.write(t).write(ya).write(this.value);
      }
    };
    var Ki = class {
      arguments;
      errorMessages = [];
      constructor(r) {
        this.arguments = r;
      }
      write(r) {
        r.write(this.arguments);
      }
      addErrorMessage(r) {
        this.errorMessages.push(r);
      }
      renderAllMessages(r) {
        return this.errorMessages.map((t) => t(r)).join(`
`);
      }
    };
    function _r(e) {
      return new Ki(ba(e));
    }
    function ba(e) {
      let r = new Or();
      for (let [t, n] of Object.entries(e)) {
        let i = new Rn(t, Ea(n));
        r.addField(i);
      }
      return r;
    }
    function Ea(e) {
      if (typeof e == "string") return new G(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean") return new G(String(e));
      if (typeof e == "bigint") return new G(`${e}n`);
      if (e === null) return new G("null");
      if (e === void 0) return new G("undefined");
      if (Rr(e)) return new G(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array) return Buffer.isBuffer(e) ? new G(`Buffer.alloc(${e.byteLength})`) : new G(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let r = gn(e) ? e.toISOString() : "Invalid Date";
        return new G(`new Date("${r}")`);
      }
      return e instanceof Le ? new G(`Prisma.${e._getName()}`) : Dr(e) ? new G(`prisma.${Ye(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? Kd(e) : typeof e == "object" ? ba(e) : new G(Object.prototype.toString.call(e));
    }
    function Kd(e) {
      let r = new kr();
      for (let t of e) r.addItem(Ea(t));
      return r;
    }
    function Cn(e, r) {
      let t = r === "pretty" ? ca : vn, n = e.renderAllMessages(t), i = new Ar(0, { colors: t }).write(e).toString();
      return { message: n, args: i };
    }
    function An({ args: e, errors: r, errorFormat: t, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
      let a = _r(e);
      for (let p of r) En(p, a, s);
      let { message: l, args: u } = Cn(a, t), c = bn({ message: l, callsite: n, originalMethod: i, showColors: t === "pretty", callArguments: u });
      throw new Z(c, { clientVersion: o });
    }
    function Se(e) {
      return e.replace(/^./, (r) => r.toLowerCase());
    }
    function xa(e, r, t) {
      let n = Se(t);
      return !r.result || !(r.result.$allModels || r.result[n]) ? e : Yd({ ...e, ...wa(r.name, e, r.result.$allModels), ...wa(r.name, e, r.result[n]) });
    }
    function Yd(e) {
      let r = new Pe(), t = (n, i) => r.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => t(o, i)) : [n]));
      return xr(e, (n) => ({ ...n, needs: t(n.name, /* @__PURE__ */ new Set()) }));
    }
    function wa(e, r, t) {
      return t ? xr(t, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: zd(r, o, i) })) : {};
    }
    function zd(e, r, t) {
      var _a14;
      let n = (_a14 = e == null ? void 0 : e[r]) == null ? void 0 : _a14.compute;
      return n ? (i) => t({ ...i, [r]: n(i) }) : t;
    }
    function va(e, r) {
      if (!r) return e;
      let t = { ...e };
      for (let n of Object.values(r)) if (e[n.name]) for (let i of n.needs) t[i] = true;
      return t;
    }
    function Pa(e, r) {
      if (!r) return e;
      let t = { ...e };
      for (let n of Object.values(r)) if (!e[n.name]) for (let i of n.needs) delete t[i];
      return t;
    }
    var In = class {
      constructor(r, t) {
        this.extension = r;
        this.previous = t;
      }
      computedFieldsCache = new Pe();
      modelExtensionsCache = new Pe();
      queryCallbacksCache = new Pe();
      clientExtensions = at(() => {
        var _a14, _b12;
        return this.extension.client ? { ...(_a14 = this.previous) == null ? void 0 : _a14.getAllClientExtensions(), ...this.extension.client } : (_b12 = this.previous) == null ? void 0 : _b12.getAllClientExtensions();
      });
      batchCallbacks = at(() => {
        var _a14, _b12;
        let r = ((_a14 = this.previous) == null ? void 0 : _a14.getAllBatchQueryCallbacks()) ?? [], t = (_b12 = this.extension.query) == null ? void 0 : _b12.$__internalBatch;
        return t ? r.concat(t) : r;
      });
      getAllComputedFields(r) {
        return this.computedFieldsCache.getOrCreate(r, () => {
          var _a14;
          return xa((_a14 = this.previous) == null ? void 0 : _a14.getAllComputedFields(r), this.extension, r);
        });
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(r) {
        return this.modelExtensionsCache.getOrCreate(r, () => {
          var _a14, _b12;
          let t = Se(r);
          return !this.extension.model || !(this.extension.model[t] || this.extension.model.$allModels) ? (_a14 = this.previous) == null ? void 0 : _a14.getAllModelExtensions(r) : { ...(_b12 = this.previous) == null ? void 0 : _b12.getAllModelExtensions(r), ...this.extension.model.$allModels, ...this.extension.model[t] };
        });
      }
      getAllQueryCallbacks(r, t) {
        return this.queryCallbacksCache.getOrCreate(`${r}:${t}`, () => {
          var _a14;
          let n = ((_a14 = this.previous) == null ? void 0 : _a14.getAllQueryCallbacks(r, t)) ?? [], i = [], o = this.extension.query;
          return !o || !(o[r] || o.$allModels || o[t] || o.$allOperations) ? n : (o[r] !== void 0 && (o[r][t] !== void 0 && i.push(o[r][t]), o[r].$allOperations !== void 0 && i.push(o[r].$allOperations)), r !== "$none" && o.$allModels !== void 0 && (o.$allModels[t] !== void 0 && i.push(o.$allModels[t]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[t] !== void 0 && i.push(o[t]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var Nr = class e {
      constructor(r) {
        this.head = r;
      }
      static empty() {
        return new e();
      }
      static single(r) {
        return new e(new In(r));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(r) {
        return new e(new In(r, this.head));
      }
      getAllComputedFields(r) {
        var _a14;
        return (_a14 = this.head) == null ? void 0 : _a14.getAllComputedFields(r);
      }
      getAllClientExtensions() {
        var _a14;
        return (_a14 = this.head) == null ? void 0 : _a14.getAllClientExtensions();
      }
      getAllModelExtensions(r) {
        var _a14;
        return (_a14 = this.head) == null ? void 0 : _a14.getAllModelExtensions(r);
      }
      getAllQueryCallbacks(r, t) {
        var _a14;
        return ((_a14 = this.head) == null ? void 0 : _a14.getAllQueryCallbacks(r, t)) ?? [];
      }
      getAllBatchQueryCallbacks() {
        var _a14;
        return ((_a14 = this.head) == null ? void 0 : _a14.getAllBatchQueryCallbacks()) ?? [];
      }
    };
    var kn = class {
      constructor(r) {
        this.name = r;
      }
    };
    function Ta(e) {
      return e instanceof kn;
    }
    function Sa(e) {
      return new kn(e);
    }
    var Ra = Symbol();
    var yt = class {
      constructor(r) {
        if (r !== Ra) throw new Error("Skip instance can not be constructed directly");
      }
      ifUndefined(r) {
        return r === void 0 ? On : r;
      }
    };
    var On = new yt(Ra);
    function Re(e) {
      return e instanceof yt;
    }
    var Zd = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", updateManyAndReturn: "updateManyAndReturn", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    var Ca = "explicitly `undefined` values are not allowed";
    function Dn({ modelName: e, action: r, args: t, runtimeDataModel: n, extensions: i = Nr.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c }) {
      let p = new Yi({ runtimeDataModel: n, modelName: e, action: r, rootArgs: t, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l, previewFeatures: u, globalOmit: c });
      return { modelName: e, action: Zd[r], query: bt(t, p) };
    }
    function bt({ select: e, include: r, ...t } = {}, n) {
      let i = t.omit;
      return delete t.omit, { arguments: Ia(t, n), selection: Xd(e, r, i, n) };
    }
    function Xd(e, r, t, n) {
      return e ? (r ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : t && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), nm(e, n)) : em(n, r, t);
    }
    function em(e, r, t) {
      let n = {};
      return e.modelOrType && !e.isRawAction() && (n.$composites = true, n.$scalars = true), r && rm(n, r, e), tm(n, t, e), n;
    }
    function rm(e, r, t) {
      for (let [n, i] of Object.entries(r)) {
        if (Re(i)) continue;
        let o = t.nestSelection(n);
        if (zi(i, o), i === false || i === void 0) {
          e[n] = false;
          continue;
        }
        let s = t.findField(n);
        if (s && s.kind !== "object" && t.throwValidationError({ kind: "IncludeOnScalar", selectionPath: t.getSelectionPath().concat(n), outputType: t.getOutputTypeDescription() }), s) {
          e[n] = bt(i === true ? {} : i, o);
          continue;
        }
        if (i === true) {
          e[n] = true;
          continue;
        }
        e[n] = bt(i, o);
      }
    }
    function tm(e, r, t) {
      let n = t.getComputedFields(), i = { ...t.getGlobalOmit(), ...r }, o = Pa(i, n);
      for (let [s, a] of Object.entries(o)) {
        if (Re(a)) continue;
        zi(a, t.nestSelection(s));
        let l = t.findField(s);
        (n == null ? void 0 : n[s]) && !l || (e[s] = !a);
      }
    }
    function nm(e, r) {
      let t = {}, n = r.getComputedFields(), i = va(e, n);
      for (let [o, s] of Object.entries(i)) {
        if (Re(s)) continue;
        let a = r.nestSelection(o);
        zi(s, a);
        let l = r.findField(o);
        if (!((n == null ? void 0 : n[o]) && !l)) {
          if (s === false || s === void 0 || Re(s)) {
            t[o] = false;
            continue;
          }
          if (s === true) {
            (l == null ? void 0 : l.kind) === "object" ? t[o] = bt({}, a) : t[o] = true;
            continue;
          }
          t[o] = bt(s, a);
        }
      }
      return t;
    }
    function Aa(e, r) {
      if (e === null) return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
      if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
      if (Sr(e)) {
        if (gn(e)) return { $type: "DateTime", value: e.toISOString() };
        r.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: r.getSelectionPath(), argumentPath: r.getArgumentPath(), argument: { name: r.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (Ta(e)) return { $type: "Param", value: e.name };
      if (Dr(e)) return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e)) return im(e, r);
      if (ArrayBuffer.isView(e)) {
        let { buffer: t, byteOffset: n, byteLength: i } = e;
        return { $type: "Bytes", value: Buffer.from(t, n, i).toString("base64") };
      }
      if (om(e)) return e.values;
      if (Rr(e)) return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof Le) {
        if (e !== Sn.instances[e._getName()]) throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (sm(e)) return e.toJSON();
      if (typeof e == "object") return Ia(e, r);
      r.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: r.getSelectionPath(), argumentPath: r.getArgumentPath(), argument: { name: r.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    function Ia(e, r) {
      if (e.$type) return { $type: "Raw", value: e };
      let t = {};
      for (let n in e) {
        let i = e[n], o = r.nestArgument(n);
        Re(i) || (i !== void 0 ? t[n] = Aa(i, o) : r.isPreviewFeatureOn("strictUndefinedChecks") && r.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: r.getSelectionPath(), argument: { name: r.getArgumentName(), typeNames: [] }, underlyingError: Ca }));
      }
      return t;
    }
    function im(e, r) {
      let t = [];
      for (let n = 0; n < e.length; n++) {
        let i = r.nestArgument(String(n)), o = e[n];
        if (o === void 0 || Re(o)) {
          let s = o === void 0 ? "undefined" : "Prisma.skip";
          r.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${r.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
        }
        t.push(Aa(o, i));
      }
      return t;
    }
    function om(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    function sm(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    function zi(e, r) {
      e === void 0 && r.isPreviewFeatureOn("strictUndefinedChecks") && r.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: r.getSelectionPath(), underlyingError: Ca });
    }
    var Yi = class e {
      constructor(r) {
        this.params = r;
        this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
      }
      modelOrType;
      throwValidationError(r) {
        An({ errors: [r], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.modelOrType)) return { name: this.params.modelName, fields: this.modelOrType.fields.map((r) => ({ name: r.name, typeName: "boolean", isRelation: r.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      isPreviewFeatureOn(r) {
        return this.params.previewFeatures.includes(r);
      }
      getComputedFields() {
        if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(r) {
        var _a14;
        return (_a14 = this.modelOrType) == null ? void 0 : _a14.fields.find((t) => t.name === r);
      }
      nestSelection(r) {
        let t = this.findField(r), n = (t == null ? void 0 : t.kind) === "object" ? t.type : void 0;
        return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(r) });
      }
      getGlobalOmit() {
        var _a14;
        return this.params.modelName && this.shouldApplyGlobalOmit() ? ((_a14 = this.params.globalOmit) == null ? void 0 : _a14[Ye(this.params.modelName)]) ?? {} : {};
      }
      shouldApplyGlobalOmit() {
        switch (this.params.action) {
          case "findFirst":
          case "findFirstOrThrow":
          case "findUniqueOrThrow":
          case "findMany":
          case "upsert":
          case "findUnique":
          case "createManyAndReturn":
          case "create":
          case "update":
          case "updateManyAndReturn":
          case "delete":
            return true;
          case "executeRaw":
          case "aggregateRaw":
          case "runCommandRaw":
          case "findRaw":
          case "createMany":
          case "deleteMany":
          case "groupBy":
          case "updateMany":
          case "count":
          case "aggregate":
          case "queryRaw":
            return false;
          default:
            _e(this.params.action, "Unknown action");
        }
      }
      nestArgument(r) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(r) });
      }
    };
    function ka(e) {
      if (!e._hasPreviewFlag("metrics")) throw new Z("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: e._clientVersion });
    }
    var Fr = class {
      _client;
      constructor(r) {
        this._client = r;
      }
      prometheus(r) {
        return ka(this._client), this._client._engine.metrics({ format: "prometheus", ...r });
      }
      json(r) {
        return ka(this._client), this._client._engine.metrics({ format: "json", ...r });
      }
    };
    function Oa(e, r) {
      let t = at(() => am(r));
      Object.defineProperty(e, "dmmf", { get: () => t.get() });
    }
    function am(e) {
      return { datamodel: { models: Zi(e.models), enums: Zi(e.enums), types: Zi(e.types) } };
    }
    function Zi(e) {
      return Object.entries(e).map(([r, t]) => ({ name: r, ...t }));
    }
    var Xi = /* @__PURE__ */ new WeakMap();
    var _n = "$$PrismaTypedSql";
    var Et = class {
      constructor(r, t) {
        Xi.set(this, { sql: r, values: t }), Object.defineProperty(this, _n, { value: _n });
      }
      get sql() {
        return Xi.get(this).sql;
      }
      get values() {
        return Xi.get(this).values;
      }
    };
    function Da(e) {
      return (...r) => new Et(e, r);
    }
    function Nn(e) {
      return e != null && e[_n] === _n;
    }
    var cu = k(Ei());
    var pu = require("async_hooks");
    var du = require("events");
    var mu = k(require("fs"));
    var Zn = k(require("path"));
    var oe = class e {
      constructor(r, t) {
        if (r.length - 1 !== t.length) throw r.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${r.length} strings to have ${r.length - 1} values`);
        let n = t.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = r[0];
        let i = 0, o = 0;
        for (; i < t.length; ) {
          let s = t[i++], a = r[i];
          if (s instanceof e) {
            this.strings[o] += s.strings[0];
            let l = 0;
            for (; l < s.values.length; ) this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
            this.strings[o] += a;
          } else this.values[o++] = s, this.strings[o] = a;
        }
      }
      get sql() {
        let r = this.strings.length, t = 1, n = this.strings[0];
        for (; t < r; ) n += `?${this.strings[t++]}`;
        return n;
      }
      get statement() {
        let r = this.strings.length, t = 1, n = this.strings[0];
        for (; t < r; ) n += `:${t}${this.strings[t++]}`;
        return n;
      }
      get text() {
        let r = this.strings.length, t = 1, n = this.strings[0];
        for (; t < r; ) n += `$${t}${this.strings[t++]}`;
        return n;
      }
      inspect() {
        return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
      }
    };
    function _a(e, r = ",", t = "", n = "") {
      if (e.length === 0) throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new oe([t, ...Array(e.length - 1).fill(r), n], e);
    }
    function eo(e) {
      return new oe([e], []);
    }
    var Na = eo("");
    function ro(e, ...r) {
      return new oe(e, r);
    }
    function wt(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(r) {
        return e[r];
      } };
    }
    function re(e, r) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return r();
      } };
    }
    function ar(e) {
      let r = new Pe();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(t) {
        return r.getOrCreate(t, () => e.getPropertyValue(t));
      }, getPropertyDescriptor(t) {
        var _a14;
        return (_a14 = e.getPropertyDescriptor) == null ? void 0 : _a14.call(e, t);
      } };
    }
    var Fn = { enumerable: true, configurable: true, writable: true };
    function Ln(e) {
      let r = new Set(e);
      return { getPrototypeOf: () => Object.prototype, getOwnPropertyDescriptor: () => Fn, has: (t, n) => r.has(n), set: (t, n, i) => r.add(n) && Reflect.set(t, n, i), ownKeys: () => [...r] };
    }
    var Fa = Symbol.for("nodejs.util.inspect.custom");
    function he(e, r) {
      let t = lm(r), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s)) return o[s];
        let a = t.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        var _a14;
        if (n.has(s)) return true;
        let a = t.get(s);
        return a ? ((_a14 = a.has) == null ? void 0 : _a14.call(a, s)) ?? true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = La(Reflect.ownKeys(o), t), a = La(Array.from(t.keys()), t);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        var _a14, _b12, _c6;
        return ((_c6 = (_b12 = (_a14 = t.get(s)) == null ? void 0 : _a14.getPropertyDescriptor) == null ? void 0 : _b12.call(_a14, s)) == null ? void 0 : _c6.writable) === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let l = t.get(s);
        return l ? l.getPropertyDescriptor ? { ...Fn, ...l == null ? void 0 : l.getPropertyDescriptor(s) } : Fn : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      }, getPrototypeOf: () => Object.prototype });
      return i[Fa] = function() {
        let o = { ...this };
        return delete o[Fa], o;
      }, i;
    }
    function lm(e) {
      let r = /* @__PURE__ */ new Map();
      for (let t of e) {
        let n = t.getKeys();
        for (let i of n) r.set(i, t);
      }
      return r;
    }
    function La(e, r) {
      return e.filter((t) => {
        var _a14, _b12;
        return ((_b12 = (_a14 = r.get(t)) == null ? void 0 : _a14.has) == null ? void 0 : _b12.call(_a14, t)) ?? true;
      });
    }
    function Lr(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    function Mr(e, r) {
      return { batch: e, transaction: (r == null ? void 0 : r.kind) === "batch" ? { isolationLevel: r.options.isolationLevel } : void 0 };
    }
    function Ma(e) {
      if (e === void 0) return "";
      let r = _r(e);
      return new Ar(0, { colors: vn }).write(r).toString();
    }
    var um = "P2037";
    function $r({ error: e, user_facing_error: r }, t, n) {
      return r.error_code ? new z4(cm(r, n), { code: r.error_code, clientVersion: t, meta: r.meta, batchRequestIdx: r.batch_request_idx }) : new j(e, { clientVersion: t, batchRequestIdx: r.batch_request_idx });
    }
    function cm(e, r) {
      let t = e.message;
      return (r === "postgresql" || r === "postgres" || r === "mysql") && e.error_code === um && (t += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), t;
    }
    var xt = "<unknown>";
    function $a(e) {
      var r = e.split(`
`);
      return r.reduce(function(t, n) {
        var i = mm(n) || gm(n) || bm(n) || vm(n) || wm(n);
        return i && t.push(i), t;
      }, []);
    }
    var pm = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|rsc|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    var dm = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    function mm(e) {
      var r = pm.exec(e);
      if (!r) return null;
      var t = r[2] && r[2].indexOf("native") === 0, n = r[2] && r[2].indexOf("eval") === 0, i = dm.exec(r[2]);
      return n && i != null && (r[2] = i[1], r[3] = i[2], r[4] = i[3]), { file: t ? null : r[2], methodName: r[1] || xt, arguments: t ? [r[2]] : [], lineNumber: r[3] ? +r[3] : null, column: r[4] ? +r[4] : null };
    }
    var fm = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|rsc|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function gm(e) {
      var r = fm.exec(e);
      return r ? { file: r[2], methodName: r[1] || xt, arguments: [], lineNumber: +r[3], column: r[4] ? +r[4] : null } : null;
    }
    var hm = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|rsc|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
    var ym = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    function bm(e) {
      var r = hm.exec(e);
      if (!r) return null;
      var t = r[3] && r[3].indexOf(" > eval") > -1, n = ym.exec(r[3]);
      return t && n != null && (r[3] = n[1], r[4] = n[2], r[5] = null), { file: r[3], methodName: r[1] || xt, arguments: r[2] ? r[2].split(",") : [], lineNumber: r[4] ? +r[4] : null, column: r[5] ? +r[5] : null };
    }
    var Em = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
    function wm(e) {
      var r = Em.exec(e);
      return r ? { file: r[3], methodName: r[1] || xt, arguments: [], lineNumber: +r[4], column: r[5] ? +r[5] : null } : null;
    }
    var xm = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function vm(e) {
      var r = xm.exec(e);
      return r ? { file: r[2], methodName: r[1] || xt, arguments: [], lineNumber: +r[3], column: r[4] ? +r[4] : null } : null;
    }
    var to = class {
      getLocation() {
        return null;
      }
    };
    var no = class {
      _error;
      constructor() {
        this._error = new Error();
      }
      getLocation() {
        let r = this._error.stack;
        if (!r) return null;
        let n = $a(r).find((i) => {
          if (!i.file) return false;
          let o = Oi(i.file);
          return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
        });
        return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
      }
    };
    function Ze(e) {
      return e === "minimal" ? typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new to() : new no();
    }
    var qa = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function qr(e = {}) {
      let r = Tm(e);
      return Object.entries(r).reduce((n, [i, o]) => (qa[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    function Tm(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    function Mn(e = {}) {
      return (r) => (typeof e._count == "boolean" && (r._count = r._count._all), r);
    }
    function ja(e, r) {
      let t = Mn(e);
      return r({ action: "aggregate", unpacker: t, argsMapper: qr })(e);
    }
    function Sm(e = {}) {
      let { select: r, ...t } = e;
      return typeof r == "object" ? qr({ ...t, _count: r }) : qr({ ...t, _count: { _all: true } });
    }
    function Rm(e = {}) {
      return typeof e.select == "object" ? (r) => Mn(e)(r)._count : (r) => Mn(e)(r)._count._all;
    }
    function Va(e, r) {
      return r({ action: "count", unpacker: Rm(e), argsMapper: Sm })(e);
    }
    function Cm(e = {}) {
      let r = qr(e);
      if (Array.isArray(r.by)) for (let t of r.by) typeof t == "string" && (r.select[t] = true);
      else typeof r.by == "string" && (r.select[r.by] = true);
      return r;
    }
    function Am(e = {}) {
      return (r) => (typeof (e == null ? void 0 : e._count) == "boolean" && r.forEach((t) => {
        t._count = t._count._all;
      }), r);
    }
    function Ba(e, r) {
      return r({ action: "groupBy", unpacker: Am(e), argsMapper: Cm })(e);
    }
    function Ua(e, r, t) {
      if (r === "aggregate") return (n) => ja(n, t);
      if (r === "count") return (n) => Va(n, t);
      if (r === "groupBy") return (n) => Ba(n, t);
    }
    function Qa(e, r) {
      let t = r.fields.filter((i) => !i.relationName), n = Ys(t, "name");
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol") return i[o];
        let s = n[o];
        if (s) return new dt(e, o, s.type, s.isList, s.kind === "enum");
      }, ...Ln(Object.keys(n)) });
    }
    var Ga = (e) => Array.isArray(e) ? e : e.split(".");
    var io = (e, r) => Ga(r).reduce((t, n) => t && t[n], e);
    var Wa = (e, r, t) => Ga(r).reduceRight((n, i, o, s) => Object.assign({}, io(e, s.slice(0, o)), { [i]: n }), t);
    function Im(e, r) {
      return e === void 0 || r === void 0 ? [] : [...r, "select", e];
    }
    function km(e, r, t) {
      return r === void 0 ? e ?? {} : Wa(r, t, e || true);
    }
    function oo(e, r, t, n, i, o) {
      let a = e._runtimeDataModel.models[r].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {});
      return (l) => {
        let u = Ze(e._errorFormat), c = Im(n, i), p = km(l, o, c), d = t({ dataPath: c, callsite: u })(p), f = Om(e, r);
        return new Proxy(d, { get(g, h) {
          if (!f.includes(h)) return g[h];
          let P = [a[h].type, t, h], S = [c, p];
          return oo(e, ...P, ...S);
        }, ...Ln([...f, ...Object.getOwnPropertyNames(d)]) });
      };
    }
    function Om(e, r) {
      return e._runtimeDataModel.models[r].fields.filter((t) => t.kind === "object").map((t) => t.name);
    }
    var Dm = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var _m = ["aggregate", "count", "groupBy"];
    function so(e, r) {
      let t = e._extensions.getAllModelExtensions(r) ?? {}, n = [Nm(e, r), Lm(e, r), wt(t), re("name", () => r), re("$name", () => r), re("$parent", () => e._appliedParent)];
      return he({}, n);
    }
    function Nm(e, r) {
      let t = Se(r), n = Object.keys(Cr).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = (a) => (l) => {
          let u = Ze(e._errorFormat);
          return e._createPrismaPromise((c) => {
            let p = { args: l, dataPath: [], action: o, model: r, clientMethod: `${t}.${i}`, jsModelName: t, transaction: c, callsite: u };
            return e._request({ ...p, ...a });
          }, { action: o, args: l, model: r });
        };
        return Dm.includes(o) ? oo(e, r, s) : Fm(i) ? Ua(e, i, s) : s({});
      } };
    }
    function Fm(e) {
      return _m.includes(e);
    }
    function Lm(e, r) {
      return ar(re("fields", () => {
        let t = e._runtimeDataModel.models[r];
        return Qa(r, t);
      }));
    }
    function Ja(e) {
      return e.replace(/^./, (r) => r.toUpperCase());
    }
    var ao = Symbol();
    function vt(e) {
      let r = [Mm(e), $m(e), re(ao, () => e), re("$parent", () => e._appliedParent)], t = e._extensions.getAllClientExtensions();
      return t && r.push(wt(t)), he(e, r);
    }
    function Mm(e) {
      let r = Object.getPrototypeOf(e._originalClient), t = [...new Set(Object.getOwnPropertyNames(r))];
      return { getKeys() {
        return t;
      }, getPropertyValue(n) {
        return e[n];
      } };
    }
    function $m(e) {
      let r = Object.keys(e._runtimeDataModel.models), t = r.map(Se), n = [...new Set(r.concat(t))];
      return ar({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = Ja(i);
        if (e._runtimeDataModel.models[o] !== void 0) return so(e, o);
        if (e._runtimeDataModel.models[i] !== void 0) return so(e, i);
      }, getPropertyDescriptor(i) {
        if (!t.includes(i)) return { enumerable: false };
      } });
    }
    function Ha(e) {
      return e[ao] ? e[ao] : e;
    }
    function Ka(e) {
      var _a14;
      if (typeof e == "function") return e(this);
      if ((_a14 = e.client) == null ? void 0 : _a14.__AccelerateEngine) {
        let t = e.client.__AccelerateEngine;
        this._originalClient._engine = new t(this._originalClient._accelerateEngineConfig);
      }
      let r = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return vt(r);
    }
    function Ya({ result: e, modelName: r, select: t, omit: n, extensions: i }) {
      let o = i.getAllComputedFields(r);
      if (!o) return e;
      let s = [], a = [];
      for (let l of Object.values(o)) {
        if (n) {
          if (n[l.name]) continue;
          let u = l.needs.filter((c) => n[c]);
          u.length > 0 && a.push(Lr(u));
        } else if (t) {
          if (!t[l.name]) continue;
          let u = l.needs.filter((c) => !t[c]);
          u.length > 0 && a.push(Lr(u));
        }
        qm(e, l.needs) && s.push(jm(l, he(e, s)));
      }
      return s.length > 0 || a.length > 0 ? he(e, [...s, ...a]) : e;
    }
    function qm(e, r) {
      return r.every((t) => Mi(e, t));
    }
    function jm(e, r) {
      return ar(re(e.name, () => e.compute(r)));
    }
    function $n({ visitor: e, result: r, args: t, runtimeDataModel: n, modelName: i }) {
      if (Array.isArray(r)) {
        for (let s = 0; s < r.length; s++) r[s] = $n({ result: r[s], args: t, modelName: i, runtimeDataModel: n, visitor: e });
        return r;
      }
      let o = e(r, i, t) ?? r;
      return t.include && za({ includeOrSelect: t.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), t.select && za({ includeOrSelect: t.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    function za({ includeOrSelect: e, result: r, parentModelName: t, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || r[o] == null || Re(s)) continue;
        let l = n.models[t].fields.find((c) => c.name === o);
        if (!l || l.kind !== "object" || !l.relationName) continue;
        let u = typeof s == "object" ? s : {};
        r[o] = $n({ visitor: i, result: r[o], args: u, modelName: l.type, runtimeDataModel: n });
      }
    }
    function Za({ result: e, modelName: r, args: t, extensions: n, runtimeDataModel: i, globalOmit: o }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[r] ? e : $n({ result: e, args: t ?? {}, modelName: r, runtimeDataModel: i, visitor: (a, l, u) => {
        let c = Se(l);
        return Ya({ result: a, modelName: c, select: u.select, omit: u.select ? void 0 : { ...o == null ? void 0 : o[c], ...u.omit }, extensions: n });
      } });
    }
    var Vm = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var Xa = Vm;
    function el(e) {
      if (e instanceof oe) return Bm(e);
      if (Nn(e)) return Um(e);
      if (Array.isArray(e)) {
        let t = [e[0]];
        for (let n = 1; n < e.length; n++) t[n] = Pt(e[n]);
        return t;
      }
      let r = {};
      for (let t in e) r[t] = Pt(e[t]);
      return r;
    }
    function Bm(e) {
      return new oe(e.strings, e.values);
    }
    function Um(e) {
      return new Et(e.sql, e.values);
    }
    function Pt(e) {
      if (typeof e != "object" || e == null || e instanceof Le || Dr(e)) return e;
      if (Rr(e)) return new ve(e.toFixed());
      if (Sr(e)) return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e)) return e.slice(0);
      if (Array.isArray(e)) {
        let r = e.length, t;
        for (t = Array(r); r--; ) t[r] = Pt(e[r]);
        return t;
      }
      if (typeof e == "object") {
        let r = {};
        for (let t in e) t === "__proto__" ? Object.defineProperty(r, t, { value: Pt(e[t]), configurable: true, enumerable: true, writable: true }) : r[t] = Pt(e[t]);
        return r;
      }
      _e(e, "Unknown value");
    }
    function tl(e, r, t, n = 0) {
      return e._createPrismaPromise((i) => {
        var _a14;
        let o = r.customDataProxyFetch;
        return "transaction" in r && i !== void 0 && (((_a14 = r.transaction) == null ? void 0 : _a14.kind) === "batch" && r.transaction.lock.then(), r.transaction = i), n === t.length ? e._executeRequest(r) : t[n]({ model: r.model, operation: r.model ? r.action : r.clientMethod, args: el(r.args ?? {}), __internalParams: r, query: (s, a = r) => {
          let l = a.customDataProxyFetch;
          return a.customDataProxyFetch = sl(o, l), a.args = s, tl(e, a, t, n + 1);
        } });
      });
    }
    function nl(e, r) {
      let { jsModelName: t, action: n, clientMethod: i } = r, o = t ? n : i;
      if (e._extensions.isEmpty()) return e._executeRequest(r);
      let s = e._extensions.getAllQueryCallbacks(t ?? "$none", o);
      return tl(e, r, s);
    }
    function il(e) {
      return (r) => {
        let t = { requests: r }, n = r[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? ol(t, n, 0, e) : e(t);
      };
    }
    function ol(e, r, t, n) {
      if (t === r.length) return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return r[t]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = sl(i, l), ol(a, r, t + 1, n);
      } });
    }
    var rl = (e) => e;
    function sl(e = rl, r = rl) {
      return (t) => e(r(t));
    }
    var al = N("prisma:client");
    var ll = { Vercel: "vercel", "Netlify CI": "netlify" };
    function ul({ postinstall: e, ciName: r, clientVersion: t }) {
      if (al("checkPlatformCaching:postinstall", e), al("checkPlatformCaching:ciName", r), e === true && r && r in ll) {
        let n = `Prisma has detected that this project was built on ${r}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${ll[r]}-build`;
        throw console.error(n), new T(n, t);
      }
    }
    function cl(e, r) {
      return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [r[0]]: { url: e.datasourceUrl } } : {} : {};
    }
    var Qm = () => {
      var _a14, _b12;
      return ((_b12 = (_a14 = globalThis.process) == null ? void 0 : _a14.release) == null ? void 0 : _b12.name) === "node";
    };
    var Gm = () => {
      var _a14, _b12;
      return !!globalThis.Bun || !!((_b12 = (_a14 = globalThis.process) == null ? void 0 : _a14.versions) == null ? void 0 : _b12.bun);
    };
    var Wm = () => !!globalThis.Deno;
    var Jm = () => typeof globalThis.Netlify == "object";
    var Hm = () => typeof globalThis.EdgeRuntime == "object";
    var Km = () => {
      var _a14;
      return ((_a14 = globalThis.navigator) == null ? void 0 : _a14.userAgent) === "Cloudflare-Workers";
    };
    function Ym() {
      return [[Jm, "netlify"], [Hm, "edge-light"], [Km, "workerd"], [Wm, "deno"], [Gm, "bun"], [Qm, "node"]].flatMap((t) => t[0]() ? [t[1]] : []).at(0) ?? "";
    }
    var zm = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
    function qn() {
      let e = Ym();
      return { id: e, prettyName: zm[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
    }
    var gl = k(require("fs"));
    var Tt = k(require("path"));
    function jn(e) {
      let { runtimeBinaryTarget: r } = e;
      return `Add "${r}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${Zm(e)}`;
    }
    function Zm(e) {
      let { generator: r, generatorBinaryTargets: t, runtimeBinaryTarget: n } = e, i = { fromEnvVar: null, value: n }, o = [...t, i];
      return Ai({ ...r, binaryTargets: o });
    }
    function Xe(e) {
      let { runtimeBinaryTarget: r } = e;
      return `Prisma Client could not locate the Query Engine for runtime "${r}".`;
    }
    function er(e) {
      let { searchedLocations: r } = e;
      return `The following locations have been searched:
${[...new Set(r)].map((i) => `  ${i}`).join(`
`)}`;
    }
    function pl(e) {
      let { runtimeBinaryTarget: r } = e;
      return `${Xe(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${r}".
${jn(e)}

${er(e)}`;
    }
    function Vn(e) {
      return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
    }
    function Bn(e) {
      let { errorStack: r } = e;
      return (r == null ? void 0 : r.match(/\/\.next|\/next@|\/next\//)) ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.` : "";
    }
    function dl(e) {
      let { queryEngineName: r } = e;
      return `${Xe(e)}${Bn(e)}

This is likely caused by a bundler that has not copied "${r}" next to the resulting bundle.
Ensure that "${r}" has been copied next to the bundle or in "${e.expectedLocation}".

${Vn("engine-not-found-bundler-investigation")}

${er(e)}`;
    }
    function ml(e) {
      let { runtimeBinaryTarget: r, generatorBinaryTargets: t } = e, n = t.find((i) => i.native);
      return `${Xe(e)}

This happened because Prisma Client was generated for "${(n == null ? void 0 : n.value) ?? "unknown"}", but the actual deployment required "${r}".
${jn(e)}

${er(e)}`;
    }
    function fl(e) {
      let { queryEngineName: r } = e;
      return `${Xe(e)}${Bn(e)}

This is likely caused by tooling that has not copied "${r}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${r}" has been copied to "${e.expectedLocation}".

${Vn("engine-not-found-tooling-investigation")}

${er(e)}`;
    }
    var Xm = N("prisma:client:engines:resolveEnginePath");
    var ef = () => new RegExp("runtime[\\\\/]library\\.m?js$");
    async function hl(e, r) {
      var _a14;
      let t = { binary: process.env.PRISMA_QUERY_ENGINE_BINARY, library: process.env.PRISMA_QUERY_ENGINE_LIBRARY }[e] ?? r.prismaPath;
      if (t !== void 0) return t;
      let { enginePath: n, searchedLocations: i } = await rf(e, r);
      if (Xm("enginePath", n), n !== void 0 && e === "binary" && vi(n), n !== void 0) return r.prismaPath = n;
      let o = await ir(), s = ((_a14 = r.generator) == null ? void 0 : _a14.binaryTargets) ?? [], a = s.some((d) => d.native), l = !s.some((d) => d.value === o), u = __filename.match(ef()) === null, c = { searchedLocations: i, generatorBinaryTargets: s, generator: r.generator, runtimeBinaryTarget: o, queryEngineName: yl(e, o), expectedLocation: Tt.default.relative(process.cwd(), r.dirname), errorStack: new Error().stack }, p;
      throw a && l ? p = ml(c) : l ? p = pl(c) : u ? p = dl(c) : p = fl(c), new T(p, r.clientVersion);
    }
    async function rf(e, r) {
      var _a14, _b12;
      let t = await ir(), n = [], i = [r.dirname, Tt.default.resolve(__dirname, ".."), ((_b12 = (_a14 = r.generator) == null ? void 0 : _a14.output) == null ? void 0 : _b12.value) ?? __dirname, Tt.default.resolve(__dirname, "../../../.prisma/client"), "/tmp/prisma-engines", r.cwd];
      __filename.includes("resolveEnginePath") && i.push(fs());
      for (let o of i) {
        let s = yl(e, t), a = Tt.default.join(o, s);
        if (n.push(o), gl.default.existsSync(a)) return { enginePath: a, searchedLocations: n };
      }
      return { enginePath: void 0, searchedLocations: n };
    }
    function yl(e, r) {
      return e === "library" ? Bt(r, "fs") : `query-engine-${r}${r === "windows" ? ".exe" : ""}`;
    }
    var lo = k(ki());
    function bl(e) {
      return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (r) => `${r[0]}5`) : "";
    }
    function El(e) {
      return e.split(`
`).map((r) => r.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
    }
    var wl = k(Ns());
    function xl({ title: e, user: r = "prisma", repo: t = "prisma", template: n = "bug_report.yml", body: i }) {
      return (0, wl.default)({ user: r, repo: t, template: n, title: e, body: i });
    }
    function vl({ version: e, binaryTarget: r, title: t, description: n, engineVersion: i, database: o, query: s }) {
      var _a14;
      let a = Qo(6e3 - ((s == null ? void 0 : s.length) ?? 0)), l = El((0, lo.default)(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = (0, lo.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${(_a14 = process.version) == null ? void 0 : _a14.padEnd(19)}| 
| OS              | ${r == null ? void 0 : r.padEnd(19)}|
| Prisma Client   | ${e == null ? void 0 : e.padEnd(19)}|
| Query Engine    | ${i == null ? void 0 : i.padEnd(19)}|
| Database        | ${o == null ? void 0 : o.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? bl(s) : ""}
\`\`\`
`), p = xl({ title: t, body: c });
      return `${t}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${Y(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
    }
    function uo(e) {
      return e.name === "DriverAdapterError" && typeof e.cause == "object";
    }
    function Un(e) {
      return { ok: true, value: e, map(r) {
        return Un(r(e));
      }, flatMap(r) {
        return r(e);
      } };
    }
    function lr(e) {
      return { ok: false, error: e, map() {
        return lr(e);
      }, flatMap() {
        return lr(e);
      } };
    }
    var Pl = N("driver-adapter-utils");
    var co = class {
      registeredErrors = [];
      consumeError(r) {
        return this.registeredErrors[r];
      }
      registerNewError(r) {
        let t = 0;
        for (; this.registeredErrors[t] !== void 0; ) t++;
        return this.registeredErrors[t] = { error: r }, t;
      }
    };
    var po = (e, r = new co()) => {
      let t = { adapterName: e.adapterName, errorRegistry: r, queryRaw: Me(r, e.queryRaw.bind(e)), executeRaw: Me(r, e.executeRaw.bind(e)), executeScript: Me(r, e.executeScript.bind(e)), dispose: Me(r, e.dispose.bind(e)), provider: e.provider, startTransaction: async (...n) => (await Me(r, e.startTransaction.bind(e))(...n)).map((o) => tf(r, o)) };
      return e.getConnectionInfo && (t.getConnectionInfo = nf(r, e.getConnectionInfo.bind(e))), t;
    };
    var tf = (e, r) => ({ adapterName: r.adapterName, provider: r.provider, options: r.options, queryRaw: Me(e, r.queryRaw.bind(r)), executeRaw: Me(e, r.executeRaw.bind(r)), commit: Me(e, r.commit.bind(r)), rollback: Me(e, r.rollback.bind(r)) });
    function Me(e, r) {
      return async (...t) => {
        try {
          return Un(await r(...t));
        } catch (n) {
          if (Pl("[error@wrapAsync]", n), uo(n)) return lr(n.cause);
          let i = e.registerNewError(n);
          return lr({ kind: "GenericJs", id: i });
        }
      };
    }
    function nf(e, r) {
      return (...t) => {
        try {
          return Un(r(...t));
        } catch (n) {
          if (Pl("[error@wrapSync]", n), uo(n)) return lr(n.cause);
          let i = e.registerNewError(n);
          return lr({ kind: "GenericJs", id: i });
        }
      };
    }
    function jr({ inlineDatasources: e, overrideDatasources: r, env: t, clientVersion: n }) {
      var _a14, _b12;
      let i, o = Object.keys(e)[0], s = (_a14 = e[o]) == null ? void 0 : _a14.url, a = (_b12 = r[o]) == null ? void 0 : _b12.url;
      if (o === void 0 ? i = void 0 : a ? i = a : (s == null ? void 0 : s.value) ? i = s.value : (s == null ? void 0 : s.fromEnvVar) && (i = t[s.fromEnvVar]), (s == null ? void 0 : s.fromEnvVar) !== void 0 && i === void 0) throw new T(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
      if (i === void 0) throw new T("error: Missing URL environment variable, value, or override.", n);
      return i;
    }
    var Qn = class extends Error {
      clientVersion;
      cause;
      constructor(r, t) {
        super(r), this.clientVersion = t.clientVersion, this.cause = t.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    };
    var se = class extends Qn {
      isRetryable;
      constructor(r, t) {
        super(r, t), this.isRetryable = t.isRetryable ?? true;
      }
    };
    function R(e, r) {
      return { ...e, isRetryable: r };
    }
    var Vr = class extends se {
      name = "ForcedRetryError";
      code = "P5001";
      constructor(r) {
        super("This request must be retried", R(r, true));
      }
    };
    x(Vr, "ForcedRetryError");
    var ur = class extends se {
      name = "InvalidDatasourceError";
      code = "P6001";
      constructor(r, t) {
        super(r, R(t, false));
      }
    };
    x(ur, "InvalidDatasourceError");
    var cr = class extends se {
      name = "NotImplementedYetError";
      code = "P5004";
      constructor(r, t) {
        super(r, R(t, false));
      }
    };
    x(cr, "NotImplementedYetError");
    var $ = class extends se {
      response;
      constructor(r, t) {
        super(r, t), this.response = t.response;
        let n = this.response.headers.get("prisma-request-id");
        if (n) {
          let i = `(The request id was: ${n})`;
          this.message = this.message + " " + i;
        }
      }
    };
    var pr = class extends $ {
      name = "SchemaMissingError";
      code = "P5005";
      constructor(r) {
        super("Schema needs to be uploaded", R(r, true));
      }
    };
    x(pr, "SchemaMissingError");
    var mo = "This request could not be understood by the server";
    var St = class extends $ {
      name = "BadRequestError";
      code = "P5000";
      constructor(r, t, n) {
        super(t || mo, R(r, false)), n && (this.code = n);
      }
    };
    x(St, "BadRequestError");
    var Rt = class extends $ {
      name = "HealthcheckTimeoutError";
      code = "P5013";
      logs;
      constructor(r, t) {
        super("Engine not started: healthcheck timeout", R(r, true)), this.logs = t;
      }
    };
    x(Rt, "HealthcheckTimeoutError");
    var Ct = class extends $ {
      name = "EngineStartupError";
      code = "P5014";
      logs;
      constructor(r, t, n) {
        super(t, R(r, true)), this.logs = n;
      }
    };
    x(Ct, "EngineStartupError");
    var At = class extends $ {
      name = "EngineVersionNotSupportedError";
      code = "P5012";
      constructor(r) {
        super("Engine version is not supported", R(r, false));
      }
    };
    x(At, "EngineVersionNotSupportedError");
    var fo = "Request timed out";
    var It = class extends $ {
      name = "GatewayTimeoutError";
      code = "P5009";
      constructor(r, t = fo) {
        super(t, R(r, false));
      }
    };
    x(It, "GatewayTimeoutError");
    var of = "Interactive transaction error";
    var kt = class extends $ {
      name = "InteractiveTransactionError";
      code = "P5015";
      constructor(r, t = of) {
        super(t, R(r, false));
      }
    };
    x(kt, "InteractiveTransactionError");
    var sf = "Request parameters are invalid";
    var Ot = class extends $ {
      name = "InvalidRequestError";
      code = "P5011";
      constructor(r, t = sf) {
        super(t, R(r, false));
      }
    };
    x(Ot, "InvalidRequestError");
    var go = "Requested resource does not exist";
    var Dt = class extends $ {
      name = "NotFoundError";
      code = "P5003";
      constructor(r, t = go) {
        super(t, R(r, false));
      }
    };
    x(Dt, "NotFoundError");
    var ho = "Unknown server error";
    var Br = class extends $ {
      name = "ServerError";
      code = "P5006";
      logs;
      constructor(r, t, n) {
        super(t || ho, R(r, true)), this.logs = n;
      }
    };
    x(Br, "ServerError");
    var yo = "Unauthorized, check your connection string";
    var _t = class extends $ {
      name = "UnauthorizedError";
      code = "P5007";
      constructor(r, t = yo) {
        super(t, R(r, false));
      }
    };
    x(_t, "UnauthorizedError");
    var bo = "Usage exceeded, retry again later";
    var Nt = class extends $ {
      name = "UsageExceededError";
      code = "P5008";
      constructor(r, t = bo) {
        super(t, R(r, true));
      }
    };
    x(Nt, "UsageExceededError");
    async function af(e) {
      let r;
      try {
        r = await e.text();
      } catch {
        return { type: "EmptyError" };
      }
      try {
        let t = JSON.parse(r);
        if (typeof t == "string") switch (t) {
          case "InternalDataProxyError":
            return { type: "DataProxyError", body: t };
          default:
            return { type: "UnknownTextError", body: t };
        }
        if (typeof t == "object" && t !== null) {
          if ("is_panic" in t && "message" in t && "error_code" in t) return { type: "QueryEngineError", body: t };
          if ("EngineNotStarted" in t || "InteractiveTransactionMisrouted" in t || "InvalidRequestError" in t) {
            let n = Object.values(t)[0].reason;
            return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: t } : { type: "DataProxyError", body: t };
          }
        }
        return { type: "UnknownJsonError", body: t };
      } catch {
        return r === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: r };
      }
    }
    async function Ft(e, r) {
      if (e.ok) return;
      let t = { clientVersion: r, response: e }, n = await af(e);
      if (n.type === "QueryEngineError") throw new z4(n.body.message, { code: n.body.error_code, clientVersion: r });
      if (n.type === "DataProxyError") {
        if (n.body === "InternalDataProxyError") throw new Br(t, "Internal Data Proxy error");
        if ("EngineNotStarted" in n.body) {
          if (n.body.EngineNotStarted.reason === "SchemaMissing") return new pr(t);
          if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported") throw new At(t);
          if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
            throw new Ct(t, i, o);
          }
          if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
            throw new T(i, r, o);
          }
          if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
            let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
            throw new Rt(t, i);
          }
        }
        if ("InteractiveTransactionMisrouted" in n.body) {
          let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
          throw new kt(t, i[n.body.InteractiveTransactionMisrouted.reason]);
        }
        if ("InvalidRequestError" in n.body) throw new Ot(t, n.body.InvalidRequestError.reason);
      }
      if (e.status === 401 || e.status === 403) throw new _t(t, Ur(yo, n));
      if (e.status === 404) return new Dt(t, Ur(go, n));
      if (e.status === 429) throw new Nt(t, Ur(bo, n));
      if (e.status === 504) throw new It(t, Ur(fo, n));
      if (e.status >= 500) throw new Br(t, Ur(ho, n));
      if (e.status >= 400) throw new St(t, Ur(mo, n));
    }
    function Ur(e, r) {
      return r.type === "EmptyError" ? e : `${e}: ${JSON.stringify(r)}`;
    }
    function Tl(e) {
      let r = Math.pow(2, e) * 50, t = Math.ceil(Math.random() * r) - Math.ceil(r / 2), n = r + t;
      return new Promise((i) => setTimeout(() => i(n), n));
    }
    var $e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function Sl(e) {
      let r = new TextEncoder().encode(e), t = "", n = r.byteLength, i = n % 3, o = n - i, s, a, l, u, c;
      for (let p = 0; p < o; p = p + 3) c = r[p] << 16 | r[p + 1] << 8 | r[p + 2], s = (c & 16515072) >> 18, a = (c & 258048) >> 12, l = (c & 4032) >> 6, u = c & 63, t += $e[s] + $e[a] + $e[l] + $e[u];
      return i == 1 ? (c = r[o], s = (c & 252) >> 2, a = (c & 3) << 4, t += $e[s] + $e[a] + "==") : i == 2 && (c = r[o] << 8 | r[o + 1], s = (c & 64512) >> 10, a = (c & 1008) >> 4, l = (c & 15) << 2, t += $e[s] + $e[a] + $e[l] + "="), t;
    }
    function Rl(e) {
      var _a14;
      if (!!((_a14 = e.generator) == null ? void 0 : _a14.previewFeatures.some((t) => t.toLowerCase().includes("metrics")))) throw new T("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
    }
    function lf(e) {
      return e[0] * 1e3 + e[1] / 1e6;
    }
    function Eo(e) {
      return new Date(lf(e));
    }
    var Cl = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "6.7.0-36.3cff47a7f5d65c3ea74883f1d736e41d68ce91ed", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
    var Lt = class extends se {
      name = "RequestError";
      code = "P5010";
      constructor(r, t) {
        super(`Cannot fetch data from service:
${r}`, R(t, true));
      }
    };
    x(Lt, "RequestError");
    async function dr(e, r, t = (n) => n) {
      let { clientVersion: n, ...i } = r, o = t(fetch);
      try {
        return await o(e, i);
      } catch (s) {
        let a = s.message ?? "Unknown error";
        throw new Lt(a, { clientVersion: n, cause: s });
      }
    }
    var cf = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
    var Al = N("prisma:client:dataproxyEngine");
    async function pf(e, r) {
      let t = Cl["@prisma/engines-version"], n = r.clientVersion ?? "unknown";
      if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
      if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory") return n;
      let [i, o] = (n == null ? void 0 : n.split("-")) ?? [];
      if (o === void 0 && cf.test(i)) return i;
      if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
        if (e.startsWith("localhost") || e.startsWith("127.0.0.1")) return "0.0.0";
        let [s] = t.split("-") ?? [], [a, l, u] = s.split("."), c = df(`<=${a}.${l}.${u}`), p = await dr(c, { clientVersion: n });
        if (!p.ok) throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${await p.text() || "<empty body>"}`);
        let d = await p.text();
        Al("length of body fetched from unpkg.com", d.length);
        let f;
        try {
          f = JSON.parse(d);
        } catch (g) {
          throw console.error("JSON.parse error: body fetched from unpkg.com: ", d), g;
        }
        return f.version;
      }
      throw new cr("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
    }
    async function Il(e, r) {
      let t = await pf(e, r);
      return Al("version", t), t;
    }
    function df(e) {
      return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
    }
    var kl = 3;
    var Gn = N("prisma:client:dataproxyEngine");
    var wo = class {
      apiKey;
      tracingHelper;
      logLevel;
      logQueries;
      engineHash;
      constructor({ apiKey: r, tracingHelper: t, logLevel: n, logQueries: i, engineHash: o }) {
        this.apiKey = r, this.tracingHelper = t, this.logLevel = n, this.logQueries = i, this.engineHash = o;
      }
      build({ traceparent: r, interactiveTransaction: t } = {}) {
        let n = { Authorization: `Bearer ${this.apiKey}`, "Prisma-Engine-Hash": this.engineHash };
        this.tracingHelper.isEnabled() && (n.traceparent = r ?? this.tracingHelper.getTraceParent()), t && (n["X-transaction-id"] = t.id);
        let i = this.buildCaptureSettings();
        return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
      }
      buildCaptureSettings() {
        let r = [];
        return this.tracingHelper.isEnabled() && r.push("tracing"), this.logLevel && r.push(this.logLevel), this.logQueries && r.push("query"), r;
      }
    };
    var Mt = class {
      name = "DataProxyEngine";
      inlineSchema;
      inlineSchemaHash;
      inlineDatasources;
      config;
      logEmitter;
      env;
      clientVersion;
      engineHash;
      tracingHelper;
      remoteClientVersion;
      host;
      headerBuilder;
      startPromise;
      constructor(r) {
        Rl(r), this.config = r, this.env = { ...r.env, ...typeof process < "u" ? process.env : {} }, this.inlineSchema = Sl(r.inlineSchema), this.inlineDatasources = r.inlineDatasources, this.inlineSchemaHash = r.inlineSchemaHash, this.clientVersion = r.clientVersion, this.engineHash = r.engineVersion, this.logEmitter = r.logEmitter, this.tracingHelper = r.tracingHelper;
      }
      apiKey() {
        return this.headerBuilder.apiKey;
      }
      version() {
        return this.engineHash;
      }
      async start() {
        this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async () => {
          let [r, t] = this.extractHostAndApiKey();
          this.host = r, this.headerBuilder = new wo({ apiKey: t, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await Il(r, this.config), Gn("host", this.host);
        })(), await this.startPromise;
      }
      async stop() {
      }
      propagateResponseExtensions(r) {
        var _a14, _b12;
        ((_a14 = r == null ? void 0 : r.logs) == null ? void 0 : _a14.length) && r.logs.forEach((t) => {
          switch (t.level) {
            case "debug":
            case "trace":
              Gn(t);
              break;
            case "error":
            case "warn":
            case "info": {
              this.logEmitter.emit(t.level, { timestamp: Eo(t.timestamp), message: t.attributes.message ?? "", target: t.target });
              break;
            }
            case "query": {
              this.logEmitter.emit("query", { query: t.attributes.query ?? "", timestamp: Eo(t.timestamp), duration: t.attributes.duration_ms ?? 0, params: t.attributes.params ?? "", target: t.target });
              break;
            }
            default:
              t.level;
          }
        }), ((_b12 = r == null ? void 0 : r.traces) == null ? void 0 : _b12.length) && this.tracingHelper.dispatchEngineSpans(r.traces);
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the remote query engine');
      }
      async url(r) {
        return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${r}`;
      }
      async uploadSchema() {
        let r = { name: "schemaUpload", internal: true };
        return this.tracingHelper.runInChildSpan(r, async () => {
          let t = await dr(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
          t.ok || Gn("schema response status", t.status);
          let n = await Ft(t, this.clientVersion);
          if (n) throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: /* @__PURE__ */ new Date(), target: "" }), n;
          this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
        });
      }
      request(r, { traceparent: t, interactiveTransaction: n, customDataProxyFetch: i }) {
        return this.requestInternal({ body: r, traceparent: t, interactiveTransaction: n, customDataProxyFetch: i });
      }
      async requestBatch(r, { traceparent: t, transaction: n, customDataProxyFetch: i }) {
        let o = (n == null ? void 0 : n.kind) === "itx" ? n.options : void 0, s = Mr(r, n);
        return (await this.requestInternal({ body: s, customDataProxyFetch: i, interactiveTransaction: o, traceparent: t })).map((l) => (l.extensions && this.propagateResponseExtensions(l.extensions), "errors" in l ? this.convertProtocolErrorsToClientError(l.errors) : l));
      }
      requestInternal({ body: r, traceparent: t, customDataProxyFetch: n, interactiveTransaction: i }) {
        return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: o }) => {
          let s = i ? `${i.payload.endpoint}/graphql` : await this.url("graphql");
          o(s);
          let a = await dr(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: t, interactiveTransaction: i }), body: JSON.stringify(r), clientVersion: this.clientVersion }, n);
          a.ok || Gn("graphql response status", a.status), await this.handleError(await Ft(a, this.clientVersion));
          let l = await a.json();
          if (l.extensions && this.propagateResponseExtensions(l.extensions), "errors" in l) throw this.convertProtocolErrorsToClientError(l.errors);
          return "batchResult" in l ? l.batchResult : l;
        } });
      }
      async transaction(r, t, n) {
        let i = { start: "starting", commit: "committing", rollback: "rolling back" };
        return this.withRetry({ actionGerund: `${i[r]} transaction`, callback: async ({ logHttpCall: o }) => {
          if (r === "start") {
            let s = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }), a = await this.url("transaction/start");
            o(a);
            let l = await dr(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: t.traceparent }), body: s, clientVersion: this.clientVersion });
            await this.handleError(await Ft(l, this.clientVersion));
            let u = await l.json(), { extensions: c } = u;
            c && this.propagateResponseExtensions(c);
            let p = u.id, d = u["data-proxy"].endpoint;
            return { id: p, payload: { endpoint: d } };
          } else {
            let s = `${n.payload.endpoint}/${r}`;
            o(s);
            let a = await dr(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: t.traceparent }), clientVersion: this.clientVersion });
            await this.handleError(await Ft(a, this.clientVersion));
            let l = await a.json(), { extensions: u } = l;
            u && this.propagateResponseExtensions(u);
            return;
          }
        } });
      }
      extractHostAndApiKey() {
        let r = { clientVersion: this.clientVersion }, t = Object.keys(this.inlineDatasources)[0], n = jr({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), i;
        try {
          i = new URL(n);
        } catch {
          throw new ur(`Error validating datasource \`${t}\`: the URL must start with the protocol \`prisma://\``, r);
        }
        let { protocol: o, host: s, searchParams: a } = i;
        if (o !== "prisma:" && o !== en) throw new ur(`Error validating datasource \`${t}\`: the URL must start with the protocol \`prisma://\``, r);
        let l = a.get("api_key");
        if (l === null || l.length < 1) throw new ur(`Error validating datasource \`${t}\`: the URL must contain a valid API key`, r);
        return [s, l];
      }
      metrics() {
        throw new cr("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
      }
      async withRetry(r) {
        for (let t = 0; ; t++) {
          let n = (i) => {
            this.logEmitter.emit("info", { message: `Calling ${i} (n=${t})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          };
          try {
            return await r.callback({ logHttpCall: n });
          } catch (i) {
            if (!(i instanceof se) || !i.isRetryable) throw i;
            if (t >= kl) throw i instanceof Vr ? i.cause : i;
            this.logEmitter.emit("warn", { message: `Attempt ${t + 1}/${kl} failed for ${r.actionGerund}: ${i.message ?? "(unknown)"}`, timestamp: /* @__PURE__ */ new Date(), target: "" });
            let o = await Tl(t);
            this.logEmitter.emit("warn", { message: `Retrying after ${o}ms`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }
        }
      }
      async handleError(r) {
        if (r instanceof pr) throw await this.uploadSchema(), new Vr({ clientVersion: this.clientVersion, cause: r });
        if (r) throw r;
      }
      convertProtocolErrorsToClientError(r) {
        return r.length === 1 ? $r(r[0], this.config.clientVersion, this.config.activeProvider) : new j(JSON.stringify(r), { clientVersion: this.config.clientVersion });
      }
      applyPendingMigrations() {
        throw new Error("Method not implemented.");
      }
    };
    function Ol(e) {
      if ((e == null ? void 0 : e.kind) === "itx") return e.options.id;
    }
    var vo = k(require("os"));
    var Dl = k(require("path"));
    var xo = Symbol("PrismaLibraryEngineCache");
    function mf() {
      let e = globalThis;
      return e[xo] === void 0 && (e[xo] = {}), e[xo];
    }
    function ff(e) {
      let r = mf();
      if (r[e] !== void 0) return r[e];
      let t = Dl.default.toNamespacedPath(e), n = { exports: {} }, i = 0;
      return process.platform !== "win32" && (i = vo.default.constants.dlopen.RTLD_LAZY | vo.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, t, i), r[e] = n.exports, n.exports;
    }
    var _l = { async loadLibrary(e) {
      let r = await pi(), t = await hl("library", e);
      try {
        return e.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: true }, () => ff(t));
      } catch (n) {
        let i = Pi({ e: n, platformInfo: r, id: t });
        throw new T(i, e.clientVersion);
      }
    } };
    var Po;
    var Nl = { async loadLibrary(e) {
      let { clientVersion: r, adapter: t, engineWasm: n } = e;
      if (t === void 0) throw new T(`The \`adapter\` option for \`PrismaClient\` is required in this context (${qn().prettyName})`, r);
      if (n === void 0) throw new T("WASM engine was unexpectedly `undefined`", r);
      Po === void 0 && (Po = (async () => {
        let o = await n.getRuntime(), s = await n.getQueryEngineWasmModule();
        if (s == null) throw new T("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", r);
        let a = { "./query_engine_bg.js": o }, l = new WebAssembly.Instance(s, a), u = l.exports.__wbindgen_start;
        return o.__wbg_set_wasm(l.exports), u(), o.QueryEngine;
      })());
      let i = await Po;
      return { debugPanic() {
        return Promise.reject("{}");
      }, dmmf() {
        return Promise.resolve("{}");
      }, version() {
        return { commit: "unknown", version: "unknown" };
      }, QueryEngine: i };
    } };
    var gf = "P2036";
    var Ce = N("prisma:client:libraryEngine");
    function hf(e) {
      return e.item_type === "query" && "query" in e;
    }
    function yf(e) {
      return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
    }
    var Fl = [...oi, "native"];
    var bf = 0xffffffffffffffffn;
    var To = 1n;
    function Ef() {
      let e = To++;
      return To > bf && (To = 1n), e;
    }
    var Qr = class {
      name = "LibraryEngine";
      engine;
      libraryInstantiationPromise;
      libraryStartingPromise;
      libraryStoppingPromise;
      libraryStarted;
      executingQueryPromise;
      config;
      QueryEngineConstructor;
      libraryLoader;
      library;
      logEmitter;
      libQueryEnginePath;
      binaryTarget;
      datasourceOverrides;
      datamodel;
      logQueries;
      logLevel;
      lastQuery;
      loggerRustPanic;
      tracingHelper;
      adapterPromise;
      versionInfo;
      constructor(r, t) {
        var _a14;
        this.libraryLoader = t ?? _l, r.engineWasm !== void 0 && (this.libraryLoader = t ?? Nl), this.config = r, this.libraryStarted = false, this.logQueries = r.logQueries ?? false, this.logLevel = r.logLevel ?? "error", this.logEmitter = r.logEmitter, this.datamodel = r.inlineSchema, this.tracingHelper = r.tracingHelper, r.enableDebugLogs && (this.logLevel = "debug");
        let n = Object.keys(r.overrideDatasources)[0], i = (_a14 = r.overrideDatasources[n]) == null ? void 0 : _a14.url;
        n !== void 0 && i !== void 0 && (this.datasourceOverrides = { [n]: i }), this.libraryInstantiationPromise = this.instantiateLibrary();
      }
      wrapEngine(r) {
        var _a14, _b12, _c6;
        return { applyPendingMigrations: (_a14 = r.applyPendingMigrations) == null ? void 0 : _a14.bind(r), commitTransaction: this.withRequestId(r.commitTransaction.bind(r)), connect: this.withRequestId(r.connect.bind(r)), disconnect: this.withRequestId(r.disconnect.bind(r)), metrics: (_b12 = r.metrics) == null ? void 0 : _b12.bind(r), query: this.withRequestId(r.query.bind(r)), rollbackTransaction: this.withRequestId(r.rollbackTransaction.bind(r)), sdlSchema: (_c6 = r.sdlSchema) == null ? void 0 : _c6.bind(r), startTransaction: this.withRequestId(r.startTransaction.bind(r)), trace: r.trace.bind(r) };
      }
      withRequestId(r) {
        return async (...t) => {
          var _a14;
          let n = Ef().toString();
          try {
            return await r(...t, n);
          } finally {
            if (this.tracingHelper.isEnabled()) {
              let i = await ((_a14 = this.engine) == null ? void 0 : _a14.trace(n));
              if (i) {
                let o = JSON.parse(i);
                this.tracingHelper.dispatchEngineSpans(o.spans);
              }
            }
          }
        };
      }
      async applyPendingMigrations() {
        throw new Error("Cannot call this method from this type of engine instance");
      }
      async transaction(r, t, n) {
        var _a14, _b12, _c6;
        await this.start();
        let i = await this.adapterPromise, o = JSON.stringify(t), s;
        if (r === "start") {
          let l = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel });
          s = await ((_a14 = this.engine) == null ? void 0 : _a14.startTransaction(l, o));
        } else r === "commit" ? s = await ((_b12 = this.engine) == null ? void 0 : _b12.commitTransaction(n.id, o)) : r === "rollback" && (s = await ((_c6 = this.engine) == null ? void 0 : _c6.rollbackTransaction(n.id, o)));
        let a = this.parseEngineResponse(s);
        if (wf(a)) {
          let l = this.getExternalAdapterError(a, i == null ? void 0 : i.errorRegistry);
          throw l ? l.error : new z4(a.message, { code: a.error_code, clientVersion: this.config.clientVersion, meta: a.meta });
        } else if (typeof a.message == "string") throw new j(a.message, { clientVersion: this.config.clientVersion });
        return a;
      }
      async instantiateLibrary() {
        if (Ce("internalSetup"), this.libraryInstantiationPromise) return this.libraryInstantiationPromise;
        ii(), this.binaryTarget = await this.getCurrentBinaryTarget(), await this.tracingHelper.runInChildSpan("load_engine", () => this.loadEngine()), this.version();
      }
      async getCurrentBinaryTarget() {
        {
          if (this.binaryTarget) return this.binaryTarget;
          let r = await this.tracingHelper.runInChildSpan("detect_platform", () => ir());
          if (!Fl.includes(r)) throw new T(`Unknown ${ce("PRISMA_QUERY_ENGINE_LIBRARY")} ${ce(W(r))}. Possible binaryTargets: ${qe(Fl.join(", "))} or a path to the query engine library.
You may have to run ${qe("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
          return r;
        }
      }
      parseEngineResponse(r) {
        if (!r) throw new j("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
        try {
          return JSON.parse(r);
        } catch {
          throw new j("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
        }
      }
      async loadEngine() {
        var _a14, _b12;
        if (!this.engine) {
          this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
          try {
            let r = new WeakRef(this);
            this.adapterPromise || (this.adapterPromise = (_b12 = (_a14 = this.config.adapter) == null ? void 0 : _a14.connect()) == null ? void 0 : _b12.then(po));
            let t = await this.adapterPromise;
            t && Ce("Using driver adapter: %O", t), this.engine = this.wrapEngine(new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process.env, logQueries: this.config.logQueries ?? false, ignoreEnvVarErrors: true, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json", enableTracing: this.tracingHelper.isEnabled() }, (n) => {
              var _a15;
              (_a15 = r.deref()) == null ? void 0 : _a15.logger(n);
            }, t));
          } catch (r) {
            let t = r, n = this.parseInitError(t.message);
            throw typeof n == "string" ? t : new T(n.message, this.config.clientVersion, n.error_code);
          }
        }
      }
      logger(r) {
        let t = this.parseEngineResponse(r);
        t && (t.level = (t == null ? void 0 : t.level.toLowerCase()) ?? "unknown", hf(t) ? this.logEmitter.emit("query", { timestamp: /* @__PURE__ */ new Date(), query: t.query, params: t.params, duration: Number(t.duration_ms), target: t.module_path }) : yf(t) ? this.loggerRustPanic = new le(So(this, `${t.message}: ${t.reason} in ${t.file}:${t.line}:${t.column}`), this.config.clientVersion) : this.logEmitter.emit(t.level, { timestamp: /* @__PURE__ */ new Date(), message: t.message, target: t.module_path }));
      }
      parseInitError(r) {
        try {
          return JSON.parse(r);
        } catch {
        }
        return r;
      }
      parseRequestError(r) {
        try {
          return JSON.parse(r);
        } catch {
        }
        return r;
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
      }
      async start() {
        if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise) return Ce(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
        if (this.libraryStarted) return;
        let r = async () => {
          var _a14;
          Ce("library starting");
          try {
            let t = { traceparent: this.tracingHelper.getTraceParent() };
            await ((_a14 = this.engine) == null ? void 0 : _a14.connect(JSON.stringify(t))), this.libraryStarted = true, Ce("library started");
          } catch (t) {
            let n = this.parseInitError(t.message);
            throw typeof n == "string" ? t : new T(n.message, this.config.clientVersion, n.error_code);
          } finally {
            this.libraryStartingPromise = void 0;
          }
        };
        return this.libraryStartingPromise = this.tracingHelper.runInChildSpan("connect", r), this.libraryStartingPromise;
      }
      async stop() {
        if (await this.libraryInstantiationPromise, await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise) return Ce("library is already stopping"), this.libraryStoppingPromise;
        if (!this.libraryStarted) return;
        let r = async () => {
          var _a14, _b12;
          await new Promise((n) => setTimeout(n, 5)), Ce("library stopping");
          let t = { traceparent: this.tracingHelper.getTraceParent() };
          await ((_a14 = this.engine) == null ? void 0 : _a14.disconnect(JSON.stringify(t))), this.libraryStarted = false, this.libraryStoppingPromise = void 0, await ((_b12 = await this.adapterPromise) == null ? void 0 : _b12.dispose()), this.adapterPromise = void 0, Ce("library stopped");
        };
        return this.libraryStoppingPromise = this.tracingHelper.runInChildSpan("disconnect", r), this.libraryStoppingPromise;
      }
      version() {
        var _a14, _b12;
        return this.versionInfo = (_a14 = this.library) == null ? void 0 : _a14.version(), ((_b12 = this.versionInfo) == null ? void 0 : _b12.version) ?? "unknown";
      }
      debugPanic(r) {
        var _a14;
        return (_a14 = this.library) == null ? void 0 : _a14.debugPanic(r);
      }
      async request(r, { traceparent: t, interactiveTransaction: n }) {
        var _a14, _b12;
        Ce(`sending request, this.libraryStarted: ${this.libraryStarted}`);
        let i = JSON.stringify({ traceparent: t }), o = JSON.stringify(r);
        try {
          await this.start();
          let s = await this.adapterPromise;
          this.executingQueryPromise = (_a14 = this.engine) == null ? void 0 : _a14.query(o, i, n == null ? void 0 : n.id), this.lastQuery = o;
          let a = this.parseEngineResponse(await this.executingQueryPromise);
          if (a.errors) throw a.errors.length === 1 ? this.buildQueryError(a.errors[0], s == null ? void 0 : s.errorRegistry) : new j(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
          if (this.loggerRustPanic) throw this.loggerRustPanic;
          return { data: a };
        } catch (s) {
          if (s instanceof T) throw s;
          if (s.code === "GenericFailure" && ((_b12 = s.message) == null ? void 0 : _b12.startsWith("PANIC:"))) throw new le(So(this, s.message), this.config.clientVersion);
          let a = this.parseRequestError(s.message);
          throw typeof a == "string" ? s : new j(`${a.message}
${a.backtrace}`, { clientVersion: this.config.clientVersion });
        }
      }
      async requestBatch(r, { transaction: t, traceparent: n }) {
        Ce("requestBatch");
        let i = Mr(r, t);
        await this.start();
        let o = await this.adapterPromise;
        this.lastQuery = JSON.stringify(i), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: n }), Ol(t));
        let s = await this.executingQueryPromise, a = this.parseEngineResponse(s);
        if (a.errors) throw a.errors.length === 1 ? this.buildQueryError(a.errors[0], o == null ? void 0 : o.errorRegistry) : new j(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
        let { batchResult: l, errors: u } = a;
        if (Array.isArray(l)) return l.map((c) => c.errors && c.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(c.errors[0], o == null ? void 0 : o.errorRegistry) : { data: c });
        throw u && u.length === 1 ? new Error(u[0].error) : new Error(JSON.stringify(a));
      }
      buildQueryError(r, t) {
        if (r.user_facing_error.is_panic) return new le(So(this, r.user_facing_error.message), this.config.clientVersion);
        let n = this.getExternalAdapterError(r.user_facing_error, t);
        return n ? n.error : $r(r, this.config.clientVersion, this.config.activeProvider);
      }
      getExternalAdapterError(r, t) {
        var _a14;
        if (r.error_code === gf && t) {
          let n = (_a14 = r.meta) == null ? void 0 : _a14.id;
          rn(typeof n == "number", "Malformed external JS error received from the engine");
          let i = t.consumeError(n);
          return rn(i, "External error with reported id was not registered"), i;
        }
      }
      async metrics(r) {
        await this.start();
        let t = await this.engine.metrics(JSON.stringify(r));
        return r.format === "prometheus" ? t : this.parseEngineResponse(t);
      }
    };
    function wf(e) {
      return typeof e == "object" && e !== null && e.error_code !== void 0;
    }
    function So(e, r) {
      var _a14;
      return vl({ binaryTarget: e.binaryTarget, title: r, version: e.config.clientVersion, engineVersion: (_a14 = e.versionInfo) == null ? void 0 : _a14.commit, database: e.config.activeProvider, query: e.lastQuery });
    }
    function Ll({ copyEngine: e = true }, r) {
      let t;
      try {
        t = jr({ inlineDatasources: r.inlineDatasources, overrideDatasources: r.overrideDatasources, env: { ...r.env, ...process.env }, clientVersion: r.clientVersion });
      } catch {
      }
      let n = !!((t == null ? void 0 : t.startsWith("prisma://")) || Si(t));
      e && n && ot("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
      let i = Er(r.generator), o = n || !e, s = !!r.adapter, a = i === "library", l = i === "binary", u = i === "client";
      if (o && s || s && false) {
        let c;
        throw e ? (t == null ? void 0 : t.startsWith("prisma://")) ? c = ["Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.", "Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor."] : c = ["Prisma Client was configured to use both the `adapter` and Accelerate, please chose one."] : c = ["Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.", "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."], new Z(c.join(`
`), { clientVersion: r.clientVersion });
      }
      return o ? new Mt(r) : a ? new Qr(r) : new Qr(r);
    }
    function Wn({ generator: e }) {
      return (e == null ? void 0 : e.previewFeatures) ?? [];
    }
    var Ml = (e) => ({ command: e });
    var $l = (e) => e.strings.reduce((r, t, n) => `${r}@P${n}${t}`);
    function Gr(e) {
      try {
        return ql(e, "fast");
      } catch {
        return ql(e, "slow");
      }
    }
    function ql(e, r) {
      return JSON.stringify(e.map((t) => Vl(t, r)));
    }
    function Vl(e, r) {
      if (Array.isArray(e)) return e.map((t) => Vl(t, r));
      if (typeof e == "bigint") return { prisma__type: "bigint", prisma__value: e.toString() };
      if (Sr(e)) return { prisma__type: "date", prisma__value: e.toJSON() };
      if (ve.isDecimal(e)) return { prisma__type: "decimal", prisma__value: e.toJSON() };
      if (Buffer.isBuffer(e)) return { prisma__type: "bytes", prisma__value: e.toString("base64") };
      if (xf(e)) return { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") };
      if (ArrayBuffer.isView(e)) {
        let { buffer: t, byteOffset: n, byteLength: i } = e;
        return { prisma__type: "bytes", prisma__value: Buffer.from(t, n, i).toString("base64") };
      }
      return typeof e == "object" && r === "slow" ? Bl(e) : e;
    }
    function xf(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    function Bl(e) {
      if (typeof e != "object" || e === null) return e;
      if (typeof e.toJSON == "function") return e.toJSON();
      if (Array.isArray(e)) return e.map(jl);
      let r = {};
      for (let t of Object.keys(e)) r[t] = jl(e[t]);
      return r;
    }
    function jl(e) {
      return typeof e == "bigint" ? e.toString() : Bl(e);
    }
    var vf = /^(\s*alter\s)/i;
    var Ul = N("prisma:client");
    function Ro(e, r, t, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && t.length > 0 && vf.exec(r)) throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    var Co = ({ clientMethod: e, activeProvider: r }) => (t) => {
      let n = "", i;
      if (Nn(t)) n = t.sql, i = { values: Gr(t.values), __prismaRawParameters__: true };
      else if (Array.isArray(t)) {
        let [o, ...s] = t;
        n = o, i = { values: Gr(s || []), __prismaRawParameters__: true };
      } else switch (r) {
        case "sqlite":
        case "mysql": {
          n = t.sql, i = { values: Gr(t.values), __prismaRawParameters__: true };
          break;
        }
        case "cockroachdb":
        case "postgresql":
        case "postgres": {
          n = t.text, i = { values: Gr(t.values), __prismaRawParameters__: true };
          break;
        }
        case "sqlserver": {
          n = $l(t), i = { values: Gr(t.values), __prismaRawParameters__: true };
          break;
        }
        default:
          throw new Error(`The ${r} provider does not support ${e}`);
      }
      return (i == null ? void 0 : i.values) ? Ul(`prisma.${e}(${n}, ${i.values})`) : Ul(`prisma.${e}(${n})`), { query: n, parameters: i };
    };
    var Ql = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [r, ...t] = e;
      return new oe(r, t);
    } };
    var Gl = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    function Ao(e) {
      return function(t, n) {
        let i, o = (s = e) => {
          try {
            return s === void 0 || (s == null ? void 0 : s.kind) === "itx" ? i ??= Wl(t(s)) : Wl(t(s));
          } catch (a) {
            return Promise.reject(a);
          }
        };
        return { get spec() {
          return n;
        }, then(s, a) {
          return o().then(s, a);
        }, catch(s) {
          return o().catch(s);
        }, finally(s) {
          return o().finally(s);
        }, requestTransaction(s) {
          let a = o(s);
          return a.requestTransaction ? a.requestTransaction(s) : a;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    function Wl(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    var Pf = bi.split(".")[0];
    var Tf = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, dispatchEngineSpans() {
    }, getActiveContext() {
    }, runInChildSpan(e, r) {
      return r();
    } };
    var Io = class {
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(r) {
        return this.getGlobalTracingHelper().getTraceParent(r);
      }
      dispatchEngineSpans(r) {
        return this.getGlobalTracingHelper().dispatchEngineSpans(r);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(r, t) {
        return this.getGlobalTracingHelper().runInChildSpan(r, t);
      }
      getGlobalTracingHelper() {
        let r = globalThis[`V${Pf}_PRISMA_INSTRUMENTATION`], t = globalThis.PRISMA_INSTRUMENTATION;
        return (r == null ? void 0 : r.helper) ?? (t == null ? void 0 : t.helper) ?? Tf;
      }
    };
    function Jl() {
      return new Io();
    }
    function Hl(e, r = () => {
    }) {
      let t, n = new Promise((i) => t = i);
      return { then(i) {
        return --e === 0 && t(r()), i == null ? void 0 : i(n);
      } };
    }
    function Kl(e) {
      return typeof e == "string" ? e : e.reduce((r, t) => {
        let n = typeof t == "string" ? t : t.level;
        return n === "query" ? r : r && (t === "info" || r === "info") ? "info" : n;
      }, void 0);
    }
    var Jn = class {
      _middlewares = [];
      use(r) {
        this._middlewares.push(r);
      }
      get(r) {
        return this._middlewares[r];
      }
      has(r) {
        return !!this._middlewares[r];
      }
      length() {
        return this._middlewares.length;
      }
    };
    var zl = k(ki());
    function Hn(e) {
      return typeof e.batchRequestIdx == "number";
    }
    function Yl(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
      let r = [];
      return e.modelName && r.push(e.modelName), e.query.arguments && r.push(ko(e.query.arguments)), r.push(ko(e.query.selection)), r.join("");
    }
    function ko(e) {
      return `(${Object.keys(e).sort().map((t) => {
        let n = e[t];
        return typeof n == "object" && n !== null ? `(${t} ${ko(n)})` : t;
      }).join(" ")})`;
    }
    var Sf = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateManyAndReturn: true, updateOne: true, upsertOne: true };
    function Oo(e) {
      return Sf[e];
    }
    var Kn = class {
      constructor(r) {
        this.options = r;
        this.batches = {};
      }
      batches;
      tickActive = false;
      request(r) {
        let t = this.options.batchBy(r);
        return t ? (this.batches[t] || (this.batches[t] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[t].push({ request: r, resolve: n, reject: i });
        })) : this.options.singleLoader(r);
      }
      dispatchBatches() {
        for (let r in this.batches) {
          let t = this.batches[r];
          delete this.batches[r], t.length === 1 ? this.options.singleLoader(t[0].request).then((n) => {
            n instanceof Error ? t[0].reject(n) : t[0].resolve(n);
          }).catch((n) => {
            t[0].reject(n);
          }) : (t.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(t.map((n) => n.request)).then((n) => {
            if (n instanceof Error) for (let i = 0; i < t.length; i++) t[i].reject(n);
            else for (let i = 0; i < t.length; i++) {
              let o = n[i];
              o instanceof Error ? t[i].reject(o) : t[i].resolve(o);
            }
          }).catch((n) => {
            for (let i = 0; i < t.length; i++) t[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    function mr(e, r) {
      if (r === null) return r;
      switch (e) {
        case "bigint":
          return BigInt(r);
        case "bytes": {
          let { buffer: t, byteOffset: n, byteLength: i } = Buffer.from(r, "base64");
          return new Uint8Array(t, n, i);
        }
        case "decimal":
          return new ve(r);
        case "datetime":
        case "date":
          return new Date(r);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${r}Z`);
        case "bigint-array":
          return r.map((t) => mr("bigint", t));
        case "bytes-array":
          return r.map((t) => mr("bytes", t));
        case "decimal-array":
          return r.map((t) => mr("decimal", t));
        case "datetime-array":
          return r.map((t) => mr("datetime", t));
        case "date-array":
          return r.map((t) => mr("date", t));
        case "time-array":
          return r.map((t) => mr("time", t));
        default:
          return r;
      }
    }
    function Yn(e) {
      let r = [], t = Rf(e);
      for (let n = 0; n < e.rows.length; n++) {
        let i = e.rows[n], o = { ...t };
        for (let s = 0; s < i.length; s++) o[e.columns[s]] = mr(e.types[s], i[s]);
        r.push(o);
      }
      return r;
    }
    function Rf(e) {
      let r = {};
      for (let t = 0; t < e.columns.length; t++) r[e.columns[t]] = null;
      return r;
    }
    var Cf = N("prisma:client:request_handler");
    var zn = class {
      client;
      dataloader;
      logEmitter;
      constructor(r, t) {
        this.logEmitter = t, this.client = r, this.dataloader = new Kn({ batchLoader: il(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p) => p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((p) => Oo(p.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: Af(o), containsWrite: u, customDataProxyFetch: i })).map((p, d) => {
            if (p instanceof Error) return p;
            try {
              return this.mapQueryEngineResult(n[d], p);
            } catch (f) {
              return f;
            }
          });
        }), singleLoader: async (n) => {
          var _a14;
          let i = ((_a14 = n.transaction) == null ? void 0 : _a14.kind) === "itx" ? Zl(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: Oo(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, batchBy: (n) => {
          var _a14;
          return ((_a14 = n.transaction) == null ? void 0 : _a14.id) ? `transaction-${n.transaction.id}` : Yl(n.protocolQuery);
        }, batchOrder(n, i) {
          var _a14, _b12;
          return ((_a14 = n.transaction) == null ? void 0 : _a14.kind) === "batch" && ((_b12 = i.transaction) == null ? void 0 : _b12.kind) === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      async request(r) {
        try {
          return await this.dataloader.request(r);
        } catch (t) {
          let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = r;
          this.handleAndLogRequestError({ error: t, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: r.globalOmit });
        }
      }
      mapQueryEngineResult({ dataPath: r, unpacker: t }, n) {
        let i = n == null ? void 0 : n.data, o = this.unpack(i, r, t);
        return process.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o;
      }
      handleAndLogRequestError(r) {
        try {
          this.handleRequestError(r);
        } catch (t) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: t.message, target: r.clientMethod, timestamp: /* @__PURE__ */ new Date() }), t;
        }
      }
      handleRequestError({ error: r, clientMethod: t, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
        if (Cf(r), If(r, i)) throw r;
        if (r instanceof z4 && kf(r)) {
          let u = Xl(r.meta);
          An({ args: o, errors: [u], callsite: n, errorFormat: this.client._errorFormat, originalMethod: t, clientVersion: this.client._clientVersion, globalOmit: a });
        }
        let l = r.message;
        if (n && (l = bn({ callsite: n, originalMethod: t, isPanic: r.isPanic, showColors: this.client._errorFormat === "pretty", message: l })), l = this.sanitizeMessage(l), r.code) {
          let u = s ? { modelName: s, ...r.meta } : r.meta;
          throw new z4(l, { code: r.code, clientVersion: this.client._clientVersion, meta: u, batchRequestIdx: r.batchRequestIdx });
        } else {
          if (r.isPanic) throw new le(l, this.client._clientVersion);
          if (r instanceof j) throw new j(l, { clientVersion: this.client._clientVersion, batchRequestIdx: r.batchRequestIdx });
          if (r instanceof T) throw new T(l, this.client._clientVersion);
          if (r instanceof le) throw new le(l, this.client._clientVersion);
        }
        throw r.clientVersion = this.client._clientVersion, r;
      }
      sanitizeMessage(r) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, zl.default)(r) : r;
      }
      unpack(r, t, n) {
        if (!r || (r.data && (r = r.data), !r)) return r;
        let i = Object.keys(r)[0], o = Object.values(r)[0], s = t.filter((u) => u !== "select" && u !== "include"), a = io(o, s), l = i === "queryRaw" ? Yn(a) : Tr(a);
        return n ? n(l) : l;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function Af(e) {
      if (e) {
        if (e.kind === "batch") return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx") return { kind: "itx", options: Zl(e) };
        _e(e, "Unknown transaction kind");
      }
    }
    function Zl(e) {
      return { id: e.id, payload: e.payload };
    }
    function If(e, r) {
      return Hn(e) && (r == null ? void 0 : r.kind) === "batch" && e.batchRequestIdx !== r.index;
    }
    function kf(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    function Xl(e) {
      if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(Xl) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...r] = e.selectionPath;
        return { ...e, selectionPath: r };
      }
      return e;
    }
    var eu = "6.7.0";
    var ru = eu;
    var su = k(Gi());
    var D = class extends Error {
      constructor(r) {
        super(r + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    x(D, "PrismaClientConstructorValidationError");
    var tu = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"];
    var nu = ["pretty", "colorless", "minimal"];
    var iu = ["info", "query", "warn", "error"];
    var Df = { datasources: (e, { datasourceNames: r }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e)) throw new D(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [t, n] of Object.entries(e)) {
          if (!r.includes(t)) {
            let i = Wr(t, r) || ` Available datasources: ${r.join(", ")}`;
            throw new D(`Unknown datasource ${t} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n)) throw new D(`Invalid value ${JSON.stringify(e)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object") for (let [i, o] of Object.entries(n)) {
            if (i !== "url") throw new D(`Invalid value ${JSON.stringify(e)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            if (typeof o != "string") throw new D(`Invalid value ${JSON.stringify(o)} for datasource "${t}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          }
        }
      }
    }, adapter: (e, r) => {
      if (!e && Er(r.generator) === "client") throw new D('Using engine type "client" requires a driver adapter to be provided to PrismaClient constructor.');
      if (e === null) return;
      if (e === void 0) throw new D('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
      if (!Wn(r).includes("driverAdapters")) throw new D('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
      if (Er(r.generator) === "binary") throw new D('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
    }, datasourceUrl: (e) => {
      if (typeof e < "u" && typeof e != "string") throw new D(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, errorFormat: (e) => {
      if (e) {
        if (typeof e != "string") throw new D(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!nu.includes(e)) {
          let r = Wr(e, nu);
          throw new D(`Invalid errorFormat ${e} provided to PrismaClient constructor.${r}`);
        }
      }
    }, log: (e) => {
      if (!e) return;
      if (!Array.isArray(e)) throw new D(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function r(t) {
        if (typeof t == "string" && !iu.includes(t)) {
          let n = Wr(t, iu);
          throw new D(`Invalid log level "${t}" provided to PrismaClient constructor.${n}`);
        }
      }
      for (let t of e) {
        r(t);
        let n = { level: r, emit: (i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = Wr(i, o);
            throw new D(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        } };
        if (t && typeof t == "object") for (let [i, o] of Object.entries(t)) if (n[i]) n[i](o);
        else throw new D(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, transactionOptions: (e) => {
      if (!e) return;
      let r = e.maxWait;
      if (r != null && r <= 0) throw new D(`Invalid value ${r} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
      let t = e.timeout;
      if (t != null && t <= 0) throw new D(`Invalid value ${t} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    }, omit: (e, r) => {
      if (typeof e != "object") throw new D('"omit" option is expected to be an object.');
      if (e === null) throw new D('"omit" option can not be `null`');
      let t = [];
      for (let [n, i] of Object.entries(e)) {
        let o = Nf(n, r.runtimeDataModel);
        if (!o) {
          t.push({ kind: "UnknownModel", modelKey: n });
          continue;
        }
        for (let [s, a] of Object.entries(i)) {
          let l = o.fields.find((u) => u.name === s);
          if (!l) {
            t.push({ kind: "UnknownField", modelKey: n, fieldName: s });
            continue;
          }
          if (l.relationName) {
            t.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
            continue;
          }
          typeof a != "boolean" && t.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
        }
      }
      if (t.length > 0) throw new D(Ff(e, t));
    }, __internal: (e) => {
      if (!e) return;
      let r = ["debug", "engine", "configOverride"];
      if (typeof e != "object") throw new D(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [t] of Object.entries(e)) if (!r.includes(t)) {
        let n = Wr(t, r);
        throw new D(`Invalid property ${JSON.stringify(t)} for "__internal" provided to PrismaClient constructor.${n}`);
      }
    } };
    function au(e, r) {
      for (let [t, n] of Object.entries(e)) {
        if (!tu.includes(t)) {
          let i = Wr(t, tu);
          throw new D(`Unknown property ${t} provided to PrismaClient constructor.${i}`);
        }
        Df[t](n, r);
      }
      if (e.datasourceUrl && e.datasources) throw new D('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    function Wr(e, r) {
      if (r.length === 0 || typeof e != "string") return "";
      let t = _f(e, r);
      return t ? ` Did you mean "${t}"?` : "";
    }
    function _f(e, r) {
      if (r.length === 0) return null;
      let t = r.map((i) => ({ value: i, distance: (0, su.default)(e, i) }));
      t.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = t[0];
      return n.distance < 3 ? n.value : null;
    }
    function Nf(e, r) {
      return ou(r.models, e) ?? ou(r.types, e);
    }
    function ou(e, r) {
      let t = Object.keys(e).find((n) => Ye(n) === r);
      if (t) return e[t];
    }
    function Ff(e, r) {
      var _a14, _b12, _c6, _d5;
      let t = _r(e);
      for (let o of r) switch (o.kind) {
        case "UnknownModel":
          (_a14 = t.arguments.getField(o.modelKey)) == null ? void 0 : _a14.markAsError(), t.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
          break;
        case "UnknownField":
          (_b12 = t.arguments.getDeepField([o.modelKey, o.fieldName])) == null ? void 0 : _b12.markAsError(), t.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
          break;
        case "RelationInOmit":
          (_c6 = t.arguments.getDeepField([o.modelKey, o.fieldName])) == null ? void 0 : _c6.markAsError(), t.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
          break;
        case "InvalidFieldValue":
          (_d5 = t.arguments.getDeepFieldValue([o.modelKey, o.fieldName])) == null ? void 0 : _d5.markAsError(), t.addErrorMessage(() => "Omit field option value must be a boolean.");
          break;
      }
      let { message: n, args: i } = Cn(t, "colorless");
      return `Error validating "omit" option:

${i}

${n}`;
    }
    function lu(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((r, t) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = () => {
          o || (s++, s === e.length && (o = true, i ? t(i) : r(n)));
        }, l = (u) => {
          o || (o = true, t(u));
        };
        for (let u = 0; u < e.length; u++) e[u].then((c) => {
          n[u] = c, a();
        }, (c) => {
          if (!Hn(c)) {
            l(c);
            return;
          }
          c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
        });
      });
    }
    var rr = N("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var Lf = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
    var Mf = Symbol.for("prisma.client.transaction.id");
    var $f = { id: 0, nextId() {
      return ++this.id;
    } };
    function fu(e) {
      class r {
        _originalClient = this;
        _runtimeDataModel;
        _requestHandler;
        _connectionPromise;
        _disconnectionPromise;
        _engineConfig;
        _accelerateEngineConfig;
        _clientVersion;
        _errorFormat;
        _tracingHelper;
        _middlewares = new Jn();
        _previewFeatures;
        _activeProvider;
        _globalOmit;
        _extensions;
        _engine;
        _appliedParent;
        _createPrismaPromise = Ao();
        constructor(n) {
          var _a14, _b12, _c6, _d5, _e3, _f2;
          e = ((_b12 = (_a14 = n == null ? void 0 : n.__internal) == null ? void 0 : _a14.configOverride) == null ? void 0 : _b12.call(_a14, e)) ?? e, ul(e), n && au(n, e);
          let i = new du.EventEmitter().on("error", () => {
          });
          this._extensions = Nr.empty(), this._previewFeatures = Wn(e), this._clientVersion = e.clientVersion ?? ru, this._activeProvider = e.activeProvider, this._globalOmit = n == null ? void 0 : n.omit, this._tracingHelper = Jl();
          let o = e.relativeEnvPaths && { rootEnvPath: e.relativeEnvPaths.rootEnvPath && Zn.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && Zn.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s;
          if (n == null ? void 0 : n.adapter) {
            s = n.adapter;
            let l = e.activeProvider === "postgresql" ? "postgres" : e.activeProvider;
            if (s.provider !== l) throw new T(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`, this._clientVersion);
            if (n.datasources || n.datasourceUrl !== void 0) throw new T("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
          }
          let a = !s && o && it(o, { conflictCheck: "none" }) || ((_c6 = e.injectableEdgeEnv) == null ? void 0 : _c6.call(e));
          try {
            let l = n ?? {}, u = l.__internal ?? {}, c = u.debug === true;
            c && N.enable("prisma:client");
            let p = Zn.default.resolve(e.dirname, e.relativePath);
            mu.default.existsSync(p) || (p = e.dirname), rr("dirname", e.dirname), rr("relativePath", e.relativePath), rr("cwd", p);
            let d = u.engine || {};
            if (l.errorFormat ? this._errorFormat = l.errorFormat : process.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: p, dirname: e.dirname, enableDebugLogs: c, allowTriggerPanic: d.allowTriggerPanic, prismaPath: d.binaryPath ?? void 0, engineEndpoint: d.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && Kl(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((f) => typeof f == "string" ? f === "query" : f.level === "query")), env: (a == null ? void 0 : a.parsed) ?? {}, flags: [], engineWasm: e.engineWasm, compilerWasm: e.compilerWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: cl(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: ((_d5 = l.transactionOptions) == null ? void 0 : _d5.maxWait) ?? 2e3, timeout: ((_e3 = l.transactionOptions) == null ? void 0 : _e3.timeout) ?? 5e3, isolationLevel: (_f2 = l.transactionOptions) == null ? void 0 : _f2.isolationLevel }, logEmitter: i, isBundled: e.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: jr, getBatchRequestPayload: Mr, prismaGraphQLToJSError: $r, PrismaClientUnknownRequestError: j, PrismaClientInitializationError: T, PrismaClientKnownRequestError: z4, debug: N("prisma:client:accelerateEngine"), engineVersion: cu.version, clientVersion: e.clientVersion } }, rr("clientVersion", e.clientVersion), this._engine = Ll(e, this._engineConfig), this._requestHandler = new zn(this, i), l.log) for (let f of l.log) {
              let g = typeof f == "string" ? f : f.emit === "stdout" ? f.level : null;
              g && this.$on(g, (h) => {
                tt.log(`${tt.tags[g] ?? ""}`, h.message || h.query);
              });
            }
          } catch (l) {
            throw l.clientVersion = this._clientVersion, l;
          }
          return this._appliedParent = vt(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, i) {
          return n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i), this;
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            Go();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: Co({ clientMethod: i, activeProvider: a }), callsite: Ze(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = uu(n, i);
              return Ro(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new Z("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (Ro(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb") throw new Z(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: Ml, callsite: Ze(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: Co({ clientMethod: i, activeProvider: a }), callsite: Ze(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) return this.$queryRawInternal(o, "$queryRaw", ...uu(n, i));
            throw new Z("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawTyped(n) {
          return this._createPrismaPromise((i) => {
            if (!this._hasPreviewFlag("typedSql")) throw new Z("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
            return this.$queryRawInternal(i, "$queryRawTyped", n);
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = $f.nextId(), s = Hl(n.length), a = n.map((l, u) => {
            var _a14;
            if ((l == null ? void 0 : l[Symbol.toStringTag]) !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let c = (i == null ? void 0 : i.isolationLevel) ?? this._engineConfig.transactionOptions.isolationLevel, p = { kind: "batch", id: o, index: u, isolationLevel: c, lock: s };
            return ((_a14 = l.requestTransaction) == null ? void 0 : _a14.call(l, p)) ?? l;
          });
          return lu(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
          let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: (i == null ? void 0 : i.maxWait) ?? this._engineConfig.transactionOptions.maxWait, timeout: (i == null ? void 0 : i.timeout) ?? this._engineConfig.transactionOptions.timeout, isolationLevel: (i == null ? void 0 : i.isolationLevel) ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), l;
          try {
            let u = { kind: "itx", ...a };
            l = await n(this._createItxClient(u)), await this._engine.transaction("commit", o, a);
          } catch (u) {
            throw await this._engine.transaction("rollback", o, a).catch(() => {
            }), u;
          }
          return l;
        }
        _createItxClient(n) {
          return he(vt(he(Ha(this), [re("_appliedParent", () => this._appliedParent._createItxClient(n)), re("_createPrismaPromise", () => Ao(n)), re(Mf, () => n.id)])), [Lr(Xa)]);
        }
        $transaction(n, i) {
          var _a14;
          let o;
          typeof n == "function" ? ((_a14 = this._engineConfig.adapter) == null ? void 0 : _a14.adapterName) === "@prisma/adapter-d1" ? o = () => {
            throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
          } : o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i });
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = n.middlewareArgsMapper ?? Lf, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l = async (u) => {
            let c = this._middlewares.get(++a);
            if (c) return this._tracingHelper.runInChildSpan(s.middleware, (I) => c(u, (P) => (I == null ? void 0 : I.end(), l(P))));
            let { runInTransaction: p, args: d, ...f } = u, g = { ...n, ...f };
            d && (g.args = i.middlewareArgsToRequestArgs(d)), n.transaction !== void 0 && p === false && delete g.transaction;
            let h = await nl(this, g);
            return g.model ? Za({ result: h, modelName: g.model, args: g.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : h;
          };
          return this._tracingHelper.runInChildSpan(s.operation, () => new pu.AsyncResource("prisma-client-request").runInAsyncScope(() => l(o)));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: d, customDataProxyFetch: f }) {
          try {
            n = u ? u(n) : n;
            let g = { name: "serialize" }, h = this._tracingHelper.runInChildSpan(g, () => Dn({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
            return N.enabled("prisma:client") && (rr("Prisma Client call:"), rr(`prisma.${i}(${Ma(n)})`), rr("Generated request:"), rr(JSON.stringify(h, null, 2) + `
`)), (c == null ? void 0 : c.kind) === "batch" && await c.lock, this._requestHandler.request({ protocolQuery: h, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p, otelParentCtx: d, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: f });
          } catch (g) {
            throw g.clientVersion = this._clientVersion, g;
          }
        }
        $metrics = new Fr(this);
        _hasPreviewFlag(n) {
          var _a14;
          return !!((_a14 = this._engineConfig.previewFeatures) == null ? void 0 : _a14.includes(n));
        }
        $applyPendingMigrations() {
          return this._engine.applyPendingMigrations();
        }
        $extends = Ka;
      }
      return r;
    }
    function uu(e, r) {
      return qf(e) ? [new oe(e, r), Ql] : [e, Gl];
    }
    function qf(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    var jf = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function gu(e) {
      return new Proxy(e, { get(r, t) {
        if (t in r) return r[t];
        if (!jf.has(t)) throw new TypeError(`Invalid enum value: ${String(t)}`);
      } });
    }
    function hu(e) {
      it(e, { conflictCheck: "warn" });
    }
  }
});

// node_modules/.prisma/client/index.js
var require_client = __commonJS({
  "node_modules/.prisma/client/index.js"(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw2,
      skip: skip2,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2,
      getRuntime: getRuntime2,
      createParam: createParam2
    } = require_library();
    var Prisma = {};
    exports2.Prisma = Prisma;
    exports2.$Enums = {};
    Prisma.prismaVersion = {
      client: "6.7.0",
      engine: "3cff47a7f5d65c3ea74883f1d736e41d68ce91ed"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw2;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    var path = require("path");
    exports2.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports2.Prisma.UserScalarFieldEnum = {
      id: "id",
      uuid: "uuid",
      email: "email",
      passwordHash: "passwordHash",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      name: "name"
    };
    exports2.Prisma.EntriesScalarFieldEnum = {
      id: "id",
      uuid: "uuid",
      value: "value",
      date: "date",
      userId: "userId",
      recurringExpenseId: "recurringExpenseId",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports2.Prisma.ExpenseScalarFieldEnum = {
      id: "id",
      uuid: "uuid",
      title: "title",
      value: "value",
      date: "date",
      categoryId: "categoryId",
      userId: "userId",
      recurringExpenseId: "recurringExpenseId",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports2.Prisma.CategoryScalarFieldEnum = {
      id: "id",
      uuid: "uuid",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      name: "name"
    };
    exports2.Prisma.InstallmentScalarFieldEnum = {
      id: "id",
      uuid: "uuid",
      title: "title",
      expenseId: "expenseId",
      value: "value",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      date: "date"
    };
    exports2.Prisma.RecurringExpenseScalarFieldEnum = {
      id: "id",
      uuid: "uuid",
      userId: "userId",
      title: "title",
      value: "value",
      categoryId: "categoryId",
      nextDueDate: "nextDueDate",
      frequency: "frequency",
      endDate: "endDate",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports2.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports2.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports2.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports2.CategoryType = exports2.$Enums.CategoryType = {
      Alimenta\u00E7\u00E3o: "Alimenta\xE7\xE3o",
      Transporte: "Transporte",
      Entretenimento: "Entretenimento",
      Outros: "Outros",
      Sa\u00FAde: "Sa\xFAde",
      Educa\u00E7\u00E3o: "Educa\xE7\xE3o",
      Compras: "Compras",
      Viagem: "Viagem",
      Investimentos: "Investimentos",
      D\u00EDvidas: "D\xEDvidas"
    };
    exports2.Prisma.ModelName = {
      User: "User",
      Entries: "Entries",
      Expense: "Expense",
      Category: "Category",
      Installment: "Installment",
      RecurringExpense: "RecurringExpense"
    };
    var config = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "/home/gbmacena/Projetos/pessoais/FinancasFaceis/backend/node_modules/@prisma/client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "debian-openssl-3.0.x",
            "native": true
          }
        ],
        "previewFeatures": [],
        "sourceFilePath": "/home/gbmacena/Projetos/pessoais/FinancasFaceis/backend/prisma/schema.prisma"
      },
      "relativeEnvPaths": {
        "rootEnvPath": null,
        "schemaEnvPath": "../../../.env"
      },
      "relativePath": "../../../prisma",
      "clientVersion": "6.7.0",
      "engineVersion": "3cff47a7f5d65c3ea74883f1d736e41d68ce91ed",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "postgresql",
      "postinstall": true,
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": 'generator client {\n  provider = "prisma-client-js"\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\nmodel User {\n  id                Int                @id @default(autoincrement())\n  uuid              String             @unique @default(uuid())\n  email             String             @unique\n  passwordHash      String\n  createdAt         DateTime           @default(now())\n  updatedAt         DateTime           @updatedAt\n  name              String\n  income            Entries[]\n  expenses          Expense[]\n  recurringExpenses RecurringExpense[]\n}\n\nmodel Entries {\n  id                 Int               @id @default(autoincrement())\n  uuid               String            @default(uuid())\n  value              Float\n  date               DateTime\n  userId             Int\n  recurringExpenseId Int?\n  recurringExpense   RecurringExpense? @relation(fields: [recurringExpenseId], references: [id])\n  createdAt          DateTime          @default(now())\n  updatedAt          DateTime          @updatedAt\n  user               User              @relation(fields: [userId], references: [id])\n}\n\nmodel Expense {\n  id                 Int           @id @default(autoincrement())\n  uuid               String        @unique @default(uuid())\n  title              String\n  value              Float\n  date               DateTime\n  categoryId         Int?\n  userId             Int\n  recurringExpenseId Int?\n  createdAt          DateTime      @default(now())\n  updatedAt          DateTime      @updatedAt\n  category           Category?     @relation(fields: [categoryId], references: [id])\n  user               User          @relation(fields: [userId], references: [id])\n  installments       Installment[]\n}\n\nmodel Category {\n  id                Int                @id @default(autoincrement())\n  uuid              String             @default(uuid())\n  createdAt         DateTime           @default(now())\n  updatedAt         DateTime           @updatedAt\n  name              CategoryType       @unique\n  expenses          Expense[]\n  recurringExpenses RecurringExpense[]\n}\n\nmodel Installment {\n  id        Int      @id @default(autoincrement())\n  uuid      String   @default(uuid())\n  title     String\n  expenseId Int\n  value     Float\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  date      DateTime\n  expense   Expense  @relation(fields: [expenseId], references: [id], onDelete: Cascade)\n}\n\nmodel RecurringExpense {\n  id          Int       @id @default(autoincrement())\n  uuid        String    @default(uuid())\n  userId      Int\n  title       String\n  value       Float\n  categoryId  Int?\n  nextDueDate DateTime\n  frequency   String\n  endDate     DateTime?\n  entries     Entries[]\n  createdAt   DateTime  @default(now())\n  updatedAt   DateTime  @updatedAt\n  category    Category? @relation(fields: [categoryId], references: [id])\n  user        User      @relation(fields: [userId], references: [id])\n}\n\nenum CategoryType {\n  Alimenta\xE7\xE3o\n  Transporte\n  Entretenimento\n  Outros\n  Sa\xFAde\n  Educa\xE7\xE3o\n  Compras\n  Viagem\n  Investimentos\n  D\xEDvidas\n}\n',
      "inlineSchemaHash": "1145556dc46afc7e790b2f078fc4b3d6a7e8ec1ee6be39352a905c570cf8fb4a",
      "copyEngine": true
    };
    var fs = require("fs");
    config.dirname = __dirname;
    if (!fs.existsSync(path.join(__dirname, "schema.prisma"))) {
      const alternativePaths = [
        "node_modules/.prisma/client",
        ".prisma/client"
      ];
      const alternativePath = alternativePaths.find((altPath) => {
        return fs.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
      }) ?? alternativePaths[0];
      config.dirname = path.join(process.cwd(), alternativePath);
      config.isBundled = true;
    }
    config.runtimeDataModel = JSON.parse('{"models":{"User":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"passwordHash","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"income","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Entries","nativeType":null,"relationName":"EntriesToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"expenses","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Expense","nativeType":null,"relationName":"ExpenseToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"recurringExpenses","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"RecurringExpense","nativeType":null,"relationName":"RecurringExpenseToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Entries":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"value","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"date","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"recurringExpenseId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"recurringExpense","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"RecurringExpense","nativeType":null,"relationName":"EntriesToRecurringExpense","relationFromFields":["recurringExpenseId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"EntriesToUser","relationFromFields":["userId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Expense":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"value","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"date","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"categoryId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"recurringExpenseId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true},{"name":"category","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Category","nativeType":null,"relationName":"CategoryToExpense","relationFromFields":["categoryId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"ExpenseToUser","relationFromFields":["userId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"installments","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Installment","nativeType":null,"relationName":"ExpenseToInstallment","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Category":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true},{"name":"name","kind":"enum","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"CategoryType","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"expenses","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Expense","nativeType":null,"relationName":"CategoryToExpense","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"recurringExpenses","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"RecurringExpense","nativeType":null,"relationName":"CategoryToRecurringExpense","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Installment":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"expenseId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"value","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true},{"name":"date","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"expense","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Expense","nativeType":null,"relationName":"ExpenseToInstallment","relationFromFields":["expenseId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"RecurringExpense":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"uuid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","nativeType":null,"default":{"name":"uuid","args":[4]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"value","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"categoryId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"nextDueDate","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"frequency","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"endDate","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"entries","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Entries","nativeType":null,"relationName":"EntriesToRecurringExpense","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true},{"name":"category","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Category","nativeType":null,"relationName":"CategoryToRecurringExpense","relationFromFields":["categoryId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"RecurringExpenseToUser","relationFromFields":["userId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{"CategoryType":{"values":[{"name":"Alimenta\xE7\xE3o","dbName":null},{"name":"Transporte","dbName":null},{"name":"Entretenimento","dbName":null},{"name":"Outros","dbName":null},{"name":"Sa\xFAde","dbName":null},{"name":"Educa\xE7\xE3o","dbName":null},{"name":"Compras","dbName":null},{"name":"Viagem","dbName":null},{"name":"Investimentos","dbName":null},{"name":"D\xEDvidas","dbName":null}],"dbName":null}},"types":{}}');
    defineDmmfProperty2(exports2.Prisma, config.runtimeDataModel);
    config.engineWasm = void 0;
    config.compilerWasm = void 0;
    var { warnEnvConflicts: warnEnvConflicts2 } = require_library();
    warnEnvConflicts2({
      rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
      schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
    });
    var PrismaClient4 = getPrismaClient2(config);
    exports2.PrismaClient = PrismaClient4;
    Object.assign(exports2, Prisma);
    path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
    path.join(process.cwd(), "node_modules/.prisma/client/libquery_engine-debian-openssl-3.0.x.so.node");
    path.join(__dirname, "schema.prisma");
    path.join(process.cwd(), "node_modules/.prisma/client/schema.prisma");
  }
});

// node_modules/.prisma/client/default.js
var require_default = __commonJS({
  "node_modules/.prisma/client/default.js"(exports2, module2) {
    module2.exports = { ...require_client() };
  }
});

// node_modules/@prisma/client/default.js
var require_default2 = __commonJS({
  "node_modules/@prisma/client/default.js"(exports2, module2) {
    module2.exports = {
      ...require_default()
    };
  }
});

// src/index.ts
var import_express4 = __toESM(require("express"));
var import_cors = __toESM(require("cors"));

// src/routes/authRoutes.ts
var import_express = require("express");

// src/services/authService.ts
var import_bcryptjs = __toESM(require("bcryptjs"));
var import_client = __toESM(require_default2());

// src/utils/customError.ts
var createError = (message, statusCode) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

// src/utils/jwt.utils.ts
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));
var import_dotenv = __toESM(require("dotenv"));
import_dotenv.default.config();
var JWT_SECRET = process.env.JWT_SECRET;
var JWT_EXPIRATION = "2h";
var generateToken = (payload) => {
  return import_jsonwebtoken.default.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

// src/services/authService.ts
var prisma = new import_client.PrismaClient();
var authService = {
  register: async ({ name, email, password }) => {
    try {
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        throw createError("User already registered", 409);
      }
      const hashedPassword = await import_bcryptjs.default.hash(password, 10);
      await prisma.user.create({
        data: { name, email, passwordHash: hashedPassword }
      });
      return { message: "User registered successfully" };
    } catch (error) {
      const customError = error;
      if (customError.statusCode) throw customError;
      throw createError("Internal error while registering user", 500);
    }
  },
  login: async ({ email, password }) => {
    try {
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) throw createError("User not found", 404);
      const isPasswordValid = await import_bcryptjs.default.compare(password, user.passwordHash);
      if (!isPasswordValid) throw createError("Incorrect password", 401);
      const accessToken = generateToken({ id: user.id, email: user.email });
      return {
        message: "Login successful",
        user: {
          uuid: user.uuid,
          name: user.name
        },
        accessToken
      };
    } catch (error) {
      const customError = error;
      if (customError.statusCode) throw customError;
      throw createError("Internal error while logging in", 500);
    }
  }
};
var authService_default = authService;

// src/controllers/authController.ts
var authController = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await authService_default.register({ name, email, password });
      res.status(201).json(user);
    } catch (error) {
      const customError = error;
      res.status(customError.statusCode || 500).json({
        message: customError.message || "Internal server error"
      });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const result = await authService_default.login({ email, password });
      res.json(result);
    } catch (error) {
      const customError = error;
      res.status(customError.statusCode || 500).json({
        message: customError.message || "Internal server error"
      });
    }
  }
};
var authController_default = authController;

// src/middlewares/validate.middleware.ts
var import_zod = require("zod");
var validate = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params
    });
    next();
  } catch (error) {
    if (error instanceof import_zod.ZodError) {
      const firstError = error.errors[0];
      const formattedError = {
        field: firstError.path.join("."),
        message: firstError.message
      };
      res.status(400).json(formattedError);
    } else {
      res.status(500).json({ error: "Erro interno no servidor" });
    }
  }
};

// src/schemas/authSchema.ts
var import_zod2 = require("zod");
var registerSchema = import_zod2.z.object({
  body: import_zod2.z.object({
    name: import_zod2.z.string().min(2, "The name must have at least 2 characters"),
    email: import_zod2.z.string().email("Invalid email"),
    password: import_zod2.z.string().min(6, "The password must have at least 6 characters").regex(/[A-Z]/, "The password must contain at least one uppercase letter").regex(/[\W_]/, "The password must contain at least one special character")
  })
});
var loginSchema = import_zod2.z.object({
  body: import_zod2.z.object({
    email: import_zod2.z.string().email("Invalid email"),
    password: import_zod2.z.string().min(6, "The password must have at least 6 characters").regex(/[A-Z]/, "The password must contain at least one uppercase letter").regex(/[\W_]/, "The password must contain at least one special character")
  })
});
var refreshTokenSchema = import_zod2.z.object({
  body: import_zod2.z.object({
    refreshToken: import_zod2.z.string().nonempty("The refresh token is required")
  })
});

// src/routes/authRoutes.ts
var router = (0, import_express.Router)();
router.post("/register", validate(registerSchema), authController_default.register);
router.post("/login", validate(loginSchema), authController_default.login);
var authRoutes_default = router;

// src/routes/userRoutes.ts
var import_express2 = require("express");

// src/services/userService.ts
var import_client2 = __toESM(require_default2());

// src/dtos/userDto.ts
var userDto = (user) => {
  return {
    uuid: user.uuid,
    name: user.name,
    email: user.email
  };
};

// src/services/userService.ts
var prisma2 = new import_client2.PrismaClient();
var userService = {
  getUser: async (userId) => {
    try {
      const user = await prisma2.user.findUnique({
        where: { uuid: userId },
        include: {
          expenses: true,
          income: true
        }
      });
      if (!user) {
        throw createError("User not found", 404);
      }
      return userDto(user);
    } catch (error) {
      const customError = error;
      if (customError.statusCode) throw customError;
      throw createError("Internal error while fetching user data", 500);
    }
  },
  updateUser: async (userId, data) => {
    try {
      const user = await prisma2.user.findUnique({ where: { uuid: userId } });
      if (!user) throw createError("User not found", 404);
      const updatedUser = await prisma2.user.update({
        where: { uuid: userId },
        data
      });
      return userDto(updatedUser);
    } catch (error) {
      const customError = error;
      if (customError.statusCode) throw customError;
      throw createError("Internal error while updating user data", 500);
    }
  },
  getDashboard: async (userUuid, filters) => {
    try {
      const user = await prisma2.user.findUnique({
        where: { uuid: userUuid }
      });
      if (!user) throw createError("User not found", 404);
      const { month, category, title } = filters;
      const currentMonth = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7);
      const selectedMonth = month || currentMonth;
      const [year, monthStr] = selectedMonth.split("-");
      const yearNum = parseInt(year);
      const monthNum = parseInt(monthStr) - 1;
      const startDate = new Date(Date.UTC(yearNum, monthNum, 1, 0, 0, 0));
      const endDate = new Date(Date.UTC(yearNum, monthNum + 1, 1, 0, 0, 0));
      const [income, expenses] = await Promise.all([
        prisma2.entries.aggregate({
          where: {
            userId: user.id,
            date: {
              gte: startDate,
              lt: endDate
            }
          },
          _sum: { value: true }
        }),
        prisma2.expense.aggregate({
          where: {
            userId: user.id,
            date: {
              gte: startDate,
              lt: endDate
            }
          },
          _sum: { value: true }
        })
      ]);
      const expenseList = await prisma2.expense.findMany({
        where: {
          userId: user.id,
          date: {
            gte: startDate,
            lt: endDate
          },
          category: category ? {
            name: category
          } : void 0,
          title: title ? { contains: title, mode: "insensitive" } : void 0
        },
        select: {
          uuid: true,
          title: true,
          value: true,
          category: {
            select: {
              name: true
            }
          },
          date: true
        }
      });
      const balance = (income._sum.value || 0) - (expenses._sum.value || 0);
      return {
        user: {
          name: user.name,
          balance,
          income: income._sum.value || 0,
          expenses: expenses._sum.value || 0
        },
        expenses: expenseList
      };
    } catch (error) {
      const customError = error;
      if (customError.statusCode) throw customError;
      throw createError("Internal error while fetching dashboard data", 500);
    }
  }
};
var userService_default = userService;

// src/controllers/userController.ts
var userController = {
  getUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await userService_default.getUser(userId);
      res.json(user);
    } catch (error) {
      const customError = error;
      res.status(customError.statusCode || 500).json({
        message: customError.message || "Error fetching user data"
      });
    }
  },
  updateUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const { name, email } = req.body;
      const updateData = {};
      if (name) updateData.name = name;
      if (email) updateData.email = email;
      const updatedUser = await userService_default.updateUser(userId, updateData);
      res.status(200).json({
        message: "User updated successfully",
        user: updatedUser
      });
    } catch (error) {
      const customError = error;
      res.status(customError.statusCode || 500).json({
        message: customError.message || "Error updating user data"
      });
    }
  },
  getDashboard: async (req, res) => {
    try {
      const { userId } = req.params;
      const { month, category, title } = req.query;
      const dashboardData = await userService_default.getDashboard(userId, {
        month,
        category,
        title
      });
      res.status(200).json(dashboardData);
    } catch (error) {
      const customError = error;
      res.status(customError.statusCode || 500).json({
        message: customError.message || "Error fetching dashboard data"
      });
    }
  }
};
var userController_default = userController;

// src/middlewares/auth.middlewares.ts
var import_jsonwebtoken2 = __toESM(require("jsonwebtoken"));
var import_dotenv2 = __toESM(require("dotenv"));
import_dotenv2.default.config();
var JWT_SECRET2 = process.env.JWT_SECRET;
var authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    res.status(401).json({ error: "Token n\xE3o fornecido" });
    return;
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    res.status(401).json({ error: "Token n\xE3o fornecido" });
    return;
  }
  import_jsonwebtoken2.default.verify(token, JWT_SECRET2, (err, decoded) => {
    if (err) {
      res.status(401).json({ error: "Token inv\xE1lido" });
      return;
    }
    const payload = decoded;
    req.userId = payload.id;
    next();
  });
};
var auth_middlewares_default = authMiddleware;

// src/schemas/userSchema.ts
var import_zod3 = require("zod");
var userUuidSchema = import_zod3.z.object({
  params: import_zod3.z.object({
    userId: import_zod3.z.string().uuid("Invalid user UUID format")
  })
});
var updateUserSchema = import_zod3.z.object({
  params: import_zod3.z.object({
    userId: import_zod3.z.string().uuid("Invalid user UUID format")
  }),
  body: import_zod3.z.object({
    name: import_zod3.z.string().optional(),
    email: import_zod3.z.string().email("Invalid email").optional()
  })
});
var dashboardSchema = import_zod3.z.object({
  query: import_zod3.z.object({
    month: import_zod3.z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, "Invalid month format (expected YYYY-MM)").optional(),
    category: import_zod3.z.string().optional(),
    title: import_zod3.z.string().optional()
  })
});

// src/routes/userRoutes.ts
var router2 = (0, import_express2.Router)();
router2.use(auth_middlewares_default);
router2.get("/:userId", validate(userUuidSchema), userController_default.getUser);
router2.put("/:userId", validate(updateUserSchema), userController_default.updateUser);
router2.get("/:userId/dashboard", validate(dashboardSchema), userController_default.getDashboard);
var userRoutes_default = router2;

// src/routes/transactionRoutes.ts
var import_express3 = require("express");

// src/services/transactionService.ts
var import_client3 = __toESM(require_default2());
var prisma3 = new import_client3.PrismaClient();
var transactionService = {
  createEntry: async (userId, data) => {
    try {
      const user = await prisma3.user.findUnique({ where: { uuid: userId } });
      if (!user) {
        throw createError("User not found", 404);
      }
      if (!/^\d{4}-\d{2}-\d{2}$/.test(data.date)) {
        throw createError("Invalid date format. Expected format: YYYY-MM-DD", 400);
      }
      await prisma3.entries.create({
        data: {
          value: data.value,
          date: new Date(data.date),
          userId: user.id
        }
      });
      return { message: "Entry created successfully" };
    } catch (error) {
      const customError = error;
      if (customError.statusCode) {
        throw customError;
      }
      throw createError("Internal error while creating entry", 500);
    }
  },
  createExpense: async (userId, expenseData) => {
    const user = await prisma3.user.findUnique({ where: { uuid: userId } });
    if (!user) throw createError("User not found", 404);
    if (expenseData.categoryId) {
      const categoryExists = await prisma3.category.findUnique({ where: { id: expenseData.categoryId } });
      if (!categoryExists) throw createError("Category not exists", 404);
    }
    if (expenseData.isRecurring) {
      if (!expenseData.endDate) {
        throw createError("End date is required for recurring expenses", 400);
      }
      const startDate = new Date(expenseData.date);
      const endDate = new Date(expenseData.endDate);
      if (startDate > endDate) {
        throw createError("Start date cannot be after end date", 400);
      }
      const recurringExpense = await prisma3.recurringExpense.create({
        data: {
          userId: user.id,
          title: expenseData.title,
          value: expenseData.value,
          categoryId: expenseData.categoryId || null,
          nextDueDate: startDate,
          endDate,
          frequency: "monthly"
        }
      });
      const recurringExpenses = [];
      const startDay = startDate.getUTCDate();
      const startMonth = startDate.getUTCMonth();
      const startYear = startDate.getUTCFullYear();
      let currentMonth = startMonth;
      let currentYear = startYear;
      while (true) {
        const lastDayOfMonth = new Date(Date.UTC(currentYear, currentMonth + 1, 0)).getUTCDate();
        const day = Math.min(startDay, lastDayOfMonth);
        const currentDate = new Date(Date.UTC(currentYear, currentMonth, day));
        if (currentDate > endDate) break;
        recurringExpenses.push({
          title: expenseData.title,
          value: expenseData.value,
          date: currentDate,
          userId: user.id,
          categoryId: expenseData.categoryId || null,
          recurringExpenseId: recurringExpense.id
        });
        currentMonth += 1;
        if (currentMonth > 11) {
          currentMonth = 0;
          currentYear += 1;
        }
      }
      await prisma3.expense.createMany({
        data: recurringExpenses
      });
      return;
    }
    if (expenseData.installments && expenseData.installments > 1) {
      const total = expenseData.installments;
      const installmentValue = expenseData.value / total;
      const installments = [];
      const initial = new Date(expenseData.date);
      const startDay = initial.getUTCDate();
      const startMonth = initial.getUTCMonth();
      const startYear = initial.getUTCFullYear();
      for (let i = 0; i < total; i++) {
        const linearMonth = startMonth + i;
        const year = startYear + Math.floor(linearMonth / 12);
        const month = linearMonth % 12;
        const lastDayOfMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
        const day = Math.min(startDay, lastDayOfMonth);
        const date = new Date(Date.UTC(year, month, day));
        installments.push({
          title: `${expenseData.title} (Parcela ${i + 1}/${total})`,
          value: installmentValue,
          date,
          userId: user.id,
          categoryId: expenseData.categoryId ?? null
        });
      }
      const createdExpenses = [];
      for (const installment of installments) {
        const expense = await prisma3.expense.create({ data: installment });
        createdExpenses.push(expense);
      }
      const installmentRecords = createdExpenses.map((expense, index) => ({
        expenseId: expense.id,
        value: installments[index].value,
        date: installments[index].date,
        title: installments[index].title
      }));
      await prisma3.installment.createMany({ data: installmentRecords });
      return;
    }
    await prisma3.expense.create({
      data: {
        title: expenseData.title,
        value: expenseData.value,
        date: new Date(expenseData.date),
        userId: user.id,
        categoryId: expenseData.categoryId || null
      }
    });
  },
  updateExpense: async (expenseUuid, updateData) => {
    try {
      const expense = await prisma3.expense.findUnique({
        where: { uuid: expenseUuid }
      });
      if (!expense) {
        throw createError("Expense not found", 404);
      }
      if (updateData.categoryId) {
        const categoryExists = await prisma3.category.findUnique({
          where: { id: updateData.categoryId }
        });
        if (!categoryExists) {
          throw createError("Category not exists", 404);
        }
      }
      const updatedExpense = await prisma3.expense.update({
        where: { uuid: expenseUuid },
        data: {
          ...updateData,
          date: updateData.date ? new Date(updateData.date) : void 0
        }
      });
      return updatedExpense;
    } catch (error) {
      const customError = error;
      if (customError.statusCode) {
        throw customError;
      }
      throw createError("Internal error while updating expense", 500);
    }
  },
  deleteExpense: async (expenseUuid) => {
    try {
      const expense = await prisma3.expense.findUnique({
        where: { uuid: expenseUuid }
      });
      if (!expense) {
        throw createError("Expense not found", 404);
      }
      await prisma3.installment.deleteMany({
        where: { expenseId: expense.id }
      });
      await prisma3.expense.delete({
        where: { uuid: expenseUuid }
      });
      const totalIncome = await prisma3.entries.aggregate({
        where: { userId: expense.userId },
        _sum: { value: true }
      });
      const totalExpenses = await prisma3.expense.aggregate({
        where: { userId: expense.userId },
        _sum: { value: true }
      });
      const balance = (totalIncome._sum.value || 0) - (totalExpenses._sum.value || 0);
      return {
        message: "Expense deleted successfully",
        balance
      };
    } catch (error) {
      const customError = error;
      if (customError.statusCode) {
        throw customError;
      }
      throw createError("Internal error while deleting expense", 500);
    }
  }
};
var transactionService_default = transactionService;

// src/controllers/transactionController.ts
var transactionController = {
  createEntry: async (req, res) => {
    try {
      const { userId } = req.params;
      const { value, date } = req.body;
      const entry = await transactionService_default.createEntry(userId, { value, date });
      res.status(201).json(entry);
    } catch (error) {
      const customError = error;
      res.status(customError.statusCode || 500).json({
        message: customError.message || "Error creating entry"
      });
    }
  },
  createExpense: async (req, res) => {
    try {
      const { userId } = req.params;
      const { title, value, date, categoryId, installments, isRecurring, endDate } = req.body;
      await transactionService_default.createExpense(userId, {
        title,
        value,
        date,
        categoryId,
        installments,
        isRecurring,
        endDate
      });
      res.status(201).json({
        message: "Expense created successfully"
      });
    } catch (error) {
      const customError = error;
      res.status(customError.statusCode || 500).json({
        message: customError.message || "Error creating expense"
      });
    }
  },
  updateExpense: async (req, res) => {
    try {
      const { expenseId } = req.params;
      const { title, value, date, categoryId } = req.body;
      const updateData = {};
      if (title) updateData.title = title;
      if (value) updateData.value = value;
      if (date) updateData.date = date;
      if (categoryId) updateData.categoryId = categoryId;
      await transactionService_default.updateExpense(expenseId, updateData);
      res.status(200).json({
        message: "Expense updated successfully"
      });
    } catch (error) {
      const customError = error;
      res.status(customError.statusCode || 500).json({
        message: customError.message || "Error updating expense"
      });
    }
  },
  deleteExpense: async (req, res) => {
    try {
      const { expenseId } = req.params;
      await transactionService_default.deleteExpense(expenseId);
      res.status(200).json({
        message: "Expense deleted successfully"
      });
    } catch (error) {
      const customError = error;
      res.status(customError.statusCode || 500).json({
        message: customError.message || "Error deleting expense"
      });
    }
  }
};
var transactionController_default = transactionController;

// src/schemas/transactionShema.ts
var import_zod4 = require("zod");
var createEntrySchema = import_zod4.z.object({
  params: import_zod4.z.object({
    userId: import_zod4.z.string().uuid("Invalid user UUID format")
  }),
  body: import_zod4.z.object({
    value: import_zod4.z.number().positive("Value must be a positive number"),
    date: import_zod4.z.string().refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
  })
});
var createExpenseSchema = import_zod4.z.object({
  params: import_zod4.z.object({
    userId: import_zod4.z.string().uuid("Invalid user UUID format")
  }),
  body: import_zod4.z.object({
    title: import_zod4.z.string().min(1, "Title is required"),
    value: import_zod4.z.number().positive("Value must be a positive number"),
    date: import_zod4.z.string().refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
    categoryId: import_zod4.z.number().int("Category ID must be an integer"),
    installments: import_zod4.z.number().int("Installments must be an integer").min(1).optional(),
    endDate: import_zod4.z.string().refine((date) => !isNaN(Date.parse(date)), "Invalid date format").optional(),
    isRecurring: import_zod4.z.boolean().optional(),
    recurrenceInterval: import_zod4.z.literal("monthly").optional()
  })
});
var updateExpenseSchema = import_zod4.z.object({
  params: import_zod4.z.object({
    expenseId: import_zod4.z.string().uuid("Invalid expense UUID format")
  }),
  body: import_zod4.z.object({
    title: import_zod4.z.string().optional(),
    value: import_zod4.z.number().positive("Value must be a positive number").optional(),
    date: import_zod4.z.string().refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
    categoryId: import_zod4.z.number().int("Category ID must be an integer").optional()
  })
});

// src/routes/transactionRoutes.ts
var router3 = (0, import_express3.Router)();
router3.use(auth_middlewares_default);
router3.post("/:userId/entries", validate(createEntrySchema), transactionController_default.createEntry);
router3.post("/:userId/expenses", validate(createExpenseSchema), transactionController_default.createExpense);
router3.put("/expenses/:expenseId", validate(updateExpenseSchema), transactionController_default.updateExpense);
router3.delete("/expenses/:expenseId", transactionController_default.deleteExpense);
var transactionRoutes_default = router3;

// src/index.ts
var import_swagger_ui_express = __toESM(require("swagger-ui-express"));
var import_swagger_jsdoc = __toESM(require("swagger-jsdoc"));
var PORT = process.env.PORT || 3001;
var app = (0, import_express4.default)();
app.use((0, import_cors.default)());
app.use(import_express4.default.json());
app.use("/api/auth", authRoutes_default);
app.use("/api/users", userRoutes_default);
app.use("/api/transactions", transactionRoutes_default);
var swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Finan\xE7asF\xE1ceis API",
      version: "1.0.0",
      description: "Documenta\xE7\xE3o da API do Finan\xE7asF\xE1ceis"
    },
    servers: [
      {
        url: "http://localhost:3001/api",
        description: "Servidor local"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ["./src/routes/*.ts"]
};
var swaggerSpec = (0, import_swagger_jsdoc.default)(swaggerOptions);
app.use("/api-docs", import_swagger_ui_express.default.serve, import_swagger_ui_express.default.setup(swaggerSpec));
app.listen(PORT, () => {
  console.log(`Servidor rodando: http://localhost:${PORT}`);
});
/*! Bundled license information:

@prisma/client/runtime/library.js:
  (*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.5.0
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  *)
*/
