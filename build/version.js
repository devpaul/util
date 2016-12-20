define([], function(){
	var
		rev = "$Rev: cd9e133 $".match(/[0-9a-f]{7,}/),
		version= {
			major: 1, minor: 12, patch: 0, flag: "",
			revision: rev ? rev[0] : NaN,
			toString: function(){
				var v= version;
				return v.major + "." + v.minor + "." + v.patch + v.flag + " (" + v.revision + ")";
			}
		};
	return version;
});
