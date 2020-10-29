(function() {var implementors = {};
implementors["archive"] = [{"text":"impl Freeze for Tarball","synthetic":true,"types":[]},{"text":"impl Freeze for Zip","synthetic":true,"types":[]},{"text":"impl Freeze for ArchiveError","synthetic":true,"types":[]},{"text":"impl Freeze for Origin","synthetic":true,"types":[]}];
implementors["progress_read"] = [{"text":"impl&lt;R, T, F&gt; Freeze for ProgressRead&lt;R, T, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["test_support"] = [{"text":"impl Freeze for Execs","synthetic":true,"types":[]},{"text":"impl&lt;I1, I2&gt; Freeze for ZipAll&lt;I1, I2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I1: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;I2: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for MatchKind","synthetic":true,"types":[]},{"text":"impl Freeze for Remove","synthetic":true,"types":[]},{"text":"impl Freeze for ProcessBuilder","synthetic":true,"types":[]},{"text":"impl Freeze for ProcessError","synthetic":true,"types":[]}];
implementors["validate_npm_package_name"] = [{"text":"impl Freeze for SCOPED_PACKAGE","synthetic":true,"types":[]},{"text":"impl Freeze for SPECIAL_CHARS","synthetic":true,"types":[]},{"text":"impl Freeze for BLACKLIST","synthetic":true,"types":[]},{"text":"impl Freeze for BUILTINS","synthetic":true,"types":[]},{"text":"impl Freeze for Validity","synthetic":true,"types":[]}];
implementors["volta"] = [{"text":"impl Freeze for Completions","synthetic":true,"types":[]},{"text":"impl Freeze for Fetch","synthetic":true,"types":[]},{"text":"impl Freeze for Install","synthetic":true,"types":[]},{"text":"impl Freeze for PackageDetails","synthetic":true,"types":[]},{"text":"impl Freeze for Node","synthetic":true,"types":[]},{"text":"impl Freeze for PackageManager","synthetic":true,"types":[]},{"text":"impl Freeze for List","synthetic":true,"types":[]},{"text":"impl Freeze for Format","synthetic":true,"types":[]},{"text":"impl Freeze for Source","synthetic":true,"types":[]},{"text":"impl Freeze for Package","synthetic":true,"types":[]},{"text":"impl Freeze for PackageManagerKind","synthetic":true,"types":[]},{"text":"impl Freeze for Filter","synthetic":true,"types":[]},{"text":"impl Freeze for Subcommand","synthetic":true,"types":[]},{"text":"impl Freeze for WRAPPER","synthetic":true,"types":[]},{"text":"impl Freeze for Toolchain","synthetic":true,"types":[]},{"text":"impl Freeze for Lookup","synthetic":true,"types":[]},{"text":"impl Freeze for Pin","synthetic":true,"types":[]},{"text":"impl Freeze for Run","synthetic":true,"types":[]},{"text":"impl Freeze for Setup","synthetic":true,"types":[]},{"text":"impl Freeze for Uninstall","synthetic":true,"types":[]},{"text":"impl Freeze for Use","synthetic":true,"types":[]},{"text":"impl Freeze for Which","synthetic":true,"types":[]},{"text":"impl Freeze for Volta","synthetic":true,"types":[]},{"text":"impl Freeze for Subcommand","synthetic":true,"types":[]},{"text":"impl Freeze for Error","synthetic":true,"types":[]}];
implementors["volta_core"] = [{"text":"impl Freeze for VoltaError","synthetic":true,"types":[]},{"text":"impl Freeze for Inner","synthetic":true,"types":[]},{"text":"impl Freeze for ErrorKind","synthetic":true,"types":[]},{"text":"impl Freeze for ExitCode","synthetic":true,"types":[]},{"text":"impl Freeze for Event","synthetic":true,"types":[]},{"text":"impl Freeze for ErrorEnv","synthetic":true,"types":[]},{"text":"impl Freeze for EventLog","synthetic":true,"types":[]},{"text":"impl Freeze for EventKind","synthetic":true,"types":[]},{"text":"impl !Freeze for LazyHookConfig","synthetic":true,"types":[]},{"text":"impl Freeze for HookConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for ToolHooks&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for EventHooks","synthetic":true,"types":[]},{"text":"impl Freeze for Publish","synthetic":true,"types":[]},{"text":"impl Freeze for RawResolveHook","synthetic":true,"types":[]},{"text":"impl Freeze for RawPublishHook","synthetic":true,"types":[]},{"text":"impl Freeze for RawHookConfig","synthetic":true,"types":[]},{"text":"impl Freeze for RawEventHooks","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for RawToolHooks&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for REL_PATH","synthetic":true,"types":[]},{"text":"impl Freeze for REL_PATH_PARENT","synthetic":true,"types":[]},{"text":"impl Freeze for DistroHook","synthetic":true,"types":[]},{"text":"impl Freeze for MetadataHook","synthetic":true,"types":[]},{"text":"impl Freeze for VOLTA_HOME","synthetic":true,"types":[]},{"text":"impl Freeze for VOLTA_INSTALL","synthetic":true,"types":[]},{"text":"impl Freeze for Logger","synthetic":true,"types":[]},{"text":"impl Freeze for LogContext","synthetic":true,"types":[]},{"text":"impl Freeze for LogVerbosity","synthetic":true,"types":[]},{"text":"impl Freeze for BinManifest","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Freeze for BinMap&lt;K, V&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for RawBinManifest","synthetic":true,"types":[]},{"text":"impl Freeze for Engines","synthetic":true,"types":[]},{"text":"impl&lt;K, V&gt; Freeze for BinVisitor&lt;K, V&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for Monitor","synthetic":true,"types":[]},{"text":"impl Freeze for Image","synthetic":true,"types":[]},{"text":"impl Freeze for System","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Sourced&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for PlatformSpec","synthetic":true,"types":[]},{"text":"impl Freeze for CliPlatform","synthetic":true,"types":[]},{"text":"impl Freeze for Platform","synthetic":true,"types":[]},{"text":"impl Freeze for Source","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for InheritOption&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !Freeze for LazyProject","synthetic":true,"types":[]},{"text":"impl Freeze for Project","synthetic":true,"types":[]},{"text":"impl Freeze for PartialPlatform","synthetic":true,"types":[]},{"text":"impl Freeze for Manifest","synthetic":true,"types":[]},{"text":"impl Freeze for RawManifest","synthetic":true,"types":[]},{"text":"impl Freeze for ToolchainSpec","synthetic":true,"types":[]},{"text":"impl Freeze for ManifestKey","synthetic":true,"types":[]},{"text":"impl Freeze for DefaultBinary","synthetic":true,"types":[]},{"text":"impl Freeze for ToolCommand","synthetic":true,"types":[]},{"text":"impl Freeze for PackageInstallCommand","synthetic":true,"types":[]},{"text":"impl Freeze for InternalInstallCommand","synthetic":true,"types":[]},{"text":"impl Freeze for UninstallCommand","synthetic":true,"types":[]},{"text":"impl Freeze for Executor","synthetic":true,"types":[]},{"text":"impl Freeze for ToolKind","synthetic":true,"types":[]},{"text":"impl Freeze for REQUIRED_NPM_VERSION","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for InstallArgs&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for UninstallArgs&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for CommandArg&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; Freeze for GlobalCommand&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !Freeze for Session","synthetic":true,"types":[]},{"text":"impl Freeze for ActivityKind","synthetic":true,"types":[]},{"text":"impl Freeze for ShimResult","synthetic":true,"types":[]},{"text":"impl Freeze for LOCK_STATE","synthetic":true,"types":[]},{"text":"impl Freeze for LockState","synthetic":true,"types":[]},{"text":"impl Freeze for VoltaLock","synthetic":true,"types":[]},{"text":"impl Freeze for BinConfig","synthetic":true,"types":[]},{"text":"impl Freeze for PackageConfig","synthetic":true,"types":[]},{"text":"impl Freeze for PackageManifest","synthetic":true,"types":[]},{"text":"impl Freeze for PackageDetails","synthetic":true,"types":[]},{"text":"impl Freeze for Spec","synthetic":true,"types":[]},{"text":"impl Freeze for FetchStatus","synthetic":true,"types":[]},{"text":"impl Freeze for NodeVersion","synthetic":true,"types":[]},{"text":"impl Freeze for Node","synthetic":true,"types":[]},{"text":"impl Freeze for Manifest","synthetic":true,"types":[]},{"text":"impl Freeze for NodeIndex","synthetic":true,"types":[]},{"text":"impl Freeze for NodeEntry","synthetic":true,"types":[]},{"text":"impl Freeze for NodeDistroFiles","synthetic":true,"types":[]},{"text":"impl Freeze for RawNodeIndex","synthetic":true,"types":[]},{"text":"impl Freeze for RawNodeEntry","synthetic":true,"types":[]},{"text":"impl Freeze for Npm","synthetic":true,"types":[]},{"text":"impl Freeze for BundledNpm","synthetic":true,"types":[]},{"text":"impl Freeze for Package","synthetic":true,"types":[]},{"text":"impl Freeze for DirectInstall","synthetic":true,"types":[]},{"text":"impl Freeze for PackageManager","synthetic":true,"types":[]},{"text":"impl Freeze for RawPlatformSpec","synthetic":true,"types":[]},{"text":"impl Freeze for GlobalYarnManifest","synthetic":true,"types":[]},{"text":"impl Freeze for BinMapVisitor","synthetic":true,"types":[]},{"text":"impl Freeze for PackageIndex","synthetic":true,"types":[]},{"text":"impl Freeze for RawPackageMetadata","synthetic":true,"types":[]},{"text":"impl Freeze for RawPackageVersionInfo","synthetic":true,"types":[]},{"text":"impl Freeze for RawDistInfo","synthetic":true,"types":[]},{"text":"impl Freeze for TOOL_SPEC_PATTERN","synthetic":true,"types":[]},{"text":"impl Freeze for HAS_VERSION","synthetic":true,"types":[]},{"text":"impl Freeze for Yarn","synthetic":true,"types":[]},{"text":"impl Freeze for YarnIndex","synthetic":true,"types":[]},{"text":"impl Freeze for RawYarnIndex","synthetic":true,"types":[]},{"text":"impl Freeze for RawYarnEntry","synthetic":true,"types":[]},{"text":"impl Freeze for RawYarnAsset","synthetic":true,"types":[]},{"text":"impl !Freeze for LazyToolchain","synthetic":true,"types":[]},{"text":"impl Freeze for Toolchain","synthetic":true,"types":[]},{"text":"impl Freeze for NodeVersion","synthetic":true,"types":[]},{"text":"impl Freeze for Platform","synthetic":true,"types":[]},{"text":"impl Freeze for VersionSpec","synthetic":true,"types":[]},{"text":"impl Freeze for VersionTag","synthetic":true,"types":[]},{"text":"impl Freeze for VersionVisitor","synthetic":true,"types":[]},{"text":"impl Freeze for Wrapper","synthetic":true,"types":[]}];
implementors["volta_layout"] = [{"text":"impl Freeze for VoltaInstall","synthetic":true,"types":[]},{"text":"impl Freeze for VoltaHome","synthetic":true,"types":[]},{"text":"impl Freeze for VoltaInstall","synthetic":true,"types":[]},{"text":"impl Freeze for VoltaHome","synthetic":true,"types":[]},{"text":"impl Freeze for VoltaHome","synthetic":true,"types":[]},{"text":"impl Freeze for VoltaHome","synthetic":true,"types":[]}];
implementors["volta_layout_macro"] = [{"text":"impl Freeze for Ast","synthetic":true,"types":[]},{"text":"impl Freeze for LayoutStruct","synthetic":true,"types":[]},{"text":"impl Freeze for Directory","synthetic":true,"types":[]},{"text":"impl Freeze for FieldPrefix","synthetic":true,"types":[]},{"text":"impl Freeze for EntryKind","synthetic":true,"types":[]},{"text":"impl Freeze for FieldContents","synthetic":true,"types":[]},{"text":"impl Freeze for Ir","synthetic":true,"types":[]},{"text":"impl Freeze for Entry","synthetic":true,"types":[]}];
implementors["volta_migrate"] = [{"text":"impl Freeze for MigrationState","synthetic":true,"types":[]},{"text":"impl Freeze for Empty","synthetic":true,"types":[]},{"text":"impl Freeze for V0","synthetic":true,"types":[]},{"text":"impl Freeze for V1","synthetic":true,"types":[]},{"text":"impl Freeze for V2","synthetic":true,"types":[]},{"text":"impl Freeze for V3","synthetic":true,"types":[]},{"text":"impl Freeze for LegacyPackageConfig","synthetic":true,"types":[]},{"text":"impl Freeze for LegacyPlatform","synthetic":true,"types":[]},{"text":"impl Freeze for NodeVersion","synthetic":true,"types":[]}];
implementors["volta_shim"] = [{"text":"impl Freeze for Error","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()