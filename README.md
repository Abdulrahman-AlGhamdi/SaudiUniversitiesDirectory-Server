<div align="center"><img src="https://i.ibb.co/mNRtFcB/icon.png" width="20%"></div>

<h3 align="center">Saudi Universities Directory - Server</h3>

<p align="center">
  Server that has all the information related to the saudi public universities<br>
  which provides an easy, simple and manageable API to retrieve the data.<br>
  <b><a href="https://saudiuniversitiesdirectory.herokuapp.com/api/v1" target="_blank">Server API</b></a>
</p>

##

<h3 align="center">Usage</h3>

<h4 align="center">Retreive All the Universities</h4>

<table align="center">
    <tr><td align="center">1</td><td>add to the <b><a href="https://saudiuniversitiesdirectory.herokuapp.com/api/v1" target="_blank">Base URL</b></a> this endpoint /universities</td></tr>
    <tr><td align="center">2</td><td>must provides a supported langauge: English (en) or Arabic (ar)</td></tr>
    <tr><td align="center">3</td><td><a href="https://saudiuniversitiesdirectory.herokuapp.com/api/v1/universities/en" target="_blank">URL example for retreiving all universities with English langauge</a></td></tr>
    <tr><td align="center">4</td><td>Optional - Query specific region: (central, eastern, northern, southern, western)</td></tr>
    <tr><td align="center">5</td><td><a href="https://saudiuniversitiesdirectory.herokuapp.com/api/v1/universities/en?region=central" target="_blank">URL example for retreiving all central region universities with English langauge</a></td></tr>
</table>

<h4 align="center">Retreive Specific University</h4>

<table align="center">
    <tr><td align="center">1</td><td>add to the <b><a href="https://saudiuniversitiesdirectory.herokuapp.com/api/v1" target="_blank">Base URL</b></a> this endpoint /university</td></tr>
    <tr><td align="center">2</td><td>must provides a supported langauge: English (en) or Arabic (ar)</td></tr>
    <tr><td align="center">3</td><td>provide the university ID that you get from the previous endpoint</td></tr>
    <tr><td align="center">4</td><td><a href="https://saudiuniversitiesdirectory.herokuapp.com/api/v1/university/en?id=107" target="_blank">URL example for retreiving a specific university with English langauge</a></td></tr>
</table>

##

<h3 align="center">License</h3>

```
Copyright 2021 Abdulrahman Al-Ghamdi

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
