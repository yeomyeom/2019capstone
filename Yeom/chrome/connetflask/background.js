// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.create({url: "127.0.0.1:5000"});
});