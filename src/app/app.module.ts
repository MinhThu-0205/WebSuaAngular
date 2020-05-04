import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NoidungComponent } from './noidung/noidung.component';
import { BannertopComponent } from './noidung/bannertop/bannertop.component';
import { BannerbottomComponent } from './noidung/bannerbottom/bannerbottom.component';
import { Khoisanpham1Component } from './noidung/khoisanpham1/khoisanpham1.component';
import { Khoisanpham2Component } from './noidung/khoisanpham2/khoisanpham2.component';
import { Khoisanpham3Component } from './noidung/khoisanpham3/khoisanpham3.component';
import { NoidunggioithieuComponent } from './noidunggioithieu/noidunggioithieu.component';
import { NoidungcuahangComponent } from './noidungcuahang/noidungcuahang.component';
import { NoidunglienheComponent } from './noidunglienhe/noidunglienhe.component';
import { NoidungtintucComponent } from './noidungtintuc/noidungtintuc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NoidungComponent,
    BannertopComponent,
    BannerbottomComponent,
    Khoisanpham1Component,
    Khoisanpham2Component,
    Khoisanpham3Component,
    NoidunggioithieuComponent,
    NoidungcuahangComponent,
    NoidunglienheComponent,
    NoidungtintucComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
