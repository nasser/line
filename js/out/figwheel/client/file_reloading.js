// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__27989__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27989__auto__){
return or__27989__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__27989__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
var or__27989__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__27989__auto____$1)){
return or__27989__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__54914_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__54914_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__54915 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__54916 = null;
var count__54917 = (0);
var i__54918 = (0);
while(true){
if((i__54918 < count__54917)){
var n = cljs.core._nth.call(null,chunk__54916,i__54918);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__54919 = seq__54915;
var G__54920 = chunk__54916;
var G__54921 = count__54917;
var G__54922 = (i__54918 + (1));
seq__54915 = G__54919;
chunk__54916 = G__54920;
count__54917 = G__54921;
i__54918 = G__54922;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54915);
if(temp__4657__auto__){
var seq__54915__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54915__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__54915__$1);
var G__54923 = cljs.core.chunk_rest.call(null,seq__54915__$1);
var G__54924 = c__28828__auto__;
var G__54925 = cljs.core.count.call(null,c__28828__auto__);
var G__54926 = (0);
seq__54915 = G__54923;
chunk__54916 = G__54924;
count__54917 = G__54925;
i__54918 = G__54926;
continue;
} else {
var n = cljs.core.first.call(null,seq__54915__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__54927 = cljs.core.next.call(null,seq__54915__$1);
var G__54928 = null;
var G__54929 = (0);
var G__54930 = (0);
seq__54915 = G__54927;
chunk__54916 = G__54928;
count__54917 = G__54929;
i__54918 = G__54930;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__54940_54948 = cljs.core.seq.call(null,deps);
var chunk__54941_54949 = null;
var count__54942_54950 = (0);
var i__54943_54951 = (0);
while(true){
if((i__54943_54951 < count__54942_54950)){
var dep_54952 = cljs.core._nth.call(null,chunk__54941_54949,i__54943_54951);
topo_sort_helper_STAR_.call(null,dep_54952,(depth + (1)),state);

var G__54953 = seq__54940_54948;
var G__54954 = chunk__54941_54949;
var G__54955 = count__54942_54950;
var G__54956 = (i__54943_54951 + (1));
seq__54940_54948 = G__54953;
chunk__54941_54949 = G__54954;
count__54942_54950 = G__54955;
i__54943_54951 = G__54956;
continue;
} else {
var temp__4657__auto___54957 = cljs.core.seq.call(null,seq__54940_54948);
if(temp__4657__auto___54957){
var seq__54940_54958__$1 = temp__4657__auto___54957;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54940_54958__$1)){
var c__28828__auto___54959 = cljs.core.chunk_first.call(null,seq__54940_54958__$1);
var G__54960 = cljs.core.chunk_rest.call(null,seq__54940_54958__$1);
var G__54961 = c__28828__auto___54959;
var G__54962 = cljs.core.count.call(null,c__28828__auto___54959);
var G__54963 = (0);
seq__54940_54948 = G__54960;
chunk__54941_54949 = G__54961;
count__54942_54950 = G__54962;
i__54943_54951 = G__54963;
continue;
} else {
var dep_54964 = cljs.core.first.call(null,seq__54940_54958__$1);
topo_sort_helper_STAR_.call(null,dep_54964,(depth + (1)),state);

var G__54965 = cljs.core.next.call(null,seq__54940_54958__$1);
var G__54966 = null;
var G__54967 = (0);
var G__54968 = (0);
seq__54940_54948 = G__54965;
chunk__54941_54949 = G__54966;
count__54942_54950 = G__54967;
i__54943_54951 = G__54968;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__54944){
var vec__54945 = p__54944;
var seq__54946 = cljs.core.seq.call(null,vec__54945);
var first__54947 = cljs.core.first.call(null,seq__54946);
var seq__54946__$1 = cljs.core.next.call(null,seq__54946);
var x = first__54947;
var xs = seq__54946__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__54945,seq__54946,first__54947,seq__54946__$1,x,xs,get_deps__$1){
return (function (p1__54931_SHARP_){
return clojure.set.difference.call(null,p1__54931_SHARP_,x);
});})(vec__54945,seq__54946,first__54947,seq__54946__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__54969 = cljs.core.seq.call(null,provides);
var chunk__54970 = null;
var count__54971 = (0);
var i__54972 = (0);
while(true){
if((i__54972 < count__54971)){
var prov = cljs.core._nth.call(null,chunk__54970,i__54972);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__54973_54981 = cljs.core.seq.call(null,requires);
var chunk__54974_54982 = null;
var count__54975_54983 = (0);
var i__54976_54984 = (0);
while(true){
if((i__54976_54984 < count__54975_54983)){
var req_54985 = cljs.core._nth.call(null,chunk__54974_54982,i__54976_54984);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54985,prov);

var G__54986 = seq__54973_54981;
var G__54987 = chunk__54974_54982;
var G__54988 = count__54975_54983;
var G__54989 = (i__54976_54984 + (1));
seq__54973_54981 = G__54986;
chunk__54974_54982 = G__54987;
count__54975_54983 = G__54988;
i__54976_54984 = G__54989;
continue;
} else {
var temp__4657__auto___54990 = cljs.core.seq.call(null,seq__54973_54981);
if(temp__4657__auto___54990){
var seq__54973_54991__$1 = temp__4657__auto___54990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54973_54991__$1)){
var c__28828__auto___54992 = cljs.core.chunk_first.call(null,seq__54973_54991__$1);
var G__54993 = cljs.core.chunk_rest.call(null,seq__54973_54991__$1);
var G__54994 = c__28828__auto___54992;
var G__54995 = cljs.core.count.call(null,c__28828__auto___54992);
var G__54996 = (0);
seq__54973_54981 = G__54993;
chunk__54974_54982 = G__54994;
count__54975_54983 = G__54995;
i__54976_54984 = G__54996;
continue;
} else {
var req_54997 = cljs.core.first.call(null,seq__54973_54991__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54997,prov);

var G__54998 = cljs.core.next.call(null,seq__54973_54991__$1);
var G__54999 = null;
var G__55000 = (0);
var G__55001 = (0);
seq__54973_54981 = G__54998;
chunk__54974_54982 = G__54999;
count__54975_54983 = G__55000;
i__54976_54984 = G__55001;
continue;
}
} else {
}
}
break;
}

var G__55002 = seq__54969;
var G__55003 = chunk__54970;
var G__55004 = count__54971;
var G__55005 = (i__54972 + (1));
seq__54969 = G__55002;
chunk__54970 = G__55003;
count__54971 = G__55004;
i__54972 = G__55005;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54969);
if(temp__4657__auto__){
var seq__54969__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54969__$1)){
var c__28828__auto__ = cljs.core.chunk_first.call(null,seq__54969__$1);
var G__55006 = cljs.core.chunk_rest.call(null,seq__54969__$1);
var G__55007 = c__28828__auto__;
var G__55008 = cljs.core.count.call(null,c__28828__auto__);
var G__55009 = (0);
seq__54969 = G__55006;
chunk__54970 = G__55007;
count__54971 = G__55008;
i__54972 = G__55009;
continue;
} else {
var prov = cljs.core.first.call(null,seq__54969__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__54977_55010 = cljs.core.seq.call(null,requires);
var chunk__54978_55011 = null;
var count__54979_55012 = (0);
var i__54980_55013 = (0);
while(true){
if((i__54980_55013 < count__54979_55012)){
var req_55014 = cljs.core._nth.call(null,chunk__54978_55011,i__54980_55013);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55014,prov);

var G__55015 = seq__54977_55010;
var G__55016 = chunk__54978_55011;
var G__55017 = count__54979_55012;
var G__55018 = (i__54980_55013 + (1));
seq__54977_55010 = G__55015;
chunk__54978_55011 = G__55016;
count__54979_55012 = G__55017;
i__54980_55013 = G__55018;
continue;
} else {
var temp__4657__auto___55019__$1 = cljs.core.seq.call(null,seq__54977_55010);
if(temp__4657__auto___55019__$1){
var seq__54977_55020__$1 = temp__4657__auto___55019__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54977_55020__$1)){
var c__28828__auto___55021 = cljs.core.chunk_first.call(null,seq__54977_55020__$1);
var G__55022 = cljs.core.chunk_rest.call(null,seq__54977_55020__$1);
var G__55023 = c__28828__auto___55021;
var G__55024 = cljs.core.count.call(null,c__28828__auto___55021);
var G__55025 = (0);
seq__54977_55010 = G__55022;
chunk__54978_55011 = G__55023;
count__54979_55012 = G__55024;
i__54980_55013 = G__55025;
continue;
} else {
var req_55026 = cljs.core.first.call(null,seq__54977_55020__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55026,prov);

var G__55027 = cljs.core.next.call(null,seq__54977_55020__$1);
var G__55028 = null;
var G__55029 = (0);
var G__55030 = (0);
seq__54977_55010 = G__55027;
chunk__54978_55011 = G__55028;
count__54979_55012 = G__55029;
i__54980_55013 = G__55030;
continue;
}
} else {
}
}
break;
}

var G__55031 = cljs.core.next.call(null,seq__54969__$1);
var G__55032 = null;
var G__55033 = (0);
var G__55034 = (0);
seq__54969 = G__55031;
chunk__54970 = G__55032;
count__54971 = G__55033;
i__54972 = G__55034;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__55035_55039 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__55036_55040 = null;
var count__55037_55041 = (0);
var i__55038_55042 = (0);
while(true){
if((i__55038_55042 < count__55037_55041)){
var ns_55043 = cljs.core._nth.call(null,chunk__55036_55040,i__55038_55042);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_55043);

var G__55044 = seq__55035_55039;
var G__55045 = chunk__55036_55040;
var G__55046 = count__55037_55041;
var G__55047 = (i__55038_55042 + (1));
seq__55035_55039 = G__55044;
chunk__55036_55040 = G__55045;
count__55037_55041 = G__55046;
i__55038_55042 = G__55047;
continue;
} else {
var temp__4657__auto___55048 = cljs.core.seq.call(null,seq__55035_55039);
if(temp__4657__auto___55048){
var seq__55035_55049__$1 = temp__4657__auto___55048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55035_55049__$1)){
var c__28828__auto___55050 = cljs.core.chunk_first.call(null,seq__55035_55049__$1);
var G__55051 = cljs.core.chunk_rest.call(null,seq__55035_55049__$1);
var G__55052 = c__28828__auto___55050;
var G__55053 = cljs.core.count.call(null,c__28828__auto___55050);
var G__55054 = (0);
seq__55035_55039 = G__55051;
chunk__55036_55040 = G__55052;
count__55037_55041 = G__55053;
i__55038_55042 = G__55054;
continue;
} else {
var ns_55055 = cljs.core.first.call(null,seq__55035_55049__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_55055);

var G__55056 = cljs.core.next.call(null,seq__55035_55049__$1);
var G__55057 = null;
var G__55058 = (0);
var G__55059 = (0);
seq__55035_55039 = G__55056;
chunk__55036_55040 = G__55057;
count__55037_55041 = G__55058;
i__55038_55042 = G__55059;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__27989__auto__ = goog.require__;
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__55060__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__55060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55061__i = 0, G__55061__a = new Array(arguments.length -  0);
while (G__55061__i < G__55061__a.length) {G__55061__a[G__55061__i] = arguments[G__55061__i + 0]; ++G__55061__i;}
  args = new cljs.core.IndexedSeq(G__55061__a,0,null);
} 
return G__55060__delegate.call(this,args);};
G__55060.cljs$lang$maxFixedArity = 0;
G__55060.cljs$lang$applyTo = (function (arglist__55062){
var args = cljs.core.seq(arglist__55062);
return G__55060__delegate(args);
});
G__55060.cljs$core$IFn$_invoke$arity$variadic = G__55060__delegate;
return G__55060;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__55063_SHARP_,p2__55064_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55063_SHARP_)].join('')),p2__55064_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__55065_SHARP_,p2__55066_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__55065_SHARP_)].join(''),p2__55066_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__55067 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__55067.addCallback(((function (G__55067){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__55067))
);

G__55067.addErrback(((function (G__55067){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__55067))
);

return G__55067;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__55068 = cljs.core._EQ_;
var expr__55069 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__55068.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__55069))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__55068,expr__55069){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__55068,expr__55069))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__55068,expr__55069){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e55071){if((e55071 instanceof Error)){
var e = e55071;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e55071;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__55068,expr__55069))
} else {
if(cljs.core.truth_(pred__55068.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__55069))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__55068.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__55069))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__55068.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__55069))){
return ((function (pred__55068,expr__55069){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e55072){if((e55072 instanceof Error)){
var e = e55072;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e55072;

}
}})());
});
;})(pred__55068,expr__55069))
} else {
return ((function (pred__55068,expr__55069){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__55068,expr__55069))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__55073,callback){
var map__55074 = p__55073;
var map__55074__$1 = ((((!((map__55074 == null)))?((((map__55074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55074):map__55074);
var file_msg = map__55074__$1;
var request_url = cljs.core.get.call(null,map__55074__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__55074,map__55074__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__55074,map__55074__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__30467__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto__){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto__){
return (function (state_55098){
var state_val_55099 = (state_55098[(1)]);
if((state_val_55099 === (7))){
var inst_55094 = (state_55098[(2)]);
var state_55098__$1 = state_55098;
var statearr_55100_55117 = state_55098__$1;
(statearr_55100_55117[(2)] = inst_55094);

(statearr_55100_55117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (1))){
var state_55098__$1 = state_55098;
var statearr_55101_55118 = state_55098__$1;
(statearr_55101_55118[(2)] = null);

(statearr_55101_55118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (4))){
var inst_55078 = (state_55098[(7)]);
var inst_55078__$1 = (state_55098[(2)]);
var state_55098__$1 = (function (){var statearr_55102 = state_55098;
(statearr_55102[(7)] = inst_55078__$1);

return statearr_55102;
})();
if(cljs.core.truth_(inst_55078__$1)){
var statearr_55103_55119 = state_55098__$1;
(statearr_55103_55119[(1)] = (5));

} else {
var statearr_55104_55120 = state_55098__$1;
(statearr_55104_55120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (6))){
var state_55098__$1 = state_55098;
var statearr_55105_55121 = state_55098__$1;
(statearr_55105_55121[(2)] = null);

(statearr_55105_55121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (3))){
var inst_55096 = (state_55098[(2)]);
var state_55098__$1 = state_55098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55098__$1,inst_55096);
} else {
if((state_val_55099 === (2))){
var state_55098__$1 = state_55098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55098__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_55099 === (11))){
var inst_55090 = (state_55098[(2)]);
var state_55098__$1 = (function (){var statearr_55106 = state_55098;
(statearr_55106[(8)] = inst_55090);

return statearr_55106;
})();
var statearr_55107_55122 = state_55098__$1;
(statearr_55107_55122[(2)] = null);

(statearr_55107_55122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (9))){
var inst_55082 = (state_55098[(9)]);
var inst_55084 = (state_55098[(10)]);
var inst_55086 = inst_55084.call(null,inst_55082);
var state_55098__$1 = state_55098;
var statearr_55108_55123 = state_55098__$1;
(statearr_55108_55123[(2)] = inst_55086);

(statearr_55108_55123[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (5))){
var inst_55078 = (state_55098[(7)]);
var inst_55080 = figwheel.client.file_reloading.blocking_load.call(null,inst_55078);
var state_55098__$1 = state_55098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55098__$1,(8),inst_55080);
} else {
if((state_val_55099 === (10))){
var inst_55082 = (state_55098[(9)]);
var inst_55088 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_55082);
var state_55098__$1 = state_55098;
var statearr_55109_55124 = state_55098__$1;
(statearr_55109_55124[(2)] = inst_55088);

(statearr_55109_55124[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55099 === (8))){
var inst_55078 = (state_55098[(7)]);
var inst_55084 = (state_55098[(10)]);
var inst_55082 = (state_55098[(2)]);
var inst_55083 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_55084__$1 = cljs.core.get.call(null,inst_55083,inst_55078);
var state_55098__$1 = (function (){var statearr_55110 = state_55098;
(statearr_55110[(9)] = inst_55082);

(statearr_55110[(10)] = inst_55084__$1);

return statearr_55110;
})();
if(cljs.core.truth_(inst_55084__$1)){
var statearr_55111_55125 = state_55098__$1;
(statearr_55111_55125[(1)] = (9));

} else {
var statearr_55112_55126 = state_55098__$1;
(statearr_55112_55126[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30467__auto__))
;
return ((function (switch__30446__auto__,c__30467__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30447__auto__ = null;
var figwheel$client$file_reloading$state_machine__30447__auto____0 = (function (){
var statearr_55113 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55113[(0)] = figwheel$client$file_reloading$state_machine__30447__auto__);

(statearr_55113[(1)] = (1));

return statearr_55113;
});
var figwheel$client$file_reloading$state_machine__30447__auto____1 = (function (state_55098){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_55098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e55114){if((e55114 instanceof Object)){
var ex__30450__auto__ = e55114;
var statearr_55115_55127 = state_55098;
(statearr_55115_55127[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55128 = state_55098;
state_55098 = G__55128;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30447__auto__ = function(state_55098){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30447__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30447__auto____1.call(this,state_55098);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30447__auto____0;
figwheel$client$file_reloading$state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30447__auto____1;
return figwheel$client$file_reloading$state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto__))
})();
var state__30469__auto__ = (function (){var statearr_55116 = f__30468__auto__.call(null);
(statearr_55116[(6)] = c__30467__auto__);

return statearr_55116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto__))
);

return c__30467__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__55129,callback){
var map__55130 = p__55129;
var map__55130__$1 = ((((!((map__55130 == null)))?((((map__55130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55130):map__55130);
var file_msg = map__55130__$1;
var namespace = cljs.core.get.call(null,map__55130__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__55130,map__55130__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__55130,map__55130__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__55132){
var map__55133 = p__55132;
var map__55133__$1 = ((((!((map__55133 == null)))?((((map__55133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55133):map__55133);
var file_msg = map__55133__$1;
var namespace = cljs.core.get.call(null,map__55133__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__55135){
var map__55136 = p__55135;
var map__55136__$1 = ((((!((map__55136 == null)))?((((map__55136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55136):map__55136);
var file_msg = map__55136__$1;
var namespace = cljs.core.get.call(null,map__55136__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__27977__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__27977__auto__){
var or__27989__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27989__auto__)){
return or__27989__auto__;
} else {
var or__27989__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__27989__auto____$1)){
return or__27989__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__27977__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__55138,callback){
var map__55139 = p__55138;
var map__55139__$1 = ((((!((map__55139 == null)))?((((map__55139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55139):map__55139);
var file_msg = map__55139__$1;
var request_url = cljs.core.get.call(null,map__55139__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__55139__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__30467__auto___55189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto___55189,out){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto___55189,out){
return (function (state_55174){
var state_val_55175 = (state_55174[(1)]);
if((state_val_55175 === (1))){
var inst_55148 = cljs.core.seq.call(null,files);
var inst_55149 = cljs.core.first.call(null,inst_55148);
var inst_55150 = cljs.core.next.call(null,inst_55148);
var inst_55151 = files;
var state_55174__$1 = (function (){var statearr_55176 = state_55174;
(statearr_55176[(7)] = inst_55150);

(statearr_55176[(8)] = inst_55151);

(statearr_55176[(9)] = inst_55149);

return statearr_55176;
})();
var statearr_55177_55190 = state_55174__$1;
(statearr_55177_55190[(2)] = null);

(statearr_55177_55190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55175 === (2))){
var inst_55157 = (state_55174[(10)]);
var inst_55151 = (state_55174[(8)]);
var inst_55156 = cljs.core.seq.call(null,inst_55151);
var inst_55157__$1 = cljs.core.first.call(null,inst_55156);
var inst_55158 = cljs.core.next.call(null,inst_55156);
var inst_55159 = (inst_55157__$1 == null);
var inst_55160 = cljs.core.not.call(null,inst_55159);
var state_55174__$1 = (function (){var statearr_55178 = state_55174;
(statearr_55178[(10)] = inst_55157__$1);

(statearr_55178[(11)] = inst_55158);

return statearr_55178;
})();
if(inst_55160){
var statearr_55179_55191 = state_55174__$1;
(statearr_55179_55191[(1)] = (4));

} else {
var statearr_55180_55192 = state_55174__$1;
(statearr_55180_55192[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55175 === (3))){
var inst_55172 = (state_55174[(2)]);
var state_55174__$1 = state_55174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55174__$1,inst_55172);
} else {
if((state_val_55175 === (4))){
var inst_55157 = (state_55174[(10)]);
var inst_55162 = figwheel.client.file_reloading.reload_js_file.call(null,inst_55157);
var state_55174__$1 = state_55174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55174__$1,(7),inst_55162);
} else {
if((state_val_55175 === (5))){
var inst_55168 = cljs.core.async.close_BANG_.call(null,out);
var state_55174__$1 = state_55174;
var statearr_55181_55193 = state_55174__$1;
(statearr_55181_55193[(2)] = inst_55168);

(statearr_55181_55193[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55175 === (6))){
var inst_55170 = (state_55174[(2)]);
var state_55174__$1 = state_55174;
var statearr_55182_55194 = state_55174__$1;
(statearr_55182_55194[(2)] = inst_55170);

(statearr_55182_55194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55175 === (7))){
var inst_55158 = (state_55174[(11)]);
var inst_55164 = (state_55174[(2)]);
var inst_55165 = cljs.core.async.put_BANG_.call(null,out,inst_55164);
var inst_55151 = inst_55158;
var state_55174__$1 = (function (){var statearr_55183 = state_55174;
(statearr_55183[(8)] = inst_55151);

(statearr_55183[(12)] = inst_55165);

return statearr_55183;
})();
var statearr_55184_55195 = state_55174__$1;
(statearr_55184_55195[(2)] = null);

(statearr_55184_55195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__30467__auto___55189,out))
;
return ((function (switch__30446__auto__,c__30467__auto___55189,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto____0 = (function (){
var statearr_55185 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55185[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto__);

(statearr_55185[(1)] = (1));

return statearr_55185;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto____1 = (function (state_55174){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_55174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e55186){if((e55186 instanceof Object)){
var ex__30450__auto__ = e55186;
var statearr_55187_55196 = state_55174;
(statearr_55187_55196[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55197 = state_55174;
state_55174 = G__55197;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto__ = function(state_55174){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto____1.call(this,state_55174);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto___55189,out))
})();
var state__30469__auto__ = (function (){var statearr_55188 = f__30468__auto__.call(null);
(statearr_55188[(6)] = c__30467__auto___55189);

return statearr_55188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto___55189,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__55198,opts){
var map__55199 = p__55198;
var map__55199__$1 = ((((!((map__55199 == null)))?((((map__55199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55199.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55199):map__55199);
var eval_body = cljs.core.get.call(null,map__55199__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__55199__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27977__auto__ = eval_body;
if(cljs.core.truth_(and__27977__auto__)){
return typeof eval_body === 'string';
} else {
return and__27977__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e55201){var e = e55201;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__55202_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__55202_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__55203){
var vec__55204 = p__55203;
var k = cljs.core.nth.call(null,vec__55204,(0),null);
var v = cljs.core.nth.call(null,vec__55204,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__55207){
var vec__55208 = p__55207;
var k = cljs.core.nth.call(null,vec__55208,(0),null);
var v = cljs.core.nth.call(null,vec__55208,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__55214,p__55215){
var map__55216 = p__55214;
var map__55216__$1 = ((((!((map__55216 == null)))?((((map__55216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55216):map__55216);
var opts = map__55216__$1;
var before_jsload = cljs.core.get.call(null,map__55216__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__55216__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__55216__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__55217 = p__55215;
var map__55217__$1 = ((((!((map__55217 == null)))?((((map__55217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55217.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55217):map__55217);
var msg = map__55217__$1;
var files = cljs.core.get.call(null,map__55217__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__55217__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__55217__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30467__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30467__auto__,map__55216,map__55216__$1,opts,before_jsload,on_jsload,reload_dependents,map__55217,map__55217__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30468__auto__ = (function (){var switch__30446__auto__ = ((function (c__30467__auto__,map__55216,map__55216__$1,opts,before_jsload,on_jsload,reload_dependents,map__55217,map__55217__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_55371){
var state_val_55372 = (state_55371[(1)]);
if((state_val_55372 === (7))){
var inst_55232 = (state_55371[(7)]);
var inst_55231 = (state_55371[(8)]);
var inst_55233 = (state_55371[(9)]);
var inst_55234 = (state_55371[(10)]);
var inst_55239 = cljs.core._nth.call(null,inst_55232,inst_55234);
var inst_55240 = figwheel.client.file_reloading.eval_body.call(null,inst_55239,opts);
var inst_55241 = (inst_55234 + (1));
var tmp55373 = inst_55232;
var tmp55374 = inst_55231;
var tmp55375 = inst_55233;
var inst_55231__$1 = tmp55374;
var inst_55232__$1 = tmp55373;
var inst_55233__$1 = tmp55375;
var inst_55234__$1 = inst_55241;
var state_55371__$1 = (function (){var statearr_55376 = state_55371;
(statearr_55376[(11)] = inst_55240);

(statearr_55376[(7)] = inst_55232__$1);

(statearr_55376[(8)] = inst_55231__$1);

(statearr_55376[(9)] = inst_55233__$1);

(statearr_55376[(10)] = inst_55234__$1);

return statearr_55376;
})();
var statearr_55377_55460 = state_55371__$1;
(statearr_55377_55460[(2)] = null);

(statearr_55377_55460[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (20))){
var inst_55274 = (state_55371[(12)]);
var inst_55282 = figwheel.client.file_reloading.sort_files.call(null,inst_55274);
var state_55371__$1 = state_55371;
var statearr_55378_55461 = state_55371__$1;
(statearr_55378_55461[(2)] = inst_55282);

(statearr_55378_55461[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (27))){
var state_55371__$1 = state_55371;
var statearr_55379_55462 = state_55371__$1;
(statearr_55379_55462[(2)] = null);

(statearr_55379_55462[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (1))){
var inst_55223 = (state_55371[(13)]);
var inst_55220 = before_jsload.call(null,files);
var inst_55221 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_55222 = (function (){return ((function (inst_55223,inst_55220,inst_55221,state_val_55372,c__30467__auto__,map__55216,map__55216__$1,opts,before_jsload,on_jsload,reload_dependents,map__55217,map__55217__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__55211_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__55211_SHARP_);
});
;})(inst_55223,inst_55220,inst_55221,state_val_55372,c__30467__auto__,map__55216,map__55216__$1,opts,before_jsload,on_jsload,reload_dependents,map__55217,map__55217__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55223__$1 = cljs.core.filter.call(null,inst_55222,files);
var inst_55224 = cljs.core.not_empty.call(null,inst_55223__$1);
var state_55371__$1 = (function (){var statearr_55380 = state_55371;
(statearr_55380[(14)] = inst_55221);

(statearr_55380[(15)] = inst_55220);

(statearr_55380[(13)] = inst_55223__$1);

return statearr_55380;
})();
if(cljs.core.truth_(inst_55224)){
var statearr_55381_55463 = state_55371__$1;
(statearr_55381_55463[(1)] = (2));

} else {
var statearr_55382_55464 = state_55371__$1;
(statearr_55382_55464[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (24))){
var state_55371__$1 = state_55371;
var statearr_55383_55465 = state_55371__$1;
(statearr_55383_55465[(2)] = null);

(statearr_55383_55465[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (39))){
var inst_55324 = (state_55371[(16)]);
var state_55371__$1 = state_55371;
var statearr_55384_55466 = state_55371__$1;
(statearr_55384_55466[(2)] = inst_55324);

(statearr_55384_55466[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (46))){
var inst_55366 = (state_55371[(2)]);
var state_55371__$1 = state_55371;
var statearr_55385_55467 = state_55371__$1;
(statearr_55385_55467[(2)] = inst_55366);

(statearr_55385_55467[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (4))){
var inst_55268 = (state_55371[(2)]);
var inst_55269 = cljs.core.List.EMPTY;
var inst_55270 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_55269);
var inst_55271 = (function (){return ((function (inst_55268,inst_55269,inst_55270,state_val_55372,c__30467__auto__,map__55216,map__55216__$1,opts,before_jsload,on_jsload,reload_dependents,map__55217,map__55217__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__55212_SHARP_){
var and__27977__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__55212_SHARP_);
if(cljs.core.truth_(and__27977__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__55212_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__55212_SHARP_)));
} else {
return and__27977__auto__;
}
});
;})(inst_55268,inst_55269,inst_55270,state_val_55372,c__30467__auto__,map__55216,map__55216__$1,opts,before_jsload,on_jsload,reload_dependents,map__55217,map__55217__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55272 = cljs.core.filter.call(null,inst_55271,files);
var inst_55273 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_55274 = cljs.core.concat.call(null,inst_55272,inst_55273);
var state_55371__$1 = (function (){var statearr_55386 = state_55371;
(statearr_55386[(17)] = inst_55268);

(statearr_55386[(18)] = inst_55270);

(statearr_55386[(12)] = inst_55274);

return statearr_55386;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_55387_55468 = state_55371__$1;
(statearr_55387_55468[(1)] = (16));

} else {
var statearr_55388_55469 = state_55371__$1;
(statearr_55388_55469[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (15))){
var inst_55258 = (state_55371[(2)]);
var state_55371__$1 = state_55371;
var statearr_55389_55470 = state_55371__$1;
(statearr_55389_55470[(2)] = inst_55258);

(statearr_55389_55470[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (21))){
var inst_55284 = (state_55371[(19)]);
var inst_55284__$1 = (state_55371[(2)]);
var inst_55285 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_55284__$1);
var state_55371__$1 = (function (){var statearr_55390 = state_55371;
(statearr_55390[(19)] = inst_55284__$1);

return statearr_55390;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55371__$1,(22),inst_55285);
} else {
if((state_val_55372 === (31))){
var inst_55369 = (state_55371[(2)]);
var state_55371__$1 = state_55371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55371__$1,inst_55369);
} else {
if((state_val_55372 === (32))){
var inst_55324 = (state_55371[(16)]);
var inst_55329 = inst_55324.cljs$lang$protocol_mask$partition0$;
var inst_55330 = (inst_55329 & (64));
var inst_55331 = inst_55324.cljs$core$ISeq$;
var inst_55332 = (cljs.core.PROTOCOL_SENTINEL === inst_55331);
var inst_55333 = (inst_55330) || (inst_55332);
var state_55371__$1 = state_55371;
if(cljs.core.truth_(inst_55333)){
var statearr_55391_55471 = state_55371__$1;
(statearr_55391_55471[(1)] = (35));

} else {
var statearr_55392_55472 = state_55371__$1;
(statearr_55392_55472[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (40))){
var inst_55346 = (state_55371[(20)]);
var inst_55345 = (state_55371[(2)]);
var inst_55346__$1 = cljs.core.get.call(null,inst_55345,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_55347 = cljs.core.get.call(null,inst_55345,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_55348 = cljs.core.not_empty.call(null,inst_55346__$1);
var state_55371__$1 = (function (){var statearr_55393 = state_55371;
(statearr_55393[(20)] = inst_55346__$1);

(statearr_55393[(21)] = inst_55347);

return statearr_55393;
})();
if(cljs.core.truth_(inst_55348)){
var statearr_55394_55473 = state_55371__$1;
(statearr_55394_55473[(1)] = (41));

} else {
var statearr_55395_55474 = state_55371__$1;
(statearr_55395_55474[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (33))){
var state_55371__$1 = state_55371;
var statearr_55396_55475 = state_55371__$1;
(statearr_55396_55475[(2)] = false);

(statearr_55396_55475[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (13))){
var inst_55244 = (state_55371[(22)]);
var inst_55248 = cljs.core.chunk_first.call(null,inst_55244);
var inst_55249 = cljs.core.chunk_rest.call(null,inst_55244);
var inst_55250 = cljs.core.count.call(null,inst_55248);
var inst_55231 = inst_55249;
var inst_55232 = inst_55248;
var inst_55233 = inst_55250;
var inst_55234 = (0);
var state_55371__$1 = (function (){var statearr_55397 = state_55371;
(statearr_55397[(7)] = inst_55232);

(statearr_55397[(8)] = inst_55231);

(statearr_55397[(9)] = inst_55233);

(statearr_55397[(10)] = inst_55234);

return statearr_55397;
})();
var statearr_55398_55476 = state_55371__$1;
(statearr_55398_55476[(2)] = null);

(statearr_55398_55476[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (22))){
var inst_55288 = (state_55371[(23)]);
var inst_55292 = (state_55371[(24)]);
var inst_55287 = (state_55371[(25)]);
var inst_55284 = (state_55371[(19)]);
var inst_55287__$1 = (state_55371[(2)]);
var inst_55288__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_55287__$1);
var inst_55289 = (function (){var all_files = inst_55284;
var res_SINGLEQUOTE_ = inst_55287__$1;
var res = inst_55288__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_55288,inst_55292,inst_55287,inst_55284,inst_55287__$1,inst_55288__$1,state_val_55372,c__30467__auto__,map__55216,map__55216__$1,opts,before_jsload,on_jsload,reload_dependents,map__55217,map__55217__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__55213_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__55213_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_55288,inst_55292,inst_55287,inst_55284,inst_55287__$1,inst_55288__$1,state_val_55372,c__30467__auto__,map__55216,map__55216__$1,opts,before_jsload,on_jsload,reload_dependents,map__55217,map__55217__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55290 = cljs.core.filter.call(null,inst_55289,inst_55287__$1);
var inst_55291 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_55292__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_55291);
var inst_55293 = cljs.core.not_empty.call(null,inst_55292__$1);
var state_55371__$1 = (function (){var statearr_55399 = state_55371;
(statearr_55399[(23)] = inst_55288__$1);

(statearr_55399[(24)] = inst_55292__$1);

(statearr_55399[(25)] = inst_55287__$1);

(statearr_55399[(26)] = inst_55290);

return statearr_55399;
})();
if(cljs.core.truth_(inst_55293)){
var statearr_55400_55477 = state_55371__$1;
(statearr_55400_55477[(1)] = (23));

} else {
var statearr_55401_55478 = state_55371__$1;
(statearr_55401_55478[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (36))){
var state_55371__$1 = state_55371;
var statearr_55402_55479 = state_55371__$1;
(statearr_55402_55479[(2)] = false);

(statearr_55402_55479[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (41))){
var inst_55346 = (state_55371[(20)]);
var inst_55350 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_55351 = cljs.core.map.call(null,inst_55350,inst_55346);
var inst_55352 = cljs.core.pr_str.call(null,inst_55351);
var inst_55353 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55352)].join('');
var inst_55354 = figwheel.client.utils.log.call(null,inst_55353);
var state_55371__$1 = state_55371;
var statearr_55403_55480 = state_55371__$1;
(statearr_55403_55480[(2)] = inst_55354);

(statearr_55403_55480[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (43))){
var inst_55347 = (state_55371[(21)]);
var inst_55357 = (state_55371[(2)]);
var inst_55358 = cljs.core.not_empty.call(null,inst_55347);
var state_55371__$1 = (function (){var statearr_55404 = state_55371;
(statearr_55404[(27)] = inst_55357);

return statearr_55404;
})();
if(cljs.core.truth_(inst_55358)){
var statearr_55405_55481 = state_55371__$1;
(statearr_55405_55481[(1)] = (44));

} else {
var statearr_55406_55482 = state_55371__$1;
(statearr_55406_55482[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (29))){
var inst_55288 = (state_55371[(23)]);
var inst_55292 = (state_55371[(24)]);
var inst_55324 = (state_55371[(16)]);
var inst_55287 = (state_55371[(25)]);
var inst_55290 = (state_55371[(26)]);
var inst_55284 = (state_55371[(19)]);
var inst_55320 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_55323 = (function (){var all_files = inst_55284;
var res_SINGLEQUOTE_ = inst_55287;
var res = inst_55288;
var files_not_loaded = inst_55290;
var dependencies_that_loaded = inst_55292;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55288,inst_55292,inst_55324,inst_55287,inst_55290,inst_55284,inst_55320,state_val_55372,c__30467__auto__,map__55216,map__55216__$1,opts,before_jsload,on_jsload,reload_dependents,map__55217,map__55217__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55322){
var map__55407 = p__55322;
var map__55407__$1 = ((((!((map__55407 == null)))?((((map__55407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55407):map__55407);
var namespace = cljs.core.get.call(null,map__55407__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55288,inst_55292,inst_55324,inst_55287,inst_55290,inst_55284,inst_55320,state_val_55372,c__30467__auto__,map__55216,map__55216__$1,opts,before_jsload,on_jsload,reload_dependents,map__55217,map__55217__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55324__$1 = cljs.core.group_by.call(null,inst_55323,inst_55290);
var inst_55326 = (inst_55324__$1 == null);
var inst_55327 = cljs.core.not.call(null,inst_55326);
var state_55371__$1 = (function (){var statearr_55409 = state_55371;
(statearr_55409[(16)] = inst_55324__$1);

(statearr_55409[(28)] = inst_55320);

return statearr_55409;
})();
if(inst_55327){
var statearr_55410_55483 = state_55371__$1;
(statearr_55410_55483[(1)] = (32));

} else {
var statearr_55411_55484 = state_55371__$1;
(statearr_55411_55484[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (44))){
var inst_55347 = (state_55371[(21)]);
var inst_55360 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_55347);
var inst_55361 = cljs.core.pr_str.call(null,inst_55360);
var inst_55362 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_55361)].join('');
var inst_55363 = figwheel.client.utils.log.call(null,inst_55362);
var state_55371__$1 = state_55371;
var statearr_55412_55485 = state_55371__$1;
(statearr_55412_55485[(2)] = inst_55363);

(statearr_55412_55485[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (6))){
var inst_55265 = (state_55371[(2)]);
var state_55371__$1 = state_55371;
var statearr_55413_55486 = state_55371__$1;
(statearr_55413_55486[(2)] = inst_55265);

(statearr_55413_55486[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (28))){
var inst_55290 = (state_55371[(26)]);
var inst_55317 = (state_55371[(2)]);
var inst_55318 = cljs.core.not_empty.call(null,inst_55290);
var state_55371__$1 = (function (){var statearr_55414 = state_55371;
(statearr_55414[(29)] = inst_55317);

return statearr_55414;
})();
if(cljs.core.truth_(inst_55318)){
var statearr_55415_55487 = state_55371__$1;
(statearr_55415_55487[(1)] = (29));

} else {
var statearr_55416_55488 = state_55371__$1;
(statearr_55416_55488[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (25))){
var inst_55288 = (state_55371[(23)]);
var inst_55304 = (state_55371[(2)]);
var inst_55305 = cljs.core.not_empty.call(null,inst_55288);
var state_55371__$1 = (function (){var statearr_55417 = state_55371;
(statearr_55417[(30)] = inst_55304);

return statearr_55417;
})();
if(cljs.core.truth_(inst_55305)){
var statearr_55418_55489 = state_55371__$1;
(statearr_55418_55489[(1)] = (26));

} else {
var statearr_55419_55490 = state_55371__$1;
(statearr_55419_55490[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (34))){
var inst_55340 = (state_55371[(2)]);
var state_55371__$1 = state_55371;
if(cljs.core.truth_(inst_55340)){
var statearr_55420_55491 = state_55371__$1;
(statearr_55420_55491[(1)] = (38));

} else {
var statearr_55421_55492 = state_55371__$1;
(statearr_55421_55492[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (17))){
var state_55371__$1 = state_55371;
var statearr_55422_55493 = state_55371__$1;
(statearr_55422_55493[(2)] = recompile_dependents);

(statearr_55422_55493[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (3))){
var state_55371__$1 = state_55371;
var statearr_55423_55494 = state_55371__$1;
(statearr_55423_55494[(2)] = null);

(statearr_55423_55494[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (12))){
var inst_55261 = (state_55371[(2)]);
var state_55371__$1 = state_55371;
var statearr_55424_55495 = state_55371__$1;
(statearr_55424_55495[(2)] = inst_55261);

(statearr_55424_55495[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (2))){
var inst_55223 = (state_55371[(13)]);
var inst_55230 = cljs.core.seq.call(null,inst_55223);
var inst_55231 = inst_55230;
var inst_55232 = null;
var inst_55233 = (0);
var inst_55234 = (0);
var state_55371__$1 = (function (){var statearr_55425 = state_55371;
(statearr_55425[(7)] = inst_55232);

(statearr_55425[(8)] = inst_55231);

(statearr_55425[(9)] = inst_55233);

(statearr_55425[(10)] = inst_55234);

return statearr_55425;
})();
var statearr_55426_55496 = state_55371__$1;
(statearr_55426_55496[(2)] = null);

(statearr_55426_55496[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (23))){
var inst_55288 = (state_55371[(23)]);
var inst_55292 = (state_55371[(24)]);
var inst_55287 = (state_55371[(25)]);
var inst_55290 = (state_55371[(26)]);
var inst_55284 = (state_55371[(19)]);
var inst_55295 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_55297 = (function (){var all_files = inst_55284;
var res_SINGLEQUOTE_ = inst_55287;
var res = inst_55288;
var files_not_loaded = inst_55290;
var dependencies_that_loaded = inst_55292;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55288,inst_55292,inst_55287,inst_55290,inst_55284,inst_55295,state_val_55372,c__30467__auto__,map__55216,map__55216__$1,opts,before_jsload,on_jsload,reload_dependents,map__55217,map__55217__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55296){
var map__55427 = p__55296;
var map__55427__$1 = ((((!((map__55427 == null)))?((((map__55427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55427.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55427):map__55427);
var request_url = cljs.core.get.call(null,map__55427__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55288,inst_55292,inst_55287,inst_55290,inst_55284,inst_55295,state_val_55372,c__30467__auto__,map__55216,map__55216__$1,opts,before_jsload,on_jsload,reload_dependents,map__55217,map__55217__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55298 = cljs.core.reverse.call(null,inst_55292);
var inst_55299 = cljs.core.map.call(null,inst_55297,inst_55298);
var inst_55300 = cljs.core.pr_str.call(null,inst_55299);
var inst_55301 = figwheel.client.utils.log.call(null,inst_55300);
var state_55371__$1 = (function (){var statearr_55429 = state_55371;
(statearr_55429[(31)] = inst_55295);

return statearr_55429;
})();
var statearr_55430_55497 = state_55371__$1;
(statearr_55430_55497[(2)] = inst_55301);

(statearr_55430_55497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (35))){
var state_55371__$1 = state_55371;
var statearr_55431_55498 = state_55371__$1;
(statearr_55431_55498[(2)] = true);

(statearr_55431_55498[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (19))){
var inst_55274 = (state_55371[(12)]);
var inst_55280 = figwheel.client.file_reloading.expand_files.call(null,inst_55274);
var state_55371__$1 = state_55371;
var statearr_55432_55499 = state_55371__$1;
(statearr_55432_55499[(2)] = inst_55280);

(statearr_55432_55499[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (11))){
var state_55371__$1 = state_55371;
var statearr_55433_55500 = state_55371__$1;
(statearr_55433_55500[(2)] = null);

(statearr_55433_55500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (9))){
var inst_55263 = (state_55371[(2)]);
var state_55371__$1 = state_55371;
var statearr_55434_55501 = state_55371__$1;
(statearr_55434_55501[(2)] = inst_55263);

(statearr_55434_55501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (5))){
var inst_55233 = (state_55371[(9)]);
var inst_55234 = (state_55371[(10)]);
var inst_55236 = (inst_55234 < inst_55233);
var inst_55237 = inst_55236;
var state_55371__$1 = state_55371;
if(cljs.core.truth_(inst_55237)){
var statearr_55435_55502 = state_55371__$1;
(statearr_55435_55502[(1)] = (7));

} else {
var statearr_55436_55503 = state_55371__$1;
(statearr_55436_55503[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (14))){
var inst_55244 = (state_55371[(22)]);
var inst_55253 = cljs.core.first.call(null,inst_55244);
var inst_55254 = figwheel.client.file_reloading.eval_body.call(null,inst_55253,opts);
var inst_55255 = cljs.core.next.call(null,inst_55244);
var inst_55231 = inst_55255;
var inst_55232 = null;
var inst_55233 = (0);
var inst_55234 = (0);
var state_55371__$1 = (function (){var statearr_55437 = state_55371;
(statearr_55437[(32)] = inst_55254);

(statearr_55437[(7)] = inst_55232);

(statearr_55437[(8)] = inst_55231);

(statearr_55437[(9)] = inst_55233);

(statearr_55437[(10)] = inst_55234);

return statearr_55437;
})();
var statearr_55438_55504 = state_55371__$1;
(statearr_55438_55504[(2)] = null);

(statearr_55438_55504[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (45))){
var state_55371__$1 = state_55371;
var statearr_55439_55505 = state_55371__$1;
(statearr_55439_55505[(2)] = null);

(statearr_55439_55505[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (26))){
var inst_55288 = (state_55371[(23)]);
var inst_55292 = (state_55371[(24)]);
var inst_55287 = (state_55371[(25)]);
var inst_55290 = (state_55371[(26)]);
var inst_55284 = (state_55371[(19)]);
var inst_55307 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_55309 = (function (){var all_files = inst_55284;
var res_SINGLEQUOTE_ = inst_55287;
var res = inst_55288;
var files_not_loaded = inst_55290;
var dependencies_that_loaded = inst_55292;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55288,inst_55292,inst_55287,inst_55290,inst_55284,inst_55307,state_val_55372,c__30467__auto__,map__55216,map__55216__$1,opts,before_jsload,on_jsload,reload_dependents,map__55217,map__55217__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55308){
var map__55440 = p__55308;
var map__55440__$1 = ((((!((map__55440 == null)))?((((map__55440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55440):map__55440);
var namespace = cljs.core.get.call(null,map__55440__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__55440__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55288,inst_55292,inst_55287,inst_55290,inst_55284,inst_55307,state_val_55372,c__30467__auto__,map__55216,map__55216__$1,opts,before_jsload,on_jsload,reload_dependents,map__55217,map__55217__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55310 = cljs.core.map.call(null,inst_55309,inst_55288);
var inst_55311 = cljs.core.pr_str.call(null,inst_55310);
var inst_55312 = figwheel.client.utils.log.call(null,inst_55311);
var inst_55313 = (function (){var all_files = inst_55284;
var res_SINGLEQUOTE_ = inst_55287;
var res = inst_55288;
var files_not_loaded = inst_55290;
var dependencies_that_loaded = inst_55292;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55288,inst_55292,inst_55287,inst_55290,inst_55284,inst_55307,inst_55309,inst_55310,inst_55311,inst_55312,state_val_55372,c__30467__auto__,map__55216,map__55216__$1,opts,before_jsload,on_jsload,reload_dependents,map__55217,map__55217__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55288,inst_55292,inst_55287,inst_55290,inst_55284,inst_55307,inst_55309,inst_55310,inst_55311,inst_55312,state_val_55372,c__30467__auto__,map__55216,map__55216__$1,opts,before_jsload,on_jsload,reload_dependents,map__55217,map__55217__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55314 = setTimeout(inst_55313,(10));
var state_55371__$1 = (function (){var statearr_55442 = state_55371;
(statearr_55442[(33)] = inst_55312);

(statearr_55442[(34)] = inst_55307);

return statearr_55442;
})();
var statearr_55443_55506 = state_55371__$1;
(statearr_55443_55506[(2)] = inst_55314);

(statearr_55443_55506[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (16))){
var state_55371__$1 = state_55371;
var statearr_55444_55507 = state_55371__$1;
(statearr_55444_55507[(2)] = reload_dependents);

(statearr_55444_55507[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (38))){
var inst_55324 = (state_55371[(16)]);
var inst_55342 = cljs.core.apply.call(null,cljs.core.hash_map,inst_55324);
var state_55371__$1 = state_55371;
var statearr_55445_55508 = state_55371__$1;
(statearr_55445_55508[(2)] = inst_55342);

(statearr_55445_55508[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (30))){
var state_55371__$1 = state_55371;
var statearr_55446_55509 = state_55371__$1;
(statearr_55446_55509[(2)] = null);

(statearr_55446_55509[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (10))){
var inst_55244 = (state_55371[(22)]);
var inst_55246 = cljs.core.chunked_seq_QMARK_.call(null,inst_55244);
var state_55371__$1 = state_55371;
if(inst_55246){
var statearr_55447_55510 = state_55371__$1;
(statearr_55447_55510[(1)] = (13));

} else {
var statearr_55448_55511 = state_55371__$1;
(statearr_55448_55511[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (18))){
var inst_55278 = (state_55371[(2)]);
var state_55371__$1 = state_55371;
if(cljs.core.truth_(inst_55278)){
var statearr_55449_55512 = state_55371__$1;
(statearr_55449_55512[(1)] = (19));

} else {
var statearr_55450_55513 = state_55371__$1;
(statearr_55450_55513[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (42))){
var state_55371__$1 = state_55371;
var statearr_55451_55514 = state_55371__$1;
(statearr_55451_55514[(2)] = null);

(statearr_55451_55514[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (37))){
var inst_55337 = (state_55371[(2)]);
var state_55371__$1 = state_55371;
var statearr_55452_55515 = state_55371__$1;
(statearr_55452_55515[(2)] = inst_55337);

(statearr_55452_55515[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55372 === (8))){
var inst_55244 = (state_55371[(22)]);
var inst_55231 = (state_55371[(8)]);
var inst_55244__$1 = cljs.core.seq.call(null,inst_55231);
var state_55371__$1 = (function (){var statearr_55453 = state_55371;
(statearr_55453[(22)] = inst_55244__$1);

return statearr_55453;
})();
if(inst_55244__$1){
var statearr_55454_55516 = state_55371__$1;
(statearr_55454_55516[(1)] = (10));

} else {
var statearr_55455_55517 = state_55371__$1;
(statearr_55455_55517[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30467__auto__,map__55216,map__55216__$1,opts,before_jsload,on_jsload,reload_dependents,map__55217,map__55217__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30446__auto__,c__30467__auto__,map__55216,map__55216__$1,opts,before_jsload,on_jsload,reload_dependents,map__55217,map__55217__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto____0 = (function (){
var statearr_55456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55456[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto__);

(statearr_55456[(1)] = (1));

return statearr_55456;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto____1 = (function (state_55371){
while(true){
var ret_value__30448__auto__ = (function (){try{while(true){
var result__30449__auto__ = switch__30446__auto__.call(null,state_55371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30449__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30449__auto__;
}
break;
}
}catch (e55457){if((e55457 instanceof Object)){
var ex__30450__auto__ = e55457;
var statearr_55458_55518 = state_55371;
(statearr_55458_55518[(5)] = ex__30450__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30448__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55519 = state_55371;
state_55371 = G__55519;
continue;
} else {
return ret_value__30448__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto__ = function(state_55371){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto____1.call(this,state_55371);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30447__auto__;
})()
;})(switch__30446__auto__,c__30467__auto__,map__55216,map__55216__$1,opts,before_jsload,on_jsload,reload_dependents,map__55217,map__55217__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30469__auto__ = (function (){var statearr_55459 = f__30468__auto__.call(null);
(statearr_55459[(6)] = c__30467__auto__);

return statearr_55459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30469__auto__);
});})(c__30467__auto__,map__55216,map__55216__$1,opts,before_jsload,on_jsload,reload_dependents,map__55217,map__55217__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30467__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__55522,link){
var map__55523 = p__55522;
var map__55523__$1 = ((((!((map__55523 == null)))?((((map__55523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55523.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55523):map__55523);
var file = cljs.core.get.call(null,map__55523__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__55523,map__55523__$1,file){
return (function (p1__55520_SHARP_,p2__55521_SHARP_){
if(cljs.core._EQ_.call(null,p1__55520_SHARP_,p2__55521_SHARP_)){
return p1__55520_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__55523,map__55523__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__55526){
var map__55527 = p__55526;
var map__55527__$1 = ((((!((map__55527 == null)))?((((map__55527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55527):map__55527);
var match_length = cljs.core.get.call(null,map__55527__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__55527__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__55525_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__55525_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__55529_SHARP_,p2__55530_SHARP_){
return cljs.core.assoc.call(null,p1__55529_SHARP_,cljs.core.get.call(null,p2__55530_SHARP_,key),p2__55530_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_55531 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_55531);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_55531);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__55532,p__55533){
var map__55534 = p__55532;
var map__55534__$1 = ((((!((map__55534 == null)))?((((map__55534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55534):map__55534);
var on_cssload = cljs.core.get.call(null,map__55534__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__55535 = p__55533;
var map__55535__$1 = ((((!((map__55535 == null)))?((((map__55535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55535.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55535):map__55535);
var files_msg = map__55535__$1;
var files = cljs.core.get.call(null,map__55535__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1509236546358
