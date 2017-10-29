(ns figwheel.connect.build-app (:require [figwheel.client] [khtut.core] [figwheel.client.utils] [khtut.dev]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/khtut.core.mount-root (apply js/khtut.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'khtut.core/mount-root' is missing"))), :open-urls ["http://localhost:3449/index.html"], :build-id "app", :websocket-url "ws://localhost:3449/figwheel-ws"})

