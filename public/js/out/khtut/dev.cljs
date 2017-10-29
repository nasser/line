(ns ^:figwheel-no-load khtut.dev
  (:require
    [khtut.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
