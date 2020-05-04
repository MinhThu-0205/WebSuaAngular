import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoidungComponent } from './noidung/noidung.component';
import { NoidunggioithieuComponent } from './noidunggioithieu/noidunggioithieu.component';
import { NoidungcuahangComponent } from './noidungcuahang/noidungcuahang.component';
import { NoidunglienheComponent } from './noidunglienhe/noidunglienhe.component';
import { NoidungtintucComponent } from './noidungtintuc/noidungtintuc.component';


const routes: Routes = [
  { path: 'index', component: NoidungComponent },
  { path: 'gioithieu', component: NoidunggioithieuComponent },
  { path: 'cuahang', component: NoidungcuahangComponent },
  { path: 'tintuc', component: NoidungtintucComponent },
  { path: 'lienhe', component: NoidunglienheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
