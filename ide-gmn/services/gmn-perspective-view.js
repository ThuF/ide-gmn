/*
 * Copyright (c) 2010-2021 SAP SE or an SAP affiliate company and Eclipse Dirigible contributors
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v2.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v20.html
 *
 * SPDX-FileCopyrightText: 2010-2021 SAP SE or an SAP affiliate company and Eclipse Dirigible contributors
 * SPDX-License-Identifier: EPL-2.0
 */
exports.getPerspective = function () {
	var perspective = {
		"name": "Guess my number",
		"link": "../ide-gmn/gmn-perspective.html", // Link to the section
		"order": "1000", // Used to sort the tabs in the sidebar
		"image": "gamepad" // Font awesome icon name
	};
	return perspective;
}